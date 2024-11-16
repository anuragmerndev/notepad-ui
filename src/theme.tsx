import { createTheme } from "@mui/material";

const theme = createTheme({
  colorSchemes: {
    light: true,
  },
  palette: {
    primary: {
      main: "#315cfb",
      dark: "#305dfd",
    },
    secondary: {
      main: "#f4f5f9",
      dark: "#e1e2e9",
    },
    background: {
      default: "#fff",
    },
    text: {
      primary: "#43454b",
      secondary: "#656eae",
    },
  },
  typography: {
    h6: {
      lineHeight: "1.2",
      fontWeight: "bold",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*::-webkit-scrollbar": {
          width: "0.2em",
        },
        "*::-webkit-scrollbar-track": {
          boxShadow: `inset 0 0 6px rgb(246, 247, 250)`,
          webkitBoxShadow: `inset 0 0 6px rgb(246, 247, 250)`,
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "#e1e2e9",
          borderRadius: 1,
        },
      },
    },
  },
});

export default theme;
