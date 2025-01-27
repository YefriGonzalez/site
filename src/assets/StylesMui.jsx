import { createTheme } from "@mui/material";
import { useMemo } from "react";

const ThemeApp = (darkMode) => {
  return useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode,
          primary: {
            main: darkMode === "light" ? "#808080" : "#C5C5C5",
          },
          secondary: {
            main: darkMode === "light" ? "#3b3b3b" : "#666666",
          },
          success: {
            main: darkMode === "light" ? "#1d772b" : "#28A33B",
          },
          error: {
            main: darkMode === "light" ? "#b10303" : "#db0303",
          },
          warning: {
            main: darkMode === "light" ? "#ad6602" : "#db7f00",
          },
          info: {
            main: darkMode === "light" ? "#445da8" : "#506FC8",
          },
          whitePage: {
            main: darkMode === "light" ? "#181818" : "#ffffff",
            light: "#181818",
            dark: "#ffffff",
          },
          yellow: {
            main: "#f4d03f",
            light: "#f4d03f",
            dark: "#f4d03f",
          },
          background: {
            default: darkMode === "light" ? "#ECECEC" : "#0D0D0D",
          },
        },
        typography: {
          fontFamily: `"Gotham Normal", sans-serif`,
          fontWeightLight: 300,
          fontWeightRegular: 400,
          fontWeightMedium: 500,
        },
      }),
    [darkMode]
  );
};

export default ThemeApp;
