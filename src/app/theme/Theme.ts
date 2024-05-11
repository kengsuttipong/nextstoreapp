"use client";
import { createTheme } from "@mui/material/styles";
import { Colors } from "./Colors";
import typography from "./Typography";
import { shadows } from "./Shadows";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: Colors.primary,
      light: Colors.primary,
      dark: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
      light: Colors.secondary,
      dark: Colors.secondary,
    },
  },
  typography: typography,
  shadows: shadows,
});
export default theme;
