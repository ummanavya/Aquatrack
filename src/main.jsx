import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { getTheme } from "./theme";

import App from "./App";
import "./i18n";

function Root() {

  const [mode, setMode] = useState(
    localStorage.getItem("theme") || "light"
  );

  const theme = useMemo(
    () => getTheme(mode),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <GoogleOAuthProvider clientId="439420771466-ghe01upp424rblf04m9tsuvron76h22a.apps.googleusercontent.com">

        <BrowserRouter>

          <App
            mode={mode}
            setMode={setMode}
          />

        </BrowserRouter>

      </GoogleOAuthProvider>

    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);