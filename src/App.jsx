import { lazy, Suspense, useState } from "react";
import { ThemeContext } from "./Contexts/theme-context";
import { CssBaseline, ThemeProvider } from "@mui/material";
import ThemeApp from "./Material/StylesMui";
import { Route, Routes } from "react-router-dom";
import LoadingPage from "./Pages/NotProtected/LoadingPage";
import { dashboardRoutes } from "@routes";
const Home = lazy(() => import("./Pages/NotProtected/Home"));
const NotFound = lazy(() => import("./Pages/NotProtected/NotFound"));
function App() {
  const isBrowserDefaultDark = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const getDefaultTheme = () => {
    const localStorageTheme = localStorage.getItem("dark-mode");
    const browserDefault = isBrowserDefaultDark() ? "dark" : "light";
    return localStorageTheme || browserDefault;
  };

  const [theme, setTheme] = useState(getDefaultTheme());
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <CssBaseline />
        <div
          style={{
            minHeight: "100vh",
            width: "100%",
            backgroundColor: ThemeApp(theme).palette.background.default,
          }}
        >
          <ThemeProvider theme={ThemeApp(theme)}>
            <Suspense fallback={<LoadingPage />}>
              <Routes>
                <Route path="/site/" element={<Home />} />
                {dashboardRoutes()}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </ThemeProvider>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
