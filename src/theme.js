import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976D2",
    },

    secondary: {
      main: "#42A5F5",
    },

    background: {
      default: "#F8FAFC",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#0F172A",
      secondary: "#64748B",
    },
  },

  typography: {
    fontFamily:
      '"Inter","Poppins","Segoe UI",sans-serif',

    h1: {
      fontWeight: 900,
      letterSpacing: "-1.5px",
    },

    h2: {
      fontWeight: 800,
      letterSpacing: "-1px",
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
      letterSpacing: ".2px",
    },
  },

  shape: {
    borderRadius: 18,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "#F8FAFC",
          color: "#0F172A",
          overflowX: "hidden",
          scrollBehavior: "smooth",
        },

        "*": {
          boxSizing: "border-box",
        },
      },
    },

    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: "24px",
          paddingRight: "24px",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 40,
          padding: "12px 28px",
          fontWeight: 700,
          transition: "all .35s ease",
        },

        contained: {
          boxShadow: "0 12px 30px rgba(25,118,210,.25)",

          "&:hover": {
            transform: "translateY(-3px)",
            boxShadow: "0 18px 40px rgba(25,118,210,.35)",
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 28,
          transition: "all .35s ease",

          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 24px 55px rgba(15,23,42,.10)",
          },
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          fontWeight: 700,
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 24,
        },
      },
    },
  },
});

export default theme;