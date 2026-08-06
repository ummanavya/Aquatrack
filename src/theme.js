import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,

      primary: {
        main: "#1976D2",
      },

      secondary: {
        main: "#42A5F5",
      },

      background: {
        default: mode === "dark" ? "#0F172A" : "#F8FAFC",
        paper: mode === "dark" ? "#1E293B" : "#FFFFFF",
      },

      text: {
        primary: mode === "dark" ? "#F8FAFC" : "#0F172A",
        secondary: mode === "dark" ? "#CBD5E1" : "#64748B",
      },
    },

    typography: {
      fontFamily:
        '"Inter","Poppins","Segoe UI",sans-serif',

      h1: {
        fontWeight: 900,
      },

      h2: {
        fontWeight: 800,
      },

      h3: {
        fontWeight: 700,
      },

      h4: {
        fontWeight: 700,
      },

      h5: {
        fontWeight: 700,
      },

      h6: {
        fontWeight: 700,
      },

      button: {
        textTransform: "none",
        fontWeight: 700,
      },
    },

    shape: {
      borderRadius: 18,
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor:
              mode === "dark"
                ? "#0F172A"
                : "#F8FAFC",

            color:
              mode === "dark"
                ? "#F8FAFC"
                : "#0F172A",
          },
        },
      },
    },
  });