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
  Chip,
  Stack,
  Avatar,
} from "@mui/material";

import {
  PersonRounded,
  NotificationsRounded,
  SecurityRounded,
  WaterDropRounded,
} from "@mui/icons-material";

import ResidentSidebar from "../components/ResidentSidebar";
import ResidentTopbar from "../components/ResidentTopbar";

export default function ResidentSettings() {

  const summaryCards = [
    {
      title: "Profile",
      value: "95%",
      subtitle: "Completed",
      icon: <PersonRounded />,
      color: "#1976D2",
      bg: "#EAF4FF",
    },
    {
      title: "Notifications",
      value: "ON",
      subtitle: "Enabled",
      icon: <NotificationsRounded />,
      color: "#43A047",
      bg: "#ECFDF5",
    },
    {
      title: "Security",
      value: "Safe",
      subtitle: "Protected",
      icon: <SecurityRounded />,
      color: "#FB8C00",
      bg: "#FFF7E6",
    },
    {
      title: "Water Alerts",
      value: "ON",
      subtitle: "Monitoring",
      icon: <WaterDropRounded />,
      color: "#00ACC1",
      bg: "#E6FAFD",
    },
  ];

  return (

    <Box
      sx={{
        display: "flex",
        bgcolor: "#EEF5FD",
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

          {/* ================= HERO ================= */}

          <Paper
            elevation={0}
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "34px",
              p: {
                xs: 4,
                md: 6,
              },
              mb: 4,
              background:
                "linear-gradient(135deg,#1565C0,#1976D2,#42A5F5)",
              color: "#fff",
              boxShadow:
                "0 20px 45px rgba(25,118,210,.22)",
            }}
          >

            <Box
              sx={{
                position: "absolute",
                width: 230,
                height: 230,
                borderRadius: "50%",
                bgcolor: "rgba(255,255,255,.10)",
                top: -70,
                right: -70,
              }}
            />

            <Box
              sx={{
                position: "absolute",
                width: 170,
                height: 170,
                borderRadius: "50%",
                bgcolor: "rgba(255,255,255,.08)",
                left: -50,
                bottom: -60,
              }}
            />

            <Chip
              label="⚙️ Resident Preferences"
              sx={{
                bgcolor: "rgba(255,255,255,.18)",
                color: "#fff",
                fontWeight: 700,
                mb: 3,
              }}
            />

            <Typography
              sx={{
                fontSize: {
                  xs: 38,
                  md: 56,
                },
                fontWeight: 900,
              }}
            >
              Settings
            </Typography>

            <Typography
              sx={{
                mt: 2,
                maxWidth: 720,
                lineHeight: 1.8,
                color: "rgba(255,255,255,.92)",
              }}
            >
              Personalize your AquaTrack experience,
              manage notifications, enhance security,
              configure water alerts and keep your
              account protected.
            </Typography>

            <Stack
              direction="row"
              spacing={2}
              mt={4}
              flexWrap="wrap"
              useFlexGap
            >
              <Chip
                label="🔒 Secure Account"
                sx={{
                  bgcolor: "rgba(255,255,255,.18)",
                  color: "#fff",
                }}
              />

              <Chip
                label="🔔 Alerts Enabled"
                sx={{
                  bgcolor: "rgba(255,255,255,.18)",
                  color: "#fff",
                }}
              />

              <Chip
                label="💧 Water Monitoring"
                sx={{
                  bgcolor: "rgba(255,255,255,.18)",
                  color: "#fff",
                }}
              />

              <Chip
                label="⭐ Premium Settings"
                sx={{
                  bgcolor: "rgba(255,255,255,.18)",
                  color: "#fff",
                }}
              />
            </Stack>

          </Paper>

          {/* ================= SUMMARY CARDS ================= */}

          <Grid
            container
            spacing={3}
            sx={{
              mb: 5,
            }}
          >

            {summaryCards.map((card) => (

              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={card.title}
              >

                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: "24px",
                    border: "1px solid #E8EEF5",
                    boxShadow:
                      "0 15px 35px rgba(15,23,42,.06)",
                    transition: ".3s",
                    "&:hover": {
                      transform: "translateY(-8px)",
                    },
                  }}
                >

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >

                    <Box>

                      <Typography color="text.secondary">
                        {card.title}
                      </Typography>

                      <Typography
                        sx={{
                          mt: 1,
                          fontSize: 36,
                          fontWeight: 900,
                          color: card.color,
                        }}
                      >
                        {card.value}
                      </Typography>

                      <Typography color="text.secondary">
                        {card.subtitle}
                      </Typography>

                    </Box>

                    <Avatar
                      sx={{
                        bgcolor: card.bg,
                        color: card.color,
                        width: 70,
                        height: 70,
                      }}
                    >
                      {card.icon}
                    </Avatar>

                  </Stack>

                </Paper>

              </Grid>

            ))}

          </Grid>

          {/* ================= PART 2 STARTS HERE ================= */}
          {/* ================= ACCOUNT PREFERENCES ================= */}

