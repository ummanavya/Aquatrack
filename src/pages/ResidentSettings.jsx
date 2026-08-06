import React, { useState, useEffect } from "react";

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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

import {
  PersonRounded,
  NotificationsRounded,
  SecurityRounded,
  WaterDropRounded,
} from "@mui/icons-material";

import ResidentSidebar from "../components/ResidentSidebar";
import ResidentTopbar from "../components/ResidentTopbar";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function ResidentSettings() {
  const navigate = useNavigate();
  const [openThresholdDialog, setOpenThresholdDialog] = useState(false);

const [newThreshold, setNewThreshold] = useState(500);
const [openPasswordDialog, setOpenPasswordDialog] = useState(false);
const [openProfileDialog, setOpenProfileDialog] = useState(false);
const [openSupportDialog, setOpenSupportDialog] = useState(false);

const [supportData, setSupportData] = useState({
  subject: "",
  message: "",
});

const [profileData, setProfileData] = useState({
  username: "",
  email: "",
  phoneNumber: "",
});
const [passwordData, setPasswordData] = useState({
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
});

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
const [settings, setSettings] = useState({
    theme: "Light",
    language: "English",
    emailNotifications: true,
    billingAlerts: true,
    waterUsageAlerts: true,
    leakAlerts: true,
    dailyThreshold: 500,
    twoFactorEnabled: false,
});
useEffect(() => {

    loadSettings();

}, []);

const loadSettings = async () => {

    try {

        const username = localStorage.getItem("username");
        console.log("Username =", username);

        const response = await api.get(
            `/api/resident-settings/${username}`
        );

        setSettings(response.data);

    } catch (err) {

        console.error(err);

    }

};
const saveSettings = async () => {

    try {

        const username = localStorage.getItem("username");
        console.log("Username =", username);

        await api.put(
            `/api/resident-settings/${username}`,
            settings
        );

        alert("✅ Settings Saved Successfully!");

    } catch (err) {

        console.error(err);

        alert("Unable to save settings.");

    }

};
const openThreshold = () => {
  setNewThreshold(settings.dailyThreshold);
  setOpenThresholdDialog(true);
};

const closeThreshold = () => {
  setOpenThresholdDialog(false);
};

const saveThreshold = async () => {
  try {
    const username = localStorage.getItem("username");

    const updatedSettings = {
      ...settings,
      dailyThreshold: Number(newThreshold),
    };

    await api.put(
      `/api/resident-settings/${username}`,
      updatedSettings
    );

    setSettings(updatedSettings);

    setOpenThresholdDialog(false);

    alert("Threshold Updated Successfully!");

  } catch (err) {
    console.error(err);
    alert("Unable to update threshold.");
  }
};
const openPassword = () => {
  setOpenPasswordDialog(true);
};

const closePassword = () => {
  setOpenPasswordDialog(false);

  setPasswordData({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
};

const updatePassword = async () => {

  if (passwordData.newPassword !== passwordData.confirmPassword) {
    alert("New password and Confirm password do not match.");
    return;
  }

  try {

    const username = localStorage.getItem("username");

    await api.put(
      `/api/resident-settings/${username}/change-password`,
      {
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword,
      }
    );

    alert("Password updated successfully!");

    closePassword();

  } catch (err) {

    console.error(err);

    alert("Unable to update password.");

  }

};
const openProfile = async () => {

  try {

    const response = await api.get("/api/profile");

    setProfileData(response.data);

    setOpenProfileDialog(true);

  } catch (err) {

    console.error(err);

    alert("Unable to load profile.");

  }

};

const closeProfile = () => {

  setOpenProfileDialog(false);

};

const saveProfile = async () => {

  try {

    await api.put(
  "/api/profile",
  profileData
);

    alert("Profile Updated Successfully!");

    setOpenProfileDialog(false);

  } catch (err) {

    console.error(err);

    alert("Unable to update profile.");

  }

};
const openSupport = () => {
  setOpenSupportDialog(true);
};

const closeSupport = () => {
  setOpenSupportDialog(false);

  setSupportData({
    subject: "",
    message: "",
  });
};

const sendSupportRequest = async () => {
  try {

    const username = localStorage.getItem("username");

    await api.post("/api/support", {
      username,
      subject: supportData.subject,
      message: supportData.message,
    });

    alert("Support request sent successfully!");

    closeSupport();

  } catch (err) {

    console.error(err);

    alert("Unable to send support request.");

  }
};

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

    {/* Email Notifications */}
    <FormControlLabel
      control={
        <Switch
          checked={settings.emailNotifications}
          onChange={(e) =>
            setSettings({
              ...settings,
              emailNotifications: e.target.checked,
            })
          }
        />
      }
      label="Email Notifications"
    />

    <Divider sx={{ my: 2 }} />

    {/* Billing Alerts */}
    <FormControlLabel
      control={
        <Switch
          checked={settings.billingAlerts}
          onChange={(e) =>
            setSettings({
              ...settings,
              billingAlerts: e.target.checked,
            })
          }
        />
      }
      label="Billing Alerts"
    />

    <Divider sx={{ my: 2 }} />

    {/* Leak Alerts */}
    <FormControlLabel
      control={
        <Switch
          checked={settings.leakAlerts}
          onChange={(e) =>
            setSettings({
              ...settings,
              leakAlerts: e.target.checked,
            })
          }
        />
      }
      label="Leak Alerts"
    />

    <Divider sx={{ my: 2 }} />

    {/* Dark Mode */}
    <FormControlLabel
      control={
        <Switch
          checked={settings.theme === "Dark"}
          onChange={(e) =>
            setSettings({
              ...settings,
              theme: e.target.checked ? "Dark" : "Light",
            })
          }
        />
      }
      label="Dark Mode"
    />

    <Divider sx={{ my: 2 }} />

    {/* Two Factor Authentication */}
    <FormControlLabel
      control={
        <Switch
          checked={settings.twoFactorEnabled}
          onChange={(e) =>
            setSettings({
              ...settings,
              twoFactorEnabled: e.target.checked,
            })
          }
        />
      }
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
        {settings.dailyThreshold} Litres
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
  onClick={openThreshold}
  sx={{
    mt: 4,
    px: 5,
    py: 1.5,
    borderRadius: "14px",
    textTransform: "none",
    fontWeight: 800,
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
              onClick={openPassword}
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
          onClick={openProfile}
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
          onClick={openSupport}
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
  onClick={() => navigate("/eco-rewards")}
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
  onClick={() => navigate("/resident-dashboard")}
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
  variant="contained"
  onClick={() => navigate("/resident-dashboard")}
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
  </Stack>
</Paper>

      </Box>

    </Box>
    <Dialog
  open={openThresholdDialog}
  onClose={closeThreshold}
  maxWidth="xs"
  fullWidth
>
  <DialogTitle
    sx={{
      fontWeight: 800,
      color: "#1976D2",
    }}
  >
    Update Daily Threshold
  </DialogTitle>

  <DialogContent>
  <TextField
  fullWidth
  type="number"
  label="Daily Threshold (Litres)"
  value={newThreshold}
  onChange={(e) => setNewThreshold(e.target.value)}
  variant="outlined"
  InputProps={{
    sx: {
      color: "#000000",
      fontSize: "18px",
      fontWeight: 600,
    },
  }}
  inputProps={{
    style: {
      color: "#000000",
    },
  }}
  sx={{
    mt: 2,

    "& input": {
      color: "#000000 !important",
      WebkitTextFillColor: "#000000 !important",
    },

    "& .MuiInputBase-input": {
      color: "#000000 !important",
      WebkitTextFillColor: "#000000 !important",
    },

    "& .MuiInputLabel-root": {
      color: "#666666",
    },

    "& .MuiInputLabel-root.Mui-focused": {
      color: "#1976D2",
    },
  }}
/>
</DialogContent>

  <DialogActions>
    <Button onClick={closeThreshold}>
      Cancel
    </Button>

    <Button
      variant="contained"
      onClick={saveThreshold}
    >
      Save
    </Button>
  </DialogActions>
</Dialog>
<Dialog
  open={openPasswordDialog}
  onClose={closePassword}
  maxWidth="sm"
  fullWidth
>
  <DialogTitle
    sx={{
      fontWeight: 800,
      color: "#1976D2",
    }}
  >
    Change Password
  </DialogTitle>

  <DialogContent>

    <TextField
      fullWidth
      margin="normal"
      label="Current Password"
      type="password"
      value={passwordData.currentPassword}
      onChange={(e) =>
        setPasswordData({
          ...passwordData,
          currentPassword: e.target.value,
        })
      }
      InputLabelProps={{
        sx: {
          color: "#666",
          "&.Mui-focused": {
            color: "#1976D2",
          },
        },
      }}
      InputProps={{
        sx: {
          color: "#000",
          "& input": {
            color: "#000 !important",
            WebkitTextFillColor: "#000 !important",
          },
        },
      }}
    />

    <TextField
      fullWidth
      margin="normal"
      label="New Password"
      type="password"
      value={passwordData.newPassword}
      onChange={(e) =>
        setPasswordData({
          ...passwordData,
          newPassword: e.target.value,
        })
      }
      InputLabelProps={{
        sx: {
          color: "#666",
          "&.Mui-focused": {
            color: "#1976D2",
          },
        },
      }}
      InputProps={{
        sx: {
          color: "#000",
          "& input": {
            color: "#000 !important",
            WebkitTextFillColor: "#000 !important",
          },
        },
      }}
    />

    <TextField
      fullWidth
      margin="normal"
      label="Confirm Password"
      type="password"
      value={passwordData.confirmPassword}
      onChange={(e) =>
        setPasswordData({
          ...passwordData,
          confirmPassword: e.target.value,
        })
      }
      InputLabelProps={{
        sx: {
          color: "#666",
          "&.Mui-focused": {
            color: "#1976D2",
          },
        },
      }}
      InputProps={{
        sx: {
          color: "#000",
          "& input": {
            color: "#000 !important",
            WebkitTextFillColor: "#000 !important",
          },
        },
      }}
    />

  </DialogContent>

  <DialogActions>

    <Button onClick={closePassword}>
      Cancel
    </Button>

    <Button
      variant="contained"
      onClick={updatePassword}
    >
      Update
    </Button>

  </DialogActions>


</Dialog>
<Dialog
  open={openProfileDialog}
  onClose={closeProfile}
  maxWidth="sm"
  fullWidth
>
  <DialogTitle
    sx={{
      fontWeight: 800,
      color: "#1976D2",
    }}
  >
    Edit Profile
  </DialogTitle>

  <DialogContent>

    <TextField
  fullWidth
  margin="normal"
  label="Username"
  value={profileData.username}
  onChange={(e) =>
    setProfileData({
      ...profileData,
      username: e.target.value,
    })
  }
  InputLabelProps={{
    sx: {
      color: "#666",
      "&.Mui-focused": {
        color: "#1976D2",
      },
    },
  }}
  sx={{
    "& .MuiInputBase-input": {
      color: "#000 !important",
      WebkitTextFillColor: "#000 !important",
    },
  }}
/>

    <TextField
      fullWidth
      margin="normal"
      label="Email"
      value={profileData.email}
      onChange={(e) =>
        setProfileData({
          ...profileData,
          email: e.target.value,
        })
      }
    />

    <TextField
      fullWidth
      margin="normal"
      label="Phone Number"
      value={profileData.phoneNumber}
      onChange={(e) =>
        setProfileData({
          ...profileData,
          phoneNumber: e.target.value,
        })
      }
    />

  </DialogContent>

  <DialogActions>

    <Button onClick={closeProfile}>
      Cancel
    </Button>

    <Button
      variant="contained"
      onClick={saveProfile}
    >
      Save
    </Button>

  </DialogActions>

</Dialog>
<Dialog
  open={openSupportDialog}
  onClose={closeSupport}
  maxWidth="sm"
  fullWidth
>
  <DialogTitle
    sx={{
      fontWeight: 800,
      color: "#1976D2",
    }}
  >
    Contact Support
  </DialogTitle>

  <DialogContent>

    <TextField
      fullWidth
      margin="normal"
      label="Subject"
      value={supportData.subject}
      onChange={(e) =>
        setSupportData({
          ...supportData,
          subject: e.target.value,
        })
      }
      InputLabelProps={{
        sx: {
          color: "#666",
          "&.Mui-focused": {
            color: "#1976D2",
          },
        },
      }}
      InputProps={{
        sx: {
          color: "#000",
          "& input": {
            color: "#000 !important",
            WebkitTextFillColor: "#000 !important",
          },
        },
      }}
    />

    <TextField
      fullWidth
      multiline
      rows={5}
      margin="normal"
      label="Describe your issue"
      value={supportData.message}
      onChange={(e) =>
        setSupportData({
          ...supportData,
          message: e.target.value,
        })
      }
      InputLabelProps={{
        sx: {
          color: "#666",
          "&.Mui-focused": {
            color: "#1976D2",
          },
        },
      }}
      InputProps={{
        sx: {
          color: "#000",
          "& textarea": {
            color: "#000 !important",
            WebkitTextFillColor: "#000 !important",
          },
        },
      }}
    />

  </DialogContent>

  <DialogActions>

    <Button onClick={closeSupport}>
      Cancel
    </Button>

    <Button
      variant="contained"
      onClick={sendSupportRequest}
    >
      Send
    </Button>

  </DialogActions>
</Dialog>

  </Box>

);
}