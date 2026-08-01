import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Avatar,
  Box,
  Button,
  Checkbox,
  CssBaseline,
  Divider,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import {
  WaterDropRounded,
  AnalyticsRounded,
  WarningAmberRounded,
  ReceiptLongRounded,
  EmailRounded,
  LockRounded,
  Visibility,
  VisibilityOff,
  ArrowForwardRounded,
  HomeRounded,
} from "@mui/icons-material";

import { GoogleLogin } from "@react-oauth/google";

import axios from "axios";
import api from "../services/api";

import logo from "../images/logo.png";
import bgImage from "../assets/bgimage.jpg";

// Keep this import so the class-based overrides in Login.css (MUI input
// theming, autofill fix, scrollbar styling, etc.) are actually applied.
import "../styles/Login.css";

// ---------------------------------------------------------------------
// Animation keyframes. Defined once, reused via sx `animation` below.
// All respect prefers-reduced-motion (handled per-element below).
// ---------------------------------------------------------------------
const fadeSlideUp = {
  "@keyframes fadeSlideUp": {
    from: { opacity: 0, transform: "translateY(18px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
};

const fadeSlideLeft = {
  "@keyframes fadeSlideLeft": {
    from: { opacity: 0, transform: "translateX(-16px)" },
    to: { opacity: 1, transform: "translateX(0)" },
  },
};

const cardEntrance = {
  "@keyframes cardEntrance": {
    from: { opacity: 0, transform: "translateY(24px) scale(0.97)" },
    to: { opacity: 1, transform: "translateY(0) scale(1)" },
  },
};

const floatSlow = {
  "@keyframes floatSlow": {
    "0%, 100%": { transform: "translateY(0)" },
    "50%": { transform: "translateY(-8px)" },
  },
};

// Helper: build an sx animation entry with a given delay, honoring
// prefers-reduced-motion by disabling it for users who've opted out.
const animate = (name, keyframes, delay = 0, duration = "0.7s") => ({
  ...keyframes,
  opacity: 0,
  animation: `${name} ${duration} cubic-bezier(0.16,1,0.3,1) ${delay}s forwards`,
  "@media (prefers-reduced-motion: reduce)": {
    animation: "none",
    opacity: 1,
  },
});

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const features = [
    {
      icon: <WaterDropRounded />,
      title: "Water Monitoring",
      description: "Real-time apartment water usage tracking",
    },
    {
      icon: <AnalyticsRounded />,
      title: "Analytics",
      description: "Daily, weekly & monthly usage reports",
    },
    {
      icon: <WarningAmberRounded />,
      title: "Leak Detection",
      description: "Automatic abnormal usage alerts",
    },
    {
      icon: <ReceiptLongRounded />,
      title: "Smart Billing",
      description: "Generate accurate household bills",
    },
  ];

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await api.post("/auth/login", { email, password });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);
      localStorage.setItem("username", response.data.username);
      localStorage.setItem("email", response.data.email);

      navigate(
        response.data.role === "ADMIN" ? "/admin-dashboard" : "/resident-dashboard"
      );
    } catch (err) {
      console.error(err);
      alert("Invalid Email or Password");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async (credentialResponse) => {
    try {
      const response = await axios.post("http://localhost:8082/auth/google", {
        token: credentialResponse.credential,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);
      localStorage.setItem("username", response.data.username);
      localStorage.setItem("email", response.data.email);

      navigate(
        response.data.role === "ADMIN" ? "/admin-dashboard" : "/resident-dashboard"
      );
    } catch (err) {
      console.error(err);
      alert("Google Login Failed");
    }
  };

  return (
    <>
      <CssBaseline />

      {/* Full-viewport wrapper. 100dvh is used where supported so mobile/desktop
          browser chrome (address bar, zoom rounding) can't create a stray
          scrollbar; falls back to 100vh on older browsers. */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100vw",
          height: "100vh",
          "@supports (height: 100dvh)": {
            height: "100dvh",
          },
          overflow: "hidden",
          bgcolor: "#071B34",
        }}
      >
        {/* ================= LEFT PANEL (brand / features) ================= */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            justifyContent: "center",
            flex: "1 1 58%",
            minHeight: 0,
            position: "relative",
            overflow: "hidden",
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            px: { md: 5, lg: 8 },
            py: 5,
          }}
        >
          {/* Overlay */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(rgba(5,22,42,.74),rgba(5,22,42,.86))",
            }}
          />

          {/* Content */}
          <Box sx={{ position: "relative", zIndex: 2, maxWidth: 560 }}>
            {/* Logo */}
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              mb={5}
              sx={animate("fadeSlideUp", fadeSlideUp, 0.05)}
            >
              <Avatar
                src={logo}
                sx={{
                  width: 56,
                  height: 56,
                  bgcolor: "#ffffff",
                  ...animate("floatSlow", floatSlow, 1, "4s"),
                  animationIterationCount: "infinite",
                  animationTimingFunction: "ease-in-out",
                }}
              />
              <Box>
                <Typography variant="h5" fontWeight={700} color="white" lineHeight={1.2}>
                  AquaTrack
                </Typography>
                <Typography sx={{ color: "#8FC5F2", fontSize: 14 }}>
                  Smart Water Tracking & Billing
                </Typography>
              </Box>
            </Stack>

            {/* Heading */}
            <Typography
              sx={{
                color: "#ffffff",
                fontWeight: 800,
                fontSize: { md: 38, lg: 46 },
                lineHeight: 1.15,
                letterSpacing: "-0.5px",
                ...animate("fadeSlideUp", fadeSlideUp, 0.15),
              }}
            >
              Smart Water
              <Box component="span" sx={{ display: "block", color: "#4FC3F7" }}>
                Management
              </Box>
              for Modern Apartments
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                mt: 2.5,
                mb: 4,
                color: "#C7DBEE",
                lineHeight: 1.7,
                fontSize: 15.5,
                ...animate("fadeSlideUp", fadeSlideUp, 0.25),
              }}
            >
              Monitor apartment water consumption, detect leakages, automate
              billing, generate reports and manage residents through one
              intelligent platform.
            </Typography>

            {/* Feature Cards */}
            <Stack spacing={1.25}>
              {features.map((feature, i) => (
                <Paper
                  key={feature.title}
                  elevation={0}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    px: 2.25,
                    py: 1.4,
                    borderRadius: 3,
                    background: "rgba(255,255,255,.07)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,.08)",
                    transition: "transform .25s ease, background .25s ease",
                    "&:hover": {
                      transform: "translateX(6px)",
                      background: "rgba(255,255,255,.12)",
                    },
                    ...animate("fadeSlideLeft", fadeSlideLeft, 0.35 + i * 0.1),
                  }}
                >
                  <Avatar
                    sx={{
                      width: 42,
                      height: 42,
                      bgcolor: "rgba(79,195,247,.16)",
                      color: "#4FC3F7",
                    }}
                  >
                    {feature.icon}
                  </Avatar>
                  <Box>
                    <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: 14.5 }}>
                      {feature.title}
                    </Typography>
                    <Typography sx={{ color: "#B9CEE1", fontSize: 12.5 }}>
                      {feature.description}
                    </Typography>
                  </Box>
                </Paper>
              ))}
            </Stack>
          </Box>
        </Box>

        {/* ================= RIGHT PANEL (sign-in card) ================= */}
        <Box
          sx={{
            flex: { xs: "1 1 auto", md: "1 1 42%" },
            // Flex items default to min-height: auto, which stops them from
            // ever shrinking below their content's natural size — this was
            // the actual bug: overflowY:"auto" below had no effect because
            // this box just grew past the viewport instead of clipping to
            // it. minHeight: 0 forces it to respect the container height,
            // so overflow scrolling on THIS panel (not the whole page)
            // actually kicks in when content is tall.
            minHeight: 0,
            maxHeight: "100%",
            display: "flex",
            justifyContent: "center",
            // flex-start (not center) so a tall card is never clipped at the
            // top with no way to scroll back up to see it — it always
            // renders from its own top edge, padded evenly instead.
            alignItems: "flex-start",
            background: "linear-gradient(135deg,#081B33,#102B4A)",
            overflowY: "auto",
            px: { xs: 3, md: 4 },
            py: { xs: 3, md: 4 },
          }}
        >
          <Paper
            elevation={0}
            sx={{
              width: "100%",
              maxWidth: 420,
              p: { xs: 3, sm: 3.5 },
              borderRadius: 5,
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,.08)",
              boxShadow: "0 25px 60px rgba(0,0,0,.35)",
              ...animate("cardEntrance", cardEntrance, 0.15, "0.65s"),
            }}
          >
            {/* Header */}
            <Stack spacing={0.5} alignItems="center" mb={2}>
              <Avatar src={logo} sx={{ width: 48, height: 48, bgcolor: "#fff" }} />
              <Typography
                sx={{ color: "#4FC3F7", letterSpacing: 3, fontWeight: 700, fontSize: 12, mt: 0.5 }}
              >
                WELCOME BACK
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 800, color: "#fff" }}>
                Sign In
              </Typography>
              <Typography align="center" sx={{ color: "#C7D8E8", fontSize: 14, maxWidth: 300 }}>
                Login to continue managing your apartment water usage, billing
                and residents.
              </Typography>
            </Stack>

            {/* Login Form */}
            <Box
              component="form"
              onSubmit={handleLogin}
              noValidate
              sx={animate("fadeSlideUp", fadeSlideUp, 0.35)}
            >
              <TextField
                fullWidth
                required
                type="email"
                label="Email Address"
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailRounded color="primary" fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                fullWidth
                required
                margin="normal"
                label="Password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockRounded color="primary" fontSize="small" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ mt: 0.5, mb: 2 }}
              >
                <FormControlLabel control={<Checkbox size="small" />} label="Remember Me" />
                <Link
                  component="button"
                  type="button"
                  underline="hover"
                  onClick={() => navigate("/forgot-password")}
                  sx={{ fontSize: 14 }}
                >
                  Forgot Password?
                </Link>
              </Stack>

              <Button
                fullWidth
                type="submit"
                variant="contained"
                size="large"
                disabled={loading}
                endIcon={<ArrowForwardRounded />}
                sx={{
                  py: 1.2,
                  borderRadius: 3,
                  fontSize: 15.5,
                  fontWeight: 700,
                  textTransform: "none",
                  background: "linear-gradient(90deg,#2196F3,#42A5F5)",
                  boxShadow: "0 8px 20px rgba(33,150,243,.35)",
                  transition: "transform .2s ease, box-shadow .2s ease",
                  "&:hover": {
                    background: "linear-gradient(90deg,#1E88E5,#2196F3)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 26px rgba(33,150,243,.45)",
                  },
                  "&:active": {
                    transform: "translateY(0)",
                  },
                }}
              >
                {loading ? "Signing In..." : "Sign In"}
              </Button>

              <Divider sx={{ my: 2, color: "#7E97AF", fontSize: 12 }}>OR</Divider>

              <Box
                display="flex"
                justifyContent="center"
                mb={2}
                sx={{
                  transition: "transform .2s ease",
                  "&:hover": { transform: "translateY(-2px)" },
                }}
              >
                <GoogleLogin
                  onSuccess={handleGoogleLogin}
                  onError={() => alert("Google Login Failed")}
                />
              </Box>

              <Typography align="center" sx={{ color: "#C7D8E8", fontSize: 14.5 }}>
                Don't have an account?{" "}
                <Link
                  component="button"
                  type="button"
                  underline="hover"
                  onClick={() => navigate("/create-account")}
                >
                  Create Account
                </Link>
              </Typography>

              <Button
                fullWidth
                variant="outlined"
                startIcon={<HomeRounded />}
                size="small"
                sx={{
                  mt: 2,
                  py: 1,
                  borderRadius: 3,
                  textTransform: "none",
                  transition: "transform .2s ease",
                  "&:hover": { transform: "translateY(-2px)" },
                }}
                onClick={() => navigate("/")}
              >
                Back to Home
              </Button>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={animate("fadeSlideUp", fadeSlideUp, 0.5)}
            >
              <Stack direction="row" spacing={1} alignItems="center">
                <Avatar src={logo} sx={{ width: 24, height: 24 }} />
                <Typography color="white" fontWeight={700} fontSize={14}>
                  AquaTrack
                </Typography>
              </Stack>
              <Typography sx={{ color: "#8FA8C0", fontSize: 12.5 }}>© 2026</Typography>
            </Stack>
          </Paper>
        </Box>
      </Box>
    </>
  );
}