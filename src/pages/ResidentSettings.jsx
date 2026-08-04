import React from "react";

import {
  Box,
  Grid,
  Typography,
  Paper,
  Divider,
  Switch,
  FormControlLabel,
  Button,
} from "@mui/material";

import ResidentSidebar from "../components/ResidentSidebar";
import ResidentTopbar from "../components/ResidentTopbar";

export default function ResidentSettings() {

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
            ⚙️ Settings
          </Typography>

          <Typography
            color="text.secondary"
            mb={4}
          >
            Manage your AquaTrack account preferences and security.
          </Typography>

          <Grid
            container
            spacing={3}
          >
                        {/* ================= Account Preferences ================= */}

            <Grid
              item
              xs={12}
              md={6}
            >

              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: "24px",
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 12px 35px rgba(15,23,42,.08)",
                  height: "100%",
                }}
              >

                <Typography
                  sx={{
                    fontSize: 24,
                    fontWeight: 700,
                    mb: 3,
                  }}
                >
                  👤 Account Preferences
                </Typography>

                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Email Notifications"
                />

                <Divider sx={{ my: 2 }} />

                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="SMS Notifications"
                />

                <Divider sx={{ my: 2 }} />

                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Leak Alerts"
                />

                <Divider sx={{ my: 2 }} />

                <FormControlLabel
                  control={<Switch />}
                  label="Dark Mode"
                />

                <Divider sx={{ my: 2 }} />

                <FormControlLabel
                  control={<Switch />}
                  label="Two-Factor Authentication"
                />

              </Paper>

            </Grid>

            {/* ================= Water Alert Settings ================= */}

            <Grid
              item
              xs={12}
              md={6}
            >

              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: "24px",
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 12px 35px rgba(15,23,42,.08)",
                  height: "100%",
                }}
              >

                <Typography
                  sx={{
                    fontSize: 24,
                    fontWeight: 700,
                    mb: 3,
                  }}
                >
                  💧 Water Usage Alerts
                </Typography>

                <Typography
                  color="text.secondary"
                >
                  Daily Usage Threshold
                </Typography>

                <Typography
                  sx={{
                    fontSize: 32,
                    fontWeight: 800,
                    color: "#1976D2",
                    my: 2,
                  }}
                >
                  500 Litres
                </Typography>

                <Typography
                  color="text.secondary"
                >
                  AquaTrack will notify you whenever
                  your household exceeds the configured
                  daily water usage.
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    mt: 4,
                    borderRadius: "12px",
                    textTransform: "none",
                    fontWeight: 700,
                  }}
                >
                  Update Threshold
                </Button>

              </Paper>

            </Grid>

            {/* ================= Security ================= */}

            <Grid
              item
              xs={12}
            >

              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: "24px",
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 12px 35px rgba(15,23,42,.08)",
                }}
              >

                <Typography
                  sx={{
                    fontSize: 24,
                    fontWeight: 700,
                    mb: 3,
                  }}
                >
                  🔒 Security
                </Typography>

                <Grid
                  container
                  spacing={3}
                >

                  <Grid
                    item
                    xs={12}
                    md={6}
                  >

                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        py: 1.5,
                        borderRadius: "14px",
                        textTransform: "none",
                        fontWeight: 700,
                      }}
                    >
                      Change Password
                    </Button>

                  </Grid>

                  <Grid
                    item
                    xs={12}
                    md={6}
                  >

                    <Button
                      fullWidth
                      variant="outlined"
                      color="error"
                      sx={{
                        py: 1.5,
                        borderRadius: "14px",
                        textTransform: "none",
                        fontWeight: 700,
                      }}
                    >
                      Delete Account
                    </Button>

                  </Grid>

                </Grid>

              </Paper>

            </Grid>

            {/* ================= Logout ================= */}

            <Grid
              item
              xs={12}
            >

              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: "24px",
                  background:
                    "linear-gradient(135deg,#1976D2,#42A5F5)",
                  color: "#fff",
                }}
              >

                <Typography
                  sx={{
                    fontSize: 24,
                    fontWeight: 800,
                    mb: 2,
                  }}
                >
                  Ready to Leave?
                </Typography>

                <Typography
                  sx={{
                    opacity: .95,
                    mb: 3,
                    lineHeight: 1.8,
                  }}
                >
                  You can safely sign out of AquaTrack.
                  Your account and water usage data will remain secure.
                </Typography>

                <Button
                  variant="contained"
                  color="inherit"
                  sx={{
                    color: "#1976D2",
                    fontWeight: 700,
                    borderRadius: "14px",
                    textTransform: "none",
                  }}
                  onClick={() => {
                    localStorage.clear();
                    window.location.href = "/login";
                  }}
                >
                  Logout
                </Button>

              </Paper>

            </Grid>

          </Grid>

        </Box>

      </Box>

    </Box>

  );

}
