import { Footer, Header } from "@components";
import { paddingLateral } from "@global";
import {
  Box,
  Button,
  Card,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { SendEmail } from "@services";
import { useState } from "react";
import * as yup from "yup";
import Swal from "sweetalert2";
const Contact = () => {
  const [fields, setFields] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });
  const validationSchema = yup.object({
    email: yup
      .string()
      .required("El correo electronico es requerido")
      .email("Ingrese un email correcto")
      .max(100, "El correo es demasiado largo."),
    name: yup
      .string()
      .required("El nombre es requerido")
      .max(100, "El nombre es demasiado largo."),
    subject: yup
      .string()
      .required("El asunto es requerido")
      .max(100, "El asunto es demasiado largo."),
    message: yup
      .string()
      .required("El mensaje es requerido")
      .max(1000, "El mensaje es demasiado largo."),
  });

  const component = () => {
    return (
      <Box sx={{ marginTop: 15 }}>
        <Typography
          sx={{ color: "whitePage.main" }}
          variant="h3"
          fontWeight={"bold"}
        >
          Contactame
        </Typography>
        <Typography color="primary" variant="h6" fontWeight={"bold"}>
          Construyamos algo asombroso.
        </Typography>
      </Box>
    );
  };

  const handleChange = (event) => {
    const { name, value } = event;
    setFields({ ...fields, [name]: value });
  };

  const sendMessage = () => {
    if (validateForm()) {
      SendEmail(fields).then((res) => {
        if (res.status) {
          Toast.fire({
            icon: "success",
            title: res.message,
          });
        }
      });
    }
  };
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  const validateForm = () => {
    try {
      validationSchema.validateSync(fields, { abortEarly: false });
      setErrors({});
      return true;
    } catch (errosValidation) {
      const nErrors = {};
      errosValidation.inner?.forEach((error) => {
        nErrors[error.path] = error.message;
      });
      setErrors(nErrors);
      return false;
    }
  };

  return (
    <>
      <Header
        paddingLateral={paddingLateral}
        viewDescription={false}
        Component={component}
      />
      <Box
        sx={{
          paddingLeft: paddingLateral,
          paddingRight: paddingLateral,
          paddingTop: 10,
        }}
      >
        <Card
          sx={{
            padding: 5,
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Typography
            variant="h5"
            textAlign={"center"}
            sx={{ color: "whitePage.main" }}
          >
            Nuevo mensaje
          </Typography>
          <TextField
            fullWidth
            onChange={(event) =>
              handleChange({ value: event.target.value, name: "email" })
            }
            placeholder="Ingrese su correo electronico"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">Email: </InputAdornment>
                ),
              },
            }}
            helperText={errors.email}
            error={!!errors.email}
            variant="standard"
          />
          <TextField
            fullWidth
            id="standard-start-adornment"
            placeholder="Ingrese su nombre"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">Nombre: </InputAdornment>
                ),
              },
            }}
            onChange={(event) =>
              handleChange({ value: event.target.value, name: "name" })
            }
            helperText={errors.name}
            error={!!errors.name}
            variant="standard"
          />

          <TextField
            nombre
            fullWidth
            id="standard-start-adornment"
            placeholder="Ingrese el asunto"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">Asunto: </InputAdornment>
                ),
              },
            }}
            onChange={(event) =>
              handleChange({ value: event.target.value, name: "subject" })
            }
            helperText={errors.subject}
            error={!!errors.subject}
            variant="standard"
          />

          <TextField
            helperText={errors.message}
            error={!!errors.message}
            fullWidth
            label="Escriba su mensaje"
            multiline
            rows={6}
            onChange={(event) =>
              handleChange({ value: event.target.value, name: "message" })
            }
          />
          <Button variant="outlined" onClick={sendMessage}>
            Enviar
          </Button>
        </Card>
      </Box>
      <Footer paddingLateral={paddingLateral} viewContact={false} />
    </>
  );
};

export default Contact;
