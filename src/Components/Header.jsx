import { GitHub, LightMode, LinkedIn } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../Contexts/theme-context";
import { Menu as MenuIcon } from "@mui/icons-material";
export const Header = ({
  paddingLateral,
  viewDescription = true,
  Component,
}) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const navigate = useNavigate();

  const changeMode = () => {
    const current = theme && theme === "dark" ? "light" : "dark";
    setTheme(current);
    localStorage.setItem("dark-mode", current);
    ThemeApp(current);
  };

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const pages = [
    { name: "Inicio", path: "/site/" },
    { name: "Sobre mi", path: "/site/aboutme" },
    { name: "Contacto", path: "/site/contact" },
    { name: "Tecnologias", path: "/site/stack" },
  ];

  return (
    <Box
      sx={{
        backgroundImage: 'url("/site/images/Background_Gradient.png")',
        backgroundSize: "cover",
        minHeight: "20vh",
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          paddingTop: 4,
          paddingLeft: paddingLateral,
          paddingRight: paddingLateral,
        }}
      >
        <Box
          sx={{
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(60px)",
            gap: {lg: 30,xl:30,md:5,sm:2,xs:2},
            justifyContent: "space-between",
            alignItems: "center",
            display: "flex",
            padding: 2,
            borderRadius: 4,
          }}
        >
          <Box
            sx={{
              display: {
                xs: "flex",
                sm: "flex",
                md: "none",
                lg: "none",
                xl: "none",
              },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={() => {
                    navigate(page.path);
                    handleCloseNavMenu;
                  }}
                >
                  <Typography sx={{ textAlign: "center" }}>
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              display: {
                lg: "flex",
                xl: "flex",
                md: "flex",
                sm: "none",
                xs: "none",
              },
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
            }}
          >
            {pages?.map((item, index) => {
              return (
                <Typography
                  key={index}
                  color="primary"
                  fontWeight={"bold"}
                  onClick={() => navigate(item.path)}
                >
                  {item.name}
                </Typography>
              );
            })}
          </Box>
          <Box sx={{ display: "flex" }}>
            <IconButton href="https://www.linkedin.com/in/yefrigonzalez/">
              <LinkedIn />
            </IconButton>
            <IconButton href="https://github.com/YefriGonzalez">
              <GitHub />
            </IconButton>
            <Divider orientation="vertical" />
            <IconButton onClick={changeMode}>
              <LightMode />
            </IconButton>
          </Box>
        </Box>
        {viewDescription ? (
          <Box
            sx={{
              marginTop: 7,
              display: "flex",
              flexDirection: {
                sm: "column",
                xs: "column",
                md: "column",
                lg: "row",
                xl: "row",
              },
              alignItems: "center",
              gap: 10,
            }}
          >
            <Box>
              <Typography
                sx={{ color: "whitePage.main" }}
                fontWeight={"bold"}
                variant="h3"
              >
                Hola soy Yefri
              </Typography>
              <Typography
                color="primary"
                fontWeight={"bold"}
                variant="h6"
                textAlign={"justify"}
              >
                Soy estudiante de Ingeniería en Sistemas con una pasión por
                resolver problemas y construir soluciones digitales. A pesar de
                estar aún en formación, ya cuento con más de 2 años de
                experiencia desarrollando en frontend, backend, bases de datos
                relacionales y no relacionales y automatización de procesos con
                Robot Framework. Tambien he estudiado Ciberseguridad en la OEA
                (Organizacion de los Estados Americanos), he participado en
                varios Cyberchallenges en Tec de Monterrey y UChile. Mi objetivo
                es seguir aprendiendo y aportar valor a cada proyecto en el que
                participo. ¡Bienvenido a mi página!
              </Typography>
            </Box>
            <Avatar
              alt="Tu Nombre"
              src="/site/images/profile.jpg"
              sx={{
                width: 300,
                height: 300,
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Box>
        ) : (
          <Component />
        )}
      </Box>
    </Box>
  );
};
