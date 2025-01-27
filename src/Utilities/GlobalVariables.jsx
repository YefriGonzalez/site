import { useMediaQuery, useTheme } from "@mui/material";


export const paddingLateral = () => {
    const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isXtraLargeScreen = useMediaQuery(
    theme.breakpoints.between("lg", "xl")
  );

  if (isSmallScreen || isMediumScreen) {
    return 5;
  } else if (isXtraLargeScreen || isLargeScreen) {
    return 25;
  }
  return 25;
};
