import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../Contexts/theme-context";

export const Experience = ({ paddingLateral }) => {
  const { theme } = useContext(ThemeContext);

  const experiences = [
    {
      title: "Programador e Investigador de Desarrollo Senior",
      company: "Cooperativa Salcajá R.L.",
      duration: "Septiembre 2023 - Enero 2025",
      description:
        "Diseño y desarrollo de aplicaciones web utilizando React, Node.js y automatizaciones. Implementación de interfaces responsivas y optimización de rendimiento.",
      technologies: [
        "React",
        "Node.js",
        "Firebase",
        "NestJS",
        "Laravel",
        "Python",
        "Robot Framework",
        "Devexpress",
        "SQL Server",
        "Docker",
      ],
      logo: "/images/coope.png",
      width: paddingLateral == 25 ? 900 : 225,
      height: 100,
      style: { filter: theme === "light" ? "invert(1)" : "" },
    },
    {
      title: "Programador web",
      company: "SIGEL - INE (Insituto Nacional de Estadistica)",
      duration: "Diciembre 2022 - Agosto 2023",
      description:
        "Diseño y desarrollo de aplicaciones web utilizando Angular y Laravel.",
      technologies: ["Angular", "Laravel", "MySQL", "Docker"],
      logo: "/images/sigel.png",
      width: paddingLateral == 25 ? 500 : 200,
      height: 350,
      style: { filter: theme === "dark" ? "invert(1) grayscale(1)" : "" },
    },
  ];
  return (
    <Box
      sx={{
        paddingLeft: paddingLateral,
        paddingRight: paddingLateral,
        marginTop: 30,
      }}
    >
      <Typography
        sx={{ color: "whitePage.main" }}
        variant="h3"
        fontWeight={"bold"}
      >
        Experiencia laboral
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {experiences?.map((sub) => {
          return (
            <Card
              key={sub.id}
              sx={{
                padding: 8,
                borderRadius: 3,
              }}
            >
              <Stack
                direction={{
                  lg: "row",
                  md: "column",
                  xl: "row",
                  sm: "column",
                  xs: "column",
                }}
                alignItems="center"
                spacing={2}
              >
                <CardContent sx={{ marginLeft: 2, flex: 1 }}>
                  <Typography variant="h4" fontWeight={"bold"}>
                    {sub.title}
                  </Typography>
                  <Typography variant="h6" color="primary">
                    {sub.company} | {sub.duration}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="primary"
                    sx={{ marginTop: 1 }}
                  >
                    {sub.description}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="primary"
                    sx={{ marginTop: 1 }}
                  >
                    <strong>Tecnologías:</strong> {sub.technologies.join(", ")}.
                  </Typography>
                </CardContent>
                <img
                  src={sub.logo}
                  width={sub.width}
                  height={sub.height}
                  style={sub.style}
                />
              </Stack>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};
