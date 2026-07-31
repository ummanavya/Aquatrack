import React from "react";

import {
  Box,
  Container,
  Typography,
  Chip,
  Card,
  CardContent,
  Avatar,
  LinearProgress,
} from "@mui/material";

import Grid from "@mui/material/Grid";

import WaterDropRoundedIcon from "@mui/icons-material/WaterDropRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";

import { motion } from "framer-motion";

export default function DashboardSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Box
        id="dashboard"
        sx={{
          position: "relative",
          py: {
            xs: 12,
            md: 18,
          },
          overflow: "hidden",
          background:
            "linear-gradient(180deg,#FFFFFF,#F5FAFF,#EDF6FF)",
        }}
      >
        {/* Background Glow */}

        <Box
          sx={{
            position: "absolute",
            top: -220,
            left: -180,
            width: 450,
            height: 450,
            borderRadius: "50%",
            background: "#42A5F520",
            filter: "blur(120px)",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            bottom: -180,
            right: -120,
            width: 380,
            height: 380,
            borderRadius: "50%",
            background: "#1976D220",
            filter: "blur(110px)",
          }}
        />

        <Container
          maxWidth="xl"
          sx={{
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Heading */}

          <Box
            textAlign="center"
            mb={10}
          >
            <Chip
              label="🚀 LIVE DASHBOARD"
              sx={{
                px: 2,
                py: 2.7,
                borderRadius: "40px",
                fontWeight: 700,
                color: "#fff",
                background:
                  "linear-gradient(90deg,#1976D2,#42A5F5)",
                boxShadow:
                  "0 15px 30px rgba(25,118,210,.30)",
                mb: 4,
              }}
            />

            <Typography
              sx={{
                fontWeight: 900,
                fontSize: {
                  xs: "2.8rem",
                  md: "4.4rem",
                },
                color: "#0F172A",
              }}
            >
              Powerful Dashboard
            </Typography>

            <Typography
              sx={{
                mt: 3,
                maxWidth: 760,
                mx: "auto",
                fontSize: 20,
                lineHeight: 1.9,
                color: "#64748B",
              }}
            >
              Monitor apartments, track live water usage,
              generate bills automatically, detect leaks
              instantly, and analyse complete reports from
              one centralized platform.
            </Typography>
          </Box>

          {/* Main Dashboard */}

          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                lg: "280px 1fr",
              },

              background: "rgba(255,255,255,.75)",
              backdropFilter: "blur(25px)",

              borderRadius: "35px",

              overflow: "hidden",

              boxShadow:
                "0 40px 80px rgba(15,23,42,.10)",

              border:
                "1px solid rgba(25,118,210,.08)",

              minHeight: 720,
            }}
          >
            {/* Sidebar */}

            <Box
              sx={{
                background:
                  "linear-gradient(180deg,#0F172A,#172554)",

                color: "#fff",

                p: 4,
              }}
            >
              <Typography
                sx={{
                  fontWeight: 900,
                  fontSize: 34,
                  mb: 6,
                }}
              >
                AquaTrack
              </Typography>

              {[
                "Dashboard",
                "Apartments",
                "Residents",
                "Water Usage",
                "Billing",
                "Analytics",
                "Leak Alerts",
                "Settings",
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    px: 2.5,
                    py: 1.8,
                    mb: 1.4,
                    borderRadius: "15px",
                    cursor: "pointer",
                    transition: ".3s",

                    background:
                      index === 0
                        ? "rgba(59,130,246,.30)"
                        : "transparent",

                    "&:hover": {
                      background:
                        "rgba(255,255,255,.08)",
                    },
                  }}
                >
                  <Typography fontWeight={600}>
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Right Content */}

            <Box
              sx={{
                p: 5,
                background: "#F8FBFF",
              }}
            >
              {/* KPI Cards */}

              <Grid
                container
                spacing={3}
              >
                {[
                  {
                    icon: <WaterDropRoundedIcon />,
                    value: "15,280 L",
                    title: "Water Usage",
                    progress: 82,
                    color: "#2196F3",
                  },
                  {
                    icon: <ReceiptLongRoundedIcon />,
                    value: "₹82,450",
                    title: "Monthly Bills",
                    progress: 76,
                    color: "#3B82F6",
                  },
                  {
                    icon: <TrendingUpRoundedIcon />,
                    value: "96%",
                    title: "Efficiency",
                    progress: 96,
                    color: "#2563EB",
                  },
                  {
                    icon: <NotificationsActiveRoundedIcon />,
                    value: "03",
                    title: "Leak Alerts",
                    progress: 32,
                    color: "#EF4444",
                  },
                ].map((item, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    xl={3}
                    key={index}
                  >
                    <Card
                      sx={{
                        borderRadius: "24px",
                        background: "#FFFFFF",
                        transition: ".35s",

                        "&:hover": {
                          transform:
                            "translateY(-8px)",
                          boxShadow:
                            "0 18px 45px rgba(25,118,210,.18)",
                        },
                      }}
                    >
                      <CardContent>
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="center"
                          mb={3}
                        >
                          <Avatar
                            sx={{
                              bgcolor: item.color,
                              width: 58,
                              height: 58,
                            }}
                          >
                            {item.icon}
                          </Avatar>

                          <Typography
                            fontWeight={900}
                            fontSize="2rem"
                          >
                            {item.value}
                          </Typography>
                        </Box>

                        <Typography
                          color="#64748B"
                          mb={2}
                        >
                          {item.title}
                        </Typography>

                        <LinearProgress
                          variant="determinate"
                          value={item.progress}
                          sx={{
                            height: 8,
                            borderRadius: 10,
                          }}
                        />
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
                            {/* ================= Charts & Alerts ================= */}

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    lg: "2fr 1fr",
                  },
                  gap: 4,
                  mt: 5,
                }}
              >
                {/* Monthly Water Consumption */}

                <Card
                  sx={{
                    borderRadius: "28px",
                    background: "#FFFFFF",
                  }}
                >
                  <CardContent>
                    <Typography
                      fontWeight={800}
                      fontSize={30}
                      mb={4}
                    >
                      Monthly Water Consumption
                    </Typography>

                    {[
                      ["January", 82],
                      ["February", 68],
                      ["March", 91],
                      ["April", 75],
                      ["May", 88],
                      ["June", 79],
                    ].map(([month, value]) => (
                      <Box
                        key={month}
                        mb={3}
                      >
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          mb={1}
                        >
                          <Typography fontWeight={600}>
                            {month}
                          </Typography>

                          <Typography
                            fontWeight={700}
                            color="#1976D2"
                          >
                            {value}%
                          </Typography>
                        </Box>

                        <LinearProgress
                          variant="determinate"
                          value={value}
                          sx={{
                            height: 10,
                            borderRadius: 10,
                          }}
                        />
                      </Box>
                    ))}
                  </CardContent>
                </Card>

                {/* Live Alerts */}

                <Card
                  sx={{
                    borderRadius: "28px",
                    background: "#FFFFFF",
                  }}
                >
                  <CardContent>
                    <Typography
                      fontWeight={800}
                      fontSize={28}
                      mb={4}
                    >
                      Live Alerts
                    </Typography>

                    {[
                      ["Leak Detected", "High", "#EF4444"],
                      ["Bills Generated", "Completed", "#22C55E"],
                      ["New Apartment", "+12", "#2563EB"],
                      ["Tank Level", "78%", "#0EA5E9"],
                    ].map((alert, index) => (
                      <Box
                        key={index}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{
                          pb: 2,
                          mb: 3,
                          borderBottom:
                            "1px solid #EEF2F7",
                        }}
                      >
                        <Box>
                          <Typography
                            fontWeight={700}
                          >
                            {alert[0]}
                          </Typography>

                          <Typography
                            fontSize={14}
                            color="#64748B"
                          >
                            System Notification
                          </Typography>
                        </Box>

                        <Chip
                          label={alert[1]}
                          sx={{
                            color: "#fff",
                            fontWeight: 700,
                            background: alert[2],
                          }}
                        />
                      </Box>
                    ))}
                  </CardContent>
                </Card>
              </Box>

              {/* ================= Revenue & Apartment Status ================= */}

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    lg: "1.4fr 1fr",
                  },
                  gap: 4,
                  mt: 5,
                }}
              >
                {/* Revenue */}

                <Card
                  sx={{
                    borderRadius: "28px",
                    background: "#FFFFFF",
                  }}
                >
                  <CardContent>
                    <Typography
                      fontWeight={800}
                      fontSize={30}
                      mb={4}
                    >
                      Revenue Overview
                    </Typography>

                    {[
                      ["January", "₹68,000", 75],
                      ["February", "₹72,500", 82],
                      ["March", "₹81,000", 90],
                      ["April", "₹79,500", 86],
                      ["May", "₹88,200", 95],
                    ].map((item, index) => (
                      <Box
                        key={index}
                        mb={3}
                      >
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          mb={1}
                        >
                          <Typography fontWeight={600}>
                            {item[0]}
                          </Typography>

                          <Typography
                            fontWeight={700}
                            color="#1976D2"
                          >
                            {item[1]}
                          </Typography>
                        </Box>

                        <LinearProgress
                          variant="determinate"
                          value={item[2]}
                          sx={{
                            height: 10,
                            borderRadius: 10,
                          }}
                        />
                      </Box>
                    ))}
                  </CardContent>
                </Card>

                {/* Apartment Status */}

                <Card
                  sx={{
                    borderRadius: "28px",
                    background: "#FFFFFF",
                  }}
                >
                  <CardContent>
                    <Typography
                      fontWeight={800}
                      fontSize={28}
                      mb={4}
                    >
                      Apartment Status
                    </Typography>

                    {[
                      ["Occupied", 520, "#22C55E"],
                      ["Vacant", 32, "#F59E0B"],
                      ["Maintenance", 8, "#EF4444"],
                    ].map((item, index) => (
                      <Box
                        key={index}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        mb={3}
                      >
                        <Box
                          display="flex"
                          alignItems="center"
                          gap={2}
                        >
                          <Box
                            sx={{
                              width: 14,
                              height: 14,
                              borderRadius: "50%",
                              bgcolor: item[2],
                            }}
                          />

                          <Typography>
                            {item[0]}
                          </Typography>
                        </Box>

                        <Typography
                          fontWeight={700}
                        >
                          {item[1]}
                        </Typography>
                      </Box>
                    ))}
                  </CardContent>
                </Card>
              </Box>
                            {/* ================= Water Tank Status ================= */}

              <Box sx={{ mt: 5 }}>
                <Card
                  sx={{
                    borderRadius: "28px",
                    background: "#FFFFFF",
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
                          fontWeight={800}
                          fontSize={28}
                        >
                          Water Tank Status
                        </Typography>

                        <Typography color="#64748B">
                          Updated 2 minutes ago
                        </Typography>
                      </Box>

                      <Chip
                        label="Healthy"
                        color="success"
                      />
                    </Box>

                    <Typography
                      fontWeight={700}
                      mb={1}
                    >
                      Main Storage Tank
                    </Typography>

                    <LinearProgress
                      variant="determinate"
                      value={78}
                      sx={{
                        height: 14,
                        borderRadius: 14,
                        mb: 4,
                      }}
                    />

                    <Grid
                      container
                      spacing={3}
                    >
                      <Grid item xs={12} sm={4}>
                        <Card
                          sx={{
                            boxShadow: "none",
                            bgcolor: "#F8FBFF",
                          }}
                        >
                          <CardContent>
                            <Typography fontWeight={700}>
                              Capacity
                            </Typography>

                            <Typography
                              fontSize={28}
                              fontWeight={900}
                              color="#1976D2"
                            >
                              50 KL
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>

                      <Grid item xs={12} sm={4}>
                        <Card
                          sx={{
                            boxShadow: "none",
                            bgcolor: "#F8FBFF",
                          }}
                        >
                          <CardContent>
                            <Typography fontWeight={700}>
                              Current Level
                            </Typography>

                            <Typography
                              fontSize={28}
                              fontWeight={900}
                              color="#22C55E"
                            >
                              39 KL
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>

                      <Grid item xs={12} sm={4}>
                        <Card
                          sx={{
                            boxShadow: "none",
                            bgcolor: "#F8FBFF",
                          }}
                        >
                          <CardContent>
                            <Typography fontWeight={700}>
                              Daily Usage
                            </Typography>

                            <Typography
                              fontSize={28}
                              fontWeight={900}
                              color="#2563EB"
                            >
                              12 KL
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Box>

              {/* ================= Bottom Statistics ================= */}

              <Grid
                container
                spacing={3}
                sx={{ mt: 4 }}
              >
                {[
                  {
                    value: "520+",
                    title: "Apartments",
                    icon: <ApartmentRoundedIcon />,
                  },
                  {
                    value: "8,500+",
                    title: "Residents",
                    icon: <AnalyticsRoundedIcon />,
                  },
                  {
                    value: "₹8.2L",
                    title: "Revenue",
                    icon: <ReceiptLongRoundedIcon />,
                  },
                  {
                    value: "99.8%",
                    title: "System Uptime",
                    icon: <TrendingUpRoundedIcon />,
                  },
                ].map((item, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={3}
                    key={index}
                  >
                    <Card
                      sx={{
                        borderRadius: "22px",
                        textAlign: "center",
                        transition: ".35s",

                        "&:hover": {
                          transform: "translateY(-8px)",
                          boxShadow:
                            "0 20px 40px rgba(25,118,210,.18)",
                        },
                      }}
                    >
                      <CardContent>
                        <Avatar
                          sx={{
                            mx: "auto",
                            mb: 2,
                            bgcolor: "#1976D2",
                          }}
                        >
                          {item.icon}
                        </Avatar>

                        <Typography
                          fontWeight={900}
                          fontSize={32}
                          color="#1976D2"
                        >
                          {item.value}
                        </Typography>

                        <Typography
                          color="#64748B"
                        >
                          {item.title}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

            </Box>

          </Box>

        </Container>

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
            viewBox="0 0 1440 170"
            preserveAspectRatio="none"
            style={{
              width: "100%",
              height: "140px",
              display: "block",
            }}
          >
            <path
              fill="#FFFFFF"
              d="M0,64L80,74.7C160,85,320,107,480,117.3C640,128,800,128,960,112C1120,96,1280,64,1360,48L1440,32L1440,181L0,181Z"
            />
          </svg>
        </Box>

      </Box>
    </motion.div>
  );
}