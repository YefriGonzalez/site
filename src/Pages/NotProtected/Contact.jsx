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
import * as yup from "yup";
const Contact = () => {
  const validation = yup.object({
    email: yup
      .string()
      .required("El correo electronico es requerido")
      .email("Ingrese un email correcto"),
    name: yup.string().required("El nombre es requerido"),
    subject: yup.string().required("El asunto es requerido"),
    message: yup.string().required("El mensaje es requerido"),
  });
  
  const component = () => {
    return (
      <Box sx={{ marginTop: 15 }}>
        <Typography sx={{ color: "whitePage.main" }} variant="h3" fontWeight={"bold"}>
          Contactame
        </Typography>
        <Typography color="primary" variant="h6" fontWeight={"bold"}>
          Construyamos algo asombroso.
        </Typography>
      </Box>
    );
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
          <Typography variant="h5" textAlign={"center"} sx={{ color: "whitePage.main" }}>
            Nuevo mensaje
          </Typography>
          <TextField
            fullWidth
            id="standard-start-adornment"
            placeholder="Ingrese su correo electronico"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">Email: </InputAdornment>
                ),
              },
            }}
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
            variant="standard"
          />

          <TextField fullWidth label="Escriba su mensaje" multiline rows={6} />
          <Button variant="outlined">Enviar</Button>
        </Card>
      </Box>
      <Footer paddingLateral={paddingLateral} viewContact={false} />
    </>
  );
};

export default Contact;
