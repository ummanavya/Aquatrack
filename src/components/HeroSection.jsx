import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Chip,
  Container,
  Stack,
  Typography,
  Card,
  CardContent,
  Avatar,
  LinearProgress,
} from "@mui/material";

import Grid from "@mui/material/Grid";

import {
  ArrowForwardRounded,
  PlayCircleRounded,
  WaterDropRounded,
  AnalyticsRounded,
  SecurityRounded,
  NotificationsActiveRounded,
  TrendingUpRounded,
  ApartmentRounded,
  ReceiptLongRounded,
  WaterRounded,
  VerifiedRounded,
  AccessTimeFilledRounded,
} from "@mui/icons-material";

import { motion } from "framer-motion";

import heroImage from "../assets/bgimage.jpg";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Box
        id="home"
        sx={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",

          pt: {
            xs: 12,
            md: 16,
          },

          pb: 10,

          backgroundImage: `
            linear-gradient(
              rgba(8,22,50,.72),
              rgba(8,22,50,.84)
            ),
            url(${heroImage})
          `,

          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Glow */}

        <Box
          sx={{
            position: "absolute",
            width: 700,
            height: 700,
            borderRadius: "50%",
            top: -250,
            right: -220,
            filter: "blur(120px)",
            background:
              "radial-gradient(circle,#3B82F655,transparent 70%)",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: 600,
            height: 600,
            borderRadius: "50%",
            left: -220,
            bottom: -220,
            filter: "blur(120px)",
            background:
              "radial-gradient(circle,#2563EB44,transparent 70%)",
          }}
        />

        <Container
          maxWidth="xl"
          sx={{
            position: "relative",
            zIndex: 2,
          }}
        >
          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                lg: "1.08fr .92fr",
              },

              alignItems: "center",

              gap: 10,
            }}
          >
            {/* LEFT SIDE */}

            <Box>

              <Chip
                icon={<WaterDropRounded />}
                label="AI Powered Smart Water Management"
                sx={{
                  mb: 4,
                  color: "#fff",
                  background: "rgba(255,255,255,.12)",
                  backdropFilter: "blur(18px)",
                  border: "1px solid rgba(255,255,255,.15)",
                }}
              />

              <Typography
                sx={{
                  fontWeight: 900,
                  fontSize: {
                    xs: "3.5rem",
                    md: "5rem",
                    lg: "6rem",
                  },
                  lineHeight: 1.05,
                  color: "#fff",
                }}
              >
                Smart Water
              </Typography>

              <Typography
                sx={{
                  fontWeight: 900,
                  fontSize: {
                    xs: "3.5rem",
                    md: "5rem",
                    lg: "6rem",
                  },
                  lineHeight: 1.05,
                  background:
                    "linear-gradient(90deg,#38BDF8,#2563EB,#8B5CF6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Management
              </Typography>

              <Typography
                sx={{
                  fontWeight: 900,
                  fontSize: {
                    xs: "3.5rem",
                    md: "5rem",
                    lg: "6rem",
                  },
                  lineHeight: 1.05,
                  color: "#fff",
                  mb: 4,
                }}
              >
                For Apartments
              </Typography>

              <Typography
                sx={{
                  maxWidth: 620,
                  fontSize: 20,
                  lineHeight: 1.9,
                  color: "rgba(255,255,255,.88)",
                }}
              >
                Monitor every litre of water, automate apartment billing,
                detect leakages instantly, analyse consumption trends,
                and manage your entire residential community through one
                secure AI-powered platform.
              </Typography>
                            {/* ================= Buttons ================= */}

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={3}
                mt={5}
              >
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardRounded />}
                  onClick={() => navigate("/login")}
                  sx={{
                    px: 5,
                    py: 1.8,
                    borderRadius: "50px",
                    fontWeight: 700,
                    background:
                      "linear-gradient(135deg,#1976D2,#42A5F5)",

                    "&:hover": {
                      background:
                        "linear-gradient(135deg,#1565C0,#2196F3)",
                    },
                  }}
                >
                  Get Started
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<PlayCircleRounded />}
                  sx={{
                    px: 5,
                    py: 1.8,
                    borderRadius: "50px",
                    color: "#fff",
                    borderColor: "rgba(255,255,255,.35)",

                    "&:hover": {
                      borderColor: "#42A5F5",
                      bgcolor: "rgba(255,255,255,.05)",
                    },
                  }}
                >
                  Watch Demo
                </Button>
              </Stack>

              {/* ================= Feature Chips ================= */}

              <Stack
                direction="row"
                spacing={2}
                mt={5}
                flexWrap="wrap"
                useFlexGap
              >
                {[
                  {
                    icon: <AnalyticsRounded />,
                    label: "Analytics",
                  },
                  {
                    icon: <SecurityRounded />,
                    label: "Secure",
                  },
                  {
                    icon: <NotificationsActiveRounded />,
                    label: "Leak Alerts",
                  },
                ].map((item, index) => (
                  <Chip
                    key={index}
                    icon={item.icon}
                    label={item.label}
                    sx={{
                      px: 1,
                      py: 2.8,
                      color: "#fff",
                      fontWeight: 700,
                      bgcolor: "rgba(255,255,255,.15)",
                      backdropFilter: "blur(12px)",
                      border:
                        "1px solid rgba(255,255,255,.25)",

                      "& .MuiChip-icon": {
                        color: "#38BDF8",
                      },

                      "& .MuiChip-label": {
                        color: "#fff",
                      },

                      "&:hover": {
                        bgcolor: "rgba(255,255,255,.22)",
                        transform: "translateY(-3px)",
                      },
                    }}
                  />
                ))}
              </Stack>

            </Box>

            {/* ================= Right Dashboard ================= */}

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                sx={{
                  width: "100%",
                  maxWidth: 720,
                  bgcolor: "rgba(18,30,58,.72)",
                  backdropFilter: "blur(28px)",
                  borderRadius: "30px",
                  border:
                    "1px solid rgba(255,255,255,.08)",
                  boxShadow:
                    "0 40px 100px rgba(0,0,0,.35)",
                  p: 3,
                }}
              >
                <CardContent>

                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={4}
                  >
                    <Box>
                      <Typography
                        color="#fff"
                        fontWeight={800}
                        fontSize={32}
                      >
                        AquaTrack
                      </Typography>

                      <Typography color="#9CA3AF">
                        Live Apartment Dashboard
                      </Typography>
                    </Box>

                    <Chip
                      label="LIVE"
                      color="success"
                    />
                  </Box>

                  {/* KPI Cards */}

                  <Grid container spacing={2}>

                    {[
                      {
                        icon: <WaterRounded />,
                        value: "18.5K",
                        title: "Litres",
                      },
                      {
                        icon: <ApartmentRounded />,
                        value: "520",
                        title: "Apartments",
                      },
                      {
                        icon: <ReceiptLongRounded />,
                        value: "₹2.4L",
                        title: "Revenue",
                      },
                      {
                        icon: <TrendingUpRounded />,
                        value: "98%",
                        title: "Efficiency",
                      },
                    ].map((item, index) => (
                      <Grid
                        size={{ xs: 6, md: 3 }}
                        key={index}
                      >
                        <Card
                          sx={{
                            bgcolor:
                              "rgba(255,255,255,.05)",
                            color: "#fff",
                            borderRadius: "18px",
                            textAlign: "center",
                          }}
                        >
                          <CardContent>

                            <Avatar
                              sx={{
                                bgcolor: "#1976D2",
                                mx: "auto",
                                mb: 1,
                              }}
                            >
                              {item.icon}
                            </Avatar>

                            <Typography
                              fontWeight={800}
                              fontSize={22}
                            >
                              {item.value}
                            </Typography>

                            <Typography
                              color="#94A3B8"
                              fontSize={13}
                            >
                              {item.title}
                            </Typography>

                          </CardContent>
                        </Card>
                      </Grid>
                    ))}

                  </Grid>
                                    {/* ================= Water Usage ================= */}

                  <Card
                    sx={{
                      mt: 3,
                      bgcolor: "rgba(255,255,255,.05)",
                      borderRadius: "22px",
                    }}
                  >
                    <CardContent>

                      <Typography
                        color="#fff"
                        fontWeight={700}
                        mb={3}
                      >
                        Today's Water Consumption
                      </Typography>

                      {[
                        { name: "Block A", value: 82, color: "primary" },
                        { name: "Block B", value: 67, color: "success" },
                        { name: "Block C", value: 48, color: "warning" },
                      ].map((item, index) => (
                        <Box key={index} mb={2}>
                          <Typography color="#fff" mb={1}>
                            {item.name}
                          </Typography>

                          <LinearProgress
                            variant="determinate"
                            value={item.value}
                            color={item.color}
                            sx={{
                              height: 10,
                              borderRadius: 10,
                            }}
                          />
                        </Box>
                      ))}

                    </CardContent>
                  </Card>

                  {/* ================= Alerts ================= */}

                  <Card
                    sx={{
                      mt: 3,
                      bgcolor: "rgba(255,255,255,.05)",
                      borderRadius: "22px",
                    }}
                  >
                    <CardContent>

                      <Typography
                        color="#fff"
                        fontWeight={700}
                        mb={3}
                      >
                        Recent Alerts
                      </Typography>

                      <Stack spacing={2}>

                        <Box
                          display="flex"
                          justifyContent="space-between"
                        >
                          <Typography color="#fff">
                            💧 Leak Detected
                          </Typography>

                          <Chip
                            label="High"
                            size="small"
                            color="error"
                          />
                        </Box>

                        <Box
                          display="flex"
                          justifyContent="space-between"
                        >
                          <Typography color="#fff">
                            📄 Bills Generated
                          </Typography>

                          <Chip
                            label="Completed"
                            size="small"
                            color="success"
                          />
                        </Box>

                        <Box
                          display="flex"
                          justifyContent="space-between"
                        >
                          <Typography color="#fff">
                            🏢 New Apartment
                          </Typography>

                          <Chip
                            label="+12"
                            size="small"
                            color="primary"
                          />
                        </Box>

                      </Stack>

                    </CardContent>
                  </Card>

                </CardContent>
              </Card>
            </Box>

          </Box>

          {/* ================= Statistics ================= */}

          <Grid container spacing={3} mt={8}>

            {[
              {
                value: "25K+",
                title: "Monthly Readings",
                icon: <WaterDropRounded />,
                color: "#38BDF8",
              },
              {
                value: "500+",
                title: "Connected Apartments",
                icon: <ApartmentRounded />,
                color: "#2563EB",
              },
              {
                value: "99.9%",
                title: "Platform Uptime",
                icon: <VerifiedRounded />,
                color: "#22C55E",
              },
              {
                value: "24/7",
                title: "AI Monitoring",
                icon: <AccessTimeFilledRounded />,
                color: "#8B5CF6",
              },
            ].map((item, index) => (
              <Grid
                key={index}
                size={{ xs: 12, sm: 6, md: 3 }}
              >
                <Card
                  sx={{
                    bgcolor: "rgba(255,255,255,.08)",
                    backdropFilter: "blur(18px)",
                    borderRadius: "22px",
                    color: "#fff",
                    transition: ".35s",

                    "&:hover": {
                      transform: "translateY(-10px)",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      textAlign: "center",
                      py: 5,
                    }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: item.color,
                        width: 70,
                        height: 70,
                        mx: "auto",
                        mb: 3,
                      }}
                    >
                      {item.icon}
                    </Avatar>

                    <Typography
                      fontSize={38}
                      fontWeight={900}
                    >
                      {item.value}
                    </Typography>

                    <Typography
                      color="#CBD5E1"
                    >
                      {item.title}
                    </Typography>

                  </CardContent>
                </Card>
              </Grid>
            ))}

          </Grid>

        </Container>

        {/* ================= Floating Bubbles ================= */}

        {[...Array(8)].map((_, index) => (
          <Box
            key={index}
            sx={{
              position: "absolute",
              width: 12 + index * 3,
              height: 12 + index * 3,
              borderRadius: "50%",
              bgcolor: "rgba(59,130,246,.30)",
              left: `${8 + index * 11}%`,
              top: `${12 + (index % 4) * 18}%`,
            }}
          />
        ))}

        {/* ================= Scroll Indicator ================= */}

        <Box
          sx={{
            position: "absolute",
            bottom: 35,
            left: "50%",
            transform: "translateX(-50%)",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: 13,
              letterSpacing: 3,
              mb: 1,
            }}
          >
            SCROLL
          </Typography>

          <Box
            sx={{
              width: 28,
              height: 48,
              border: "2px solid rgba(255,255,255,.7)",
              borderRadius: "40px",
              mx: "auto",
            }}
          />
        </Box>

        {/* ================= Bottom Wave ================= */}

        <Box
          sx={{
            position: "absolute",
            bottom: -2,
            left: 0,
            width: "100%",
            lineHeight: 0,
          }}
        >
          <svg
            viewBox="0 0 1440 180"
            preserveAspectRatio="none"
            style={{
              width: "100%",
              height: "150px",
              display: "block",
            }}
          >
            <path
              fill="#F8FAFC"
              d="M0,96L80,101C160,107,320,117,480,112C640,107,800,85,960,80C1120,75,1280,85,1360,90L1440,96L1440,181L0,181Z"
            />
          </svg>
        </Box>

      </Box>
    </motion.div>
  );
}