<Grid
  container
  spacing={3}
  sx={{
    mb: 5,
  }}
>

  {/* LEFT */}

  <Grid
    item
    xs={12}
    lg={6}
  >

    <Paper
      elevation={0}
      sx={{
        p: 4,
        borderRadius: "24px",
        border: "1px solid #E8EEF5",
        boxShadow: "0 12px 35px rgba(15,23,42,.08)",
        height: "100%",
      }}
    >

      <Typography
        sx={{
          fontSize: 26,
          fontWeight: 800,
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
        label="Billing Alerts"
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

  {/* RIGHT */}

  <Grid
    item
    xs={12}
    lg={6}
  >

    <Paper
      elevation={0}
      sx={{
        p: 4,
        borderRadius: "24px",
        border: "1px solid #E8EEF5",
        boxShadow: "0 12px 35px rgba(15,23,42,.08)",
        height: "100%",
      }}
    >

      <Typography
        sx={{
          fontSize: 26,
          fontWeight: 800,
          mb: 4,
        }}
      >
        💧 Water Usage Alerts
      </Typography>

      <Typography color="text.secondary">
        Daily Usage Threshold
      </Typography>

      <Typography
        sx={{
          mt: 1,
          fontSize: 38,
          fontWeight: 900,
          color: "#1976D2",
        }}
      >
        500 Litres
      </Typography>

      <Typography
        sx={{
          mt: 4,
          fontWeight: 700,
        }}
      >
        Today's Usage
      </Typography>

      <Box
        sx={{
          mt: 2,
          height: 12,
          bgcolor: "#E8EEF5",
          borderRadius: 20,
          overflow: "hidden",
        }}
      >

        <Box
          sx={{
            width: "64%",
            height: "100%",
            bgcolor: "#1976D2",
          }}
        />

      </Box>

      <Stack
        direction="row"
        justifyContent="space-between"
        mt={2}
      >

        <Typography color="text.secondary">
          320 Litres Used
        </Typography>

        <Chip
          label="Safe"
          color="success"
        />

      </Stack>

      <Typography
        sx={{
          mt: 4,
          color: "#64748B",
          lineHeight: 1.8,
        }}
      >
        AquaTrack automatically notifies you whenever
        your household exceeds the configured daily
        water usage threshold.
      </Typography>

      <Button
        variant="contained"
        sx={{
          mt: 4,
          borderRadius: "14px",
          textTransform: "none",
          fontWeight: 700,
          px: 4,
        }}
      >
        Update Threshold
      </Button>

    </Paper>

  </Grid>

</Grid>

{/* ================= PART 3 STARTS HERE ================= */}
{/* ================= SECURITY & ACCOUNT ================= */}

<Grid
  container
  spacing={3}
  sx={{
    mb: 5,
  }}
>
  {/* ================= SECURITY ================= */}

  <Grid
    item
    xs={12}
    lg={7}
  >
    <Paper
      elevation={0}
      sx={{
        p: 4,
        borderRadius: "24px",
        border: "1px solid #E8EEF5",
        boxShadow: "0 12px 35px rgba(15,23,42,.08)",
      }}
    >
      <Typography
        sx={{
          fontSize: 26,
          fontWeight: 800,
          mb: 4,
        }}
      >
        🔒 Security Center
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: "18px",
              bgcolor: "#F8FBFF",
              textAlign: "center",
            }}
          >
            <Typography fontSize={40}>
              🔑
            </Typography>

            <Typography
              sx={{
                mt: 2,
                fontWeight: 800,
              }}
            >
              Change Password
            </Typography>

            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                borderRadius: "12px",
                textTransform: "none",
              }}
            >
              Update
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: "18px",
              bgcolor: "#F8FBFF",
              textAlign: "center",
            }}
          >
            <Typography fontSize={40}>
              📱
            </Typography>

            <Typography
              sx={{
                mt: 2,
                fontWeight: 800,
              }}
            >
              Active Devices
            </Typography>

            <Typography
              sx={{
                mt: 1,
                color: "#64748B",
              }}
            >
              2 Devices Connected
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: "18px",
              bgcolor: "#F8FBFF",
              textAlign: "center",
            }}
          >
            <Typography fontSize={40}>
              🕒
            </Typography>

            <Typography
              sx={{
                mt: 2,
                fontWeight: 800,
              }}
            >
              Login History
            </Typography>

            <Typography
              sx={{
                mt: 1,
                color: "#64748B",
              }}
            >
              Last Login Today
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: "18px",
              bgcolor: "#F8FBFF",
              textAlign: "center",
            }}
          >
            <Typography fontSize={40}>
              🛡️
            </Typography>

            <Typography
              sx={{
                mt: 2,
                fontWeight: 800,
              }}
            >
              Two-Factor Auth
            </Typography>

            <Chip
              label="Disabled"
              color="warning"
              sx={{
                mt: 2,
              }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  </Grid>

  {/* ================= ACCOUNT STATUS ================= */}

  <Grid
    item
    xs={12}
    lg={5}
  >
    <Paper
      elevation={0}
      sx={{
        p: 4,
        borderRadius: "24px",
        border: "1px solid #E8EEF5",
        boxShadow: "0 12px 35px rgba(15,23,42,.08)",
        height: "100%",
      }}
    >
      <Typography
        sx={{
          fontSize: 26,
          fontWeight: 800,
          mb: 4,
        }}
      >
        👤 Account Status
      </Typography>

      <Stack spacing={3}>

        <Paper
          elevation={0}
          sx={{
            p: 3,
            bgcolor: "#EEF6FF",
            borderRadius: "18px",
          }}
        >
          <Typography fontWeight={800}>
            Profile Completion
          </Typography>

          <Typography
            sx={{
              mt: 1,
              color: "#1976D2",
              fontSize: 32,
              fontWeight: 900,
            }}
          >
            95%
          </Typography>
        </Paper>

        <Paper
          elevation={0}
          sx={{
            p: 3,
            bgcolor: "#ECFDF5",
            borderRadius: "18px",
          }}
        >
          <Typography fontWeight={800}>
            Account Status
          </Typography>

          <Chip
            label="Verified"
            color="success"
            sx={{
              mt: 2,
            }}
          />
        </Paper>

        <Paper
          elevation={0}
          sx={{
            p: 3,
            bgcolor: "#FFF7E6",
            borderRadius: "18px",
          }}
        >
          <Typography fontWeight={800}>
            Member Since
          </Typography>

          <Typography
            sx={{
              mt: 1,
              color: "#64748B",
            }}
          >
            January 2026
          </Typography>
        </Paper>

      </Stack>
    </Paper>
  </Grid>
</Grid>

{/* ================= PART 4 STARTS HERE ================= */}
{/* ================= QUICK ACTIONS ================= */}

<Paper
  elevation={0}
  sx={{
    p: 4,
    borderRadius: "24px",
    border: "1px solid #E8EEF5",
    boxShadow: "0 12px 35px rgba(15,23,42,.08)",
    mb: 5,
  }}
>
  <Typography
    sx={{
      fontSize: 26,
      fontWeight: 800,
      mb: 4,
    }}
  >
    ⚡ Quick Actions
  </Typography>

  <Grid container spacing={3}>
    <Grid item xs={12} md={4}>
      <Paper
        elevation={0}
        sx={{
          p: 3,
          borderRadius: "20px",
          bgcolor: "#EEF6FF",
          textAlign: "center",
          height: "100%",
        }}
      >
        <Typography fontSize={42}>
          👤
        </Typography>

        <Typography
          sx={{
            mt: 2,
            fontWeight: 800,
            fontSize: 20,
          }}
        >
          Edit Profile
        </Typography>

        <Typography
          sx={{
            mt: 1,
            color: "#64748B",
          }}
        >
          Update your personal information.
        </Typography>

        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            borderRadius: "12px",
            textTransform: "none",
          }}
        >
          Edit Profile
        </Button>
      </Paper>
    </Grid>

    <Grid item xs={12} md={4}>
      <Paper
        elevation={0}
        sx={{
          p: 3,
          borderRadius: "20px",
          bgcolor: "#ECFDF5",
          textAlign: "center",
          height: "100%",
        }}
      >
        <Typography fontSize={42}>
          🎧
        </Typography>

        <Typography
          sx={{
            mt: 2,
            fontWeight: 800,
            fontSize: 20,
          }}
        >
          Contact Support
        </Typography>

        <Typography
          sx={{
            mt: 1,
            color: "#64748B",
          }}
        >
          Need help? Reach our support team.
        </Typography>

        <Button
          fullWidth
          variant="contained"
          color="success"
          sx={{
            mt: 3,
            borderRadius: "12px",
            textTransform: "none",
          }}
        >
          Contact
        </Button>
      </Paper>
    </Grid>

    <Grid item xs={12} md={4}>
      <Paper
        elevation={0}
        sx={{
          p: 3,
          borderRadius: "20px",
          bgcolor: "#FFF7E6",
          textAlign: "center",
          height: "100%",
        }}
      >
        <Typography fontSize={42}>
          🌱
        </Typography>

        <Typography
          sx={{
            mt: 2,
            fontWeight: 800,
            fontSize: 20,
          }}
        >
          Eco Rewards
        </Typography>

        <Typography
          sx={{
            mt: 1,
            color: "#64748B",
          }}
        >
          Redeem your earned reward points.
        </Typography>

        <Button
          fullWidth
          variant="contained"
          color="warning"
          sx={{
            mt: 3,
            borderRadius: "12px",
            textTransform: "none",
          }}
        >
          View Rewards
        </Button>
      </Paper>
    </Grid>
  </Grid>
