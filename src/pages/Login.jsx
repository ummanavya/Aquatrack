import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Avatar,
  Stack,
  Divider,
  Checkbox,
  FormControlLabel,
  Link,
  IconButton,
  InputAdornment,
  CssBaseline,
} from "@mui/material";

import {
  EmailRounded,
  LockRounded,
  Visibility,
  VisibilityOff,
  HomeRounded,
  ArrowForwardRounded,
} from "@mui/icons-material";

import { GoogleLogin } from "@react-oauth/google";

import axios from "axios";
import api from "../services/api";

import "../styles/login.css";

import logo from "../images/logo.png";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
    // ================= Login =================

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);
      localStorage.setItem("username", response.data.username);
      localStorage.setItem("email", response.data.email);

      if (response.data.role === "ADMIN") {
        navigate("/admin-dashboard");
      } else {
        navigate("/resident-dashboard");
      }
    } catch (error) {
      alert("Invalid Email or Password");
      console.error(error);
    }
  };

  // ================= Google Login =================

  const handleGoogleLogin = async (credentialResponse) => {
    try {
      const response = await axios.post(
        "http://localhost:8082/auth/google",
        {
          token: credentialResponse.credential,
        }
      );

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);
      localStorage.setItem("username", response.data.username);
      localStorage.setItem("email", response.data.email);

      if (response.data.role === "ADMIN") {
        navigate("/admin-dashboard");
      } else {
        navigate("/resident-dashboard");
      }
    } catch (error) {
      alert("Google Login Failed");
      console.error(error);
    }
  };

  return (
    <>
      <CssBaseline />

      <Box className="login-page">

        {/* Background Bubbles */}

        <motion.div
          className="bubble bubble1"
          animate={{ y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />

        <motion.div
          className="bubble bubble2"
          animate={{ y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 8 }}
        />

        <Grid container className="login-container">
                    {/* ================= LEFT PANEL ================= */}

          <Grid
            item
            xs={12}
            md={7}
            className="left-panel"
          >
            <Box className="left-overlay" />

            <Box className="left-content">

              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
              >
                <Avatar
                  src={logo}
                  className="logo-avatar"
                />

                <Box>
                  <Typography className="brand-title">
                    AquaTrack
                  </Typography>

                  <Typography className="brand-subtitle">
                    Smart Water Management Platform
                  </Typography>
                </Box>

              </Stack>

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >

                <Typography className="hero-title">
                  Water
                  <br />
                  Management
                  <br />
                  <span className="highlight">
                    Made Smarter.
                  </span>
                </Typography>

              </motion.div>

              <Typography className="hero-description">
                Monitor apartment water usage, automate monthly billing,
                detect leakages instantly, receive smart alerts, and manage
                every resident through one secure dashboard.
              </Typography>

              <Stack
                direction="row"
                spacing={5}
                className="stats-row"
              >

                <Box>
                  <Typography className="stat-number">
                    24×7
                  </Typography>
                  <Typography className="stat-text">
                    Monitoring
                  </Typography>
                </Box>

                <Box>
                  <Typography className="stat-number">
                    AI
                  </Typography>
                  <Typography className="stat-text">
                    Leak Detection
                  </Typography>
                </Box>

                <Box>
                  <Typography className="stat-number">
                    100%
                  </Typography>
                  <Typography className="stat-text">
                    Digital Billing
                  </Typography>
                </Box>

              </Stack>

            </Box>

          </Grid>
                    {/* ================= RIGHT PANEL ================= */}

          <Grid
            item
            xs={12}
            md={5}
            className="right-panel"
          >
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{ width: "100%", maxWidth: "450px" }}
            >
              <Card className="login-card">

                <CardContent sx={{ p: 5 }}>

                  <Typography className="welcome-text">
                    WELCOME BACK
                  </Typography>

                  <Typography className="signin-title">
                    Sign In
                  </Typography>

                  <Typography className="signin-subtitle">
                    Sign in to access your AquaTrack dashboard.
                  </Typography>

                  <form onSubmit={handleLogin}>

                    {/* Email */}

                    <TextField
                      fullWidth
                      margin="normal"
                      label="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input-field"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <EmailRounded color="primary" />
                          </InputAdornment>
                        ),
                      }}
                    />

                    {/* Password */}

                    <TextField
                      fullWidth
                      margin="normal"
                      label="Password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="input-field"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockRounded color="primary" />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() =>
                                setShowPassword(!showPassword)
                              }
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />

                    <Box className="remember-row">

                      <FormControlLabel
                        control={<Checkbox />}
                        label="Remember Me"
                      />

                      <Link
                        component="button"
                        underline="hover"
                        onClick={() =>
                          navigate("/forgot-password")
                        }
                      >
                        Forgot Password?
                      </Link>

                    </Box>

                    <Button
                      fullWidth
                      type="submit"
                      variant="contained"
                      endIcon={<ArrowForwardRounded />}
                      className="signin-button"
                    >
                      Sign In
                    </Button>

                    <Divider sx={{ my: 3 }}>
                      OR
                    </Divider>

                    <Box
                      display="flex"
                      justifyContent="center"
                    >
                      <GoogleLogin
                        onSuccess={handleGoogleLogin}
                        onError={() =>
                          alert("Google Login Failed")
                        }
                      />
                    </Box>
                                        {/* Back to Home */}

                    <Button
                      fullWidth
                      variant="outlined"
                      startIcon={<HomeRounded />}
                      className="back-home-btn"
                      onClick={() => navigate("/")}
                      sx={{ mt: 3 }}
                    >
                      Back to Home
                    </Button>

                  </form>

                  <Divider className="footer-divider" sx={{ my: 4 }} />

                  {/* Footer */}

                  <Box className="login-footer">

                    <Stack
                      direction="row"
                      spacing={1}
                      alignItems="center"
                    >
                      <Avatar
                        src={logo}
                        sx={{
                          width: 32,
                          height: 32,
                        }}
                      />

                      <Typography className="footer-brand">
                        AquaTrack
                      </Typography>

                    </Stack>

                    <Typography className="footer-version">
                      © 2026 AquaTrack
                    </Typography>

                  </Box>

                </CardContent>

              </Card>

            </motion.div>

          </Grid>

        </Grid>

      </Box>

    </>

  );

}