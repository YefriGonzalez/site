import { Copyright, Telegram } from "@mui/icons-material";
import { Box, Button, List, ListItem, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Footer = ({ paddingLateral, viewContact = true }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        backgroundImage: 'url("/site/images/Background_Gradient_footer.png")',
        minHeight: "40vh",
        marginTop: 20,
        paddingBottom: 5,
      }}
    >
      <Box sx={{ paddingLeft: paddingLateral, paddingRight: paddingLateral }}>
        {viewContact && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: {
                sm: "column",
                xs: "column",
                md: "row",
                lg: "row",
                xl: "row",
              },
            }}
          >
            <Box>
              <Typography
                variant="h3"
                sx={{ color: "whitePage.main" }}
                fontWeight={"bold"}
              >
                Trabajemos juntos
              </Typography>
              <Typography color="primary" fontWeight={"bold"} variant="h5">
                ¿Quieres hablar sobre una oportunidad para crear algo grandioso?
                Estoy listo cuando tú lo estés.
              </Typography>
            </Box>
            <Box>
              <Button variant="outlined" onClick={() => navigate("/contact")}>
                <Telegram />
                Contactar
              </Button>
            </Box>
          </Box>
        )}

        <Box
          sx={{
            paddingTop: 20,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: {
              sm: "column",
              xs: "column",
              md: "row",
              lg: "row",
              xl: "row",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              justifyContent: "right",
            }}
          >
            <Typography color="primary">Gracias por visitarme :)</Typography>
            <Typography
              color="primary"
              sx={{ alignItems: "center", display: "flex", gap: 1 }}
            >
              <Copyright />
              {new Date().getFullYear()} Yefri Gonzalez. Todos los derechos
              reservados
            </Typography>
          </Box>
          <Box
            sx={{
              display: {lg: "flex",xl: "flex",md: "flex",xs: "none",sm: "none"},
              gap: 8,
              
            }}
          >
            <Box>
              <Typography sx={{ color: "whitePage.main" }}>Links</Typography>
              <List>
                <ListItem
                  sx={{ color: "primary.main", cursor: "pointer" }}
                  onClick={() => navigate("/site/stack")}
                >
                  Tecnologias
                </ListItem>
              </List>
            </Box>
            <Box>
              <Typography sx={{ color: "whitePage.main" }}>Contacto</Typography>
              <List>
                <ListItem
                  sx={{ color: "primary.main" }}
                  component={"a"}
                  href="mail:yefrigonz21@gmail.com"
                >
                  Email
                </ListItem>
                <ListItem
                  sx={{ color: "primary.main" }}
                  component={"a"}
                  href="https://www.linkedin.com/in/yefrigonzalez/"
                >
                  Linkedin
                </ListItem>
                <ListItem
                  sx={{ color: "primary.main" }}
                  component={"a"}
                  href="https://github.com/YefriGonzalez"
                >
                  Github
                </ListItem>
              </List>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