</Paper>

{/* ================= LOGOUT SECTION ================= */}

<Paper
  elevation={0}
  sx={{
    p: 5,
    borderRadius: "30px",
    background:
      "linear-gradient(135deg,#1565C0,#1976D2,#42A5F5)",
    color: "#fff",
    textAlign: "center",
    mb: 4,
  }}
>
  <Typography
    sx={{
      fontSize: 34,
      fontWeight: 900,
    }}
  >
    🚪 Ready to Leave?
  </Typography>

  <Typography
    sx={{
      mt: 2,
      maxWidth: 650,
      mx: "auto",
      lineHeight: 1.8,
      opacity: 0.95,
    }}
  >
    Thank you for using AquaTrack.
    Your account, water usage history, bills,
    and reward points are securely saved.
  </Typography>

  <Stack
    direction={{
      xs: "column",
      sm: "row",
    }}
    spacing={2}
    justifyContent="center"
    sx={{
      mt: 4,
    }}
  >
    <Button
      variant="contained"
      sx={{
        bgcolor: "#fff",
        color: "#1976D2",
        px: 5,
        py: 1.5,
        borderRadius: "14px",
        textTransform: "none",
        fontWeight: 700,
        "&:hover": {
          bgcolor: "#F5F9FF",
        },
      }}
    >
      Go to Dashboard
    </Button>

    <Button
      variant="outlined"
      onClick={() => {
        localStorage.clear();
        window.location.href = "/login";
      }}
      sx={{
        color: "#fff",
        borderColor: "#fff",
        px: 5,
        py: 1.5,
        borderRadius: "14px",
        textTransform: "none",
        fontWeight: 700,
        "&:hover": {
          borderColor: "#fff",
          bgcolor: "rgba(255,255,255,.12)",
        },
      }}
    >
      Logout
    </Button>
  </Stack>
</Paper>

      </Box>

    </Box>

  </Box>

);
}