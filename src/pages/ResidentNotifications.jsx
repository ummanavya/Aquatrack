import React from "react";

import {
  Box,
  Grid,
  Typography,
  Paper,
  Chip,
} from "@mui/material";

import ResidentSidebar from "../components/ResidentSidebar";
import ResidentTopbar from "../components/ResidentTopbar";
import NotificationsPanel from "../components/NotificationsPanel";

export default function ResidentNotifications() {

  return (

    <Box
      sx={{
        display: "flex",
        bgcolor: "#F7FAFC",
        minHeight: "100vh",
      }}
    >

      <ResidentSidebar />

      <Box
        sx={{
          flex: 1,
          ml: "280px",
        }}
      >

        <ResidentTopbar />

        <Box
          sx={{
            mt: "90px",
            p: 4,
          }}
        >

          <Typography
            sx={{
              fontSize: 34,
              fontWeight: 800,
            }}
          >
            🔔 Notification Center
          </Typography>

          <Typography
            color="text.secondary"
            mb={4}
          >
            Stay updated with alerts, announcements and billing notifications.
          </Typography>

          <Grid
            container
            spacing={3}
          >
                        {/* ================= Left Side ================= */}

            <Grid
              item
              xs={12}
              lg={8}
            >

              <NotificationsPanel />

            </Grid>

            {/* ================= Right Side ================= */}

            <Grid
              item
              xs={12}
              lg={4}
            >

              {/* Notification Summary */}

              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: "24px",
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 12px 30px rgba(15,23,42,.08)",
                  mb: 3,
                }}
              >

                <Typography
                  sx={{
                    fontSize: 22,
                    fontWeight: 700,
                    mb: 3,
                  }}
                >
                  📊 Notification Summary
                </Typography>

                <Box
                  display="flex"
                  justifyContent="space-between"
                  mb={2}
                >
                  <Typography>Total Notifications</Typography>

                  <Chip
                    label="24"
                    color="primary"
                  />
                </Box>

                <Box
                  display="flex"
                  justifyContent="space-between"
                  mb={2}
                >
                  <Typography>Unread</Typography>

                  <Chip
                    label="5"
                    color="error"
                  />
                </Box>

                <Box
                  display="flex"
                  justifyContent="space-between"
                >
                  <Typography>Read</Typography>

                  <Chip
                    label="19"
                    color="success"
                  />
                </Box>

              </Paper>

              {/* Pinned Alert */}

              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: "24px",
                  bgcolor: "#FFF8E1",
                  border: "1px solid #FFE082",
                  mb: 3,
                }}
              >

                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: 20,
                    mb: 2,
                  }}
                >
                  📌 Pinned Alert
                </Typography>

                <Typography
                  sx={{
                    color: "#5D4037",
                    lineHeight: 1.8,
                  }}
                >
                  Water supply maintenance is scheduled
                  on <b>15 August</b> from
                  <b> 10:00 AM to 1:00 PM</b>.
                  Please store sufficient water in advance.
                </Typography>

              </Paper>

              {/* Community Announcement */}

              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: "24px",
                  background:
                    "linear-gradient(135deg,#1976D2,#42A5F5)",
                  color: "#fff",
                }}
              >

                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: 22,
                    mb: 2,
                  }}
                >
                  📢 Community Announcement
                </Typography>

                <Typography
                  sx={{
                    lineHeight: 1.9,
                    opacity: .95,
                  }}
                >
                  🎉 Congratulations!

                  Aqua Residency has reduced
                  overall water consumption by
                  <strong> 18% </strong>
                  this month.

                  Keep participating in the
                  Eco Rewards Program to earn
                  additional points and badges.
                </Typography>

              </Paper>

            </Grid>

            {/* ================= Notification Analytics ================= */}

            <Grid
              item
              xs={12}
            >

              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: "28px",
                  border: "1px solid #E5E7EB",
                  boxShadow:
                    "0 12px 35px rgba(15,23,42,.08)",
                }}
              >

                <Typography
                  sx={{
                    fontSize: 24,
                    fontWeight: 800,
                    mb: 3,
                  }}
                >
                  📈 Notification Analytics
                </Typography>

                <Grid
                  container
                  spacing={3}
                >

                  <Grid
                    item
                    xs={12}
                    md={4}
                  >

                    <Box
                      sx={{
                        p: 3,
                        bgcolor: "#E3F2FD",
                        borderRadius: "18px",
                        textAlign: "center",
                      }}
                    >

                      <Typography
                        sx={{
                          fontSize: 32,
                          fontWeight: 800,
                          color: "#1976D2",
                        }}
                      >
                        12
                      </Typography>

                      <Typography>
                        Billing Alerts
                      </Typography>

                    </Box>

                  </Grid>

                  <Grid
                    item
                    xs={12}
                    md={4}
                  >

                    <Box
                      sx={{
                        p: 3,
                        bgcolor: "#E8F5E9",
                        borderRadius: "18px",
                        textAlign: "center",
                      }}
                    >

                      <Typography
                        sx={{
                          fontSize: 32,
                          fontWeight: 800,
                          color: "#16A34A",
                        }}
                      >
                        8
                      </Typography>

                      <Typography>
                        Usage Alerts
                      </Typography>

                    </Box>

                  </Grid>

                  <Grid
                    item
                    xs={12}
                    md={4}
                  >

                    <Box
                      sx={{
                        p: 3,
                        bgcolor: "#FFF8E1",
                        borderRadius: "18px",
                        textAlign: "center",
                      }}
                    >

                      <Typography
                        sx={{
                          fontSize: 32,
                          fontWeight: 800,
                          color: "#F59E0B",
                        }}
                      >
                        4
                      </Typography>

                      <Typography>
                        Community Notices
                      </Typography>

                    </Box>

                  </Grid>

                </Grid>

              </Paper>

            </Grid>

          </Grid>

        </Box>

      </Box>

    </Box>

  );

}

export default ResidentNotifications;