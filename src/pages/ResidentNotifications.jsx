import React, { useEffect, useState } from "react";

import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Stack,
  Avatar,
  Chip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Snackbar,
  Alert,
  Switch,
} from "@mui/material";
import {
  NotificationsRounded,
  NotificationsActiveRounded,
  WarningAmberRounded,
  ErrorOutlineRounded,
  DoneAllRounded,
} from "@mui/icons-material";

import { motion } from "framer-motion";

import ResidentSidebar from "../components/ResidentSidebar";
import ResidentTopbar from "../components/ResidentTopbar";
const summaryCards = [
  {
    title: "Total Alerts",
    value: "18",
    subtitle: "This Month",
    color: "#1976D2",
    bg: "#EAF4FF",
    icon: <NotificationsRounded />,
  },
  {
    title: "Unread",
    value: 3,
    subtitle: "Needs Attention",
    color: "#E53935",
    bg: "#FDECEC",
    icon: <NotificationsActiveRounded />,
  },
  {
    title: "High Priority",
    value: "2",
    subtitle: "Immediate Action",
    color: "#FB8C00",
    bg: "#FFF4E5",
    icon: <WarningAmberRounded />,
  },
  {
    title: "Resolved",
    value: "15",
    subtitle: "Completed",
    color: "#16A34A",
    bg: "#ECFDF5",
    icon: <DoneAllRounded />,
  },
];
const initialNotifications = [
  {
    id: 1,
    title: "Water Usage Alert",
    message: "Your water usage increased by 18% compared to last week.",
    type: "warning",
    time: "10 min ago",
    read: false,
  },
  {
    id: 2,
    title: "Bill Reminder",
    message: "Your monthly bill is due in 5 days.",
    type: "billing",
    time: "1 hour ago",
    read: false,
  },
  {
    id: 3,
    title: "Leak Detection",
    message: "Possible water leakage detected in your apartment.",
    type: "danger",
    time: "Yesterday",
    read: false,
  },
];

export default function ResidentNotifications() {

  const [notifications, setNotifications] = useState(initialNotifications);
  const alerts = notifications;

  const [openAlerts, setOpenAlerts] = useState(false);

  const [snackbar, setSnackbar] = useState(false);

  const [alertSettings, setAlertSettings] = useState({
    bill: true,
    leak: true,
    usage: true,
    payment: true,
    monthly: false,
  });

  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;
  const downloadReport = () => {

  const report = `
AquaTrack Notification Report

==============================

${notifications.map((n, index) => `
${index + 1}. ${n.title}

Status : ${n.read ? "Read" : "Unread"}

---------------------------------------
`).join("")}

Generated on:
${new Date().toLocaleString()}
`;

  const blob = new Blob([report], {
    type: "text/plain",
  });

  const url = window.URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = "Notification_Report.txt";

  link.click();

  window.URL.revokeObjectURL(url);

};
const markAllRead = () => {

  setNotifications(

    notifications.map((item) => ({
      ...item,
      read: true,
    }))

  );

  setSnackbar(true);

};
const [openSettings, setOpenSettings] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "#EEF5FD",
      }}
    >

      <ResidentSidebar />

      <Box
        sx={{
          flex: 1,
          ml: {
            lg: "260px",
          },
        }}
      >

        <ResidentTopbar />

        <Container
          maxWidth={false}
          disableGutters
          sx={{
            mt: "90px",

            px: {
              xs: 2,
              sm: 3,
              md: 4,
              lg: 5,
            },

            pb: 6,

            width: "100%",
          }}
        >
                    {/* ================= HERO ================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
          >

            <Paper
              elevation={0}
              sx={{
                position: "relative",
                overflow: "hidden",

                mb: 4,

                borderRadius: "34px",

                px: {
                  xs: 3,
                  md: 6,
                },

                py: {
                  xs: 4,
                  md: 6,
                },

                background:
                  "linear-gradient(135deg,#1565C0 0%,#1976D2 45%,#42A5F5 100%)",

                color: "#FFFFFF",

                boxShadow:
                  "0 22px 60px rgba(25,118,210,.22)",
              }}
            >

              {/* Background Circle */}

              <Box
                sx={{
                  position: "absolute",

                  right: -120,

                  top: -130,

                  width: 360,

                  height: 360,

                  borderRadius: "50%",

                  bgcolor: "rgba(255,255,255,.08)",
                }}
              />

              <Box
                sx={{
                  position: "absolute",

                  left: -80,

                  bottom: -120,

                  width: 220,

                  height: 220,

                  borderRadius: "50%",

                  bgcolor: "rgba(255,255,255,.05)",
                }}
              />

              <Stack
                spacing={3}
              >

                <Typography
                  sx={{
                    fontWeight: 900,

                    fontSize: {
                      xs: 32,
                      md: 48,
                    },
                  }}
                >
                  🔔 Notifications Center
                </Typography>

                <Typography
                  sx={{
                    maxWidth: 760,

                    fontSize: {
                      xs: 16,
                      md: 19,
                    },

                    lineHeight: 1.8,

                    opacity: .95,
                  }}
                >
                  Stay informed with real-time notifications
                  about leak detection, billing reminders,
                  water usage, maintenance schedules and
                  important apartment announcements.
                </Typography>

                <Stack
                  direction="row"
                  spacing={2}
                  flexWrap="wrap"
                  useFlexGap
                >

                  <Chip
                    label="Leak Detection"
                    sx={{
                      bgcolor: "rgba(255,255,255,.18)",
                      color: "#fff",
                      fontWeight: 700,
                    }}
                  />

                  <Chip
                    label="Bill Reminders"
                    sx={{
                      bgcolor: "rgba(255,255,255,.18)",
                      color: "#fff",
                      fontWeight: 700,
                    }}
                  />

                  <Chip
                    label="Water Usage"
                    sx={{
                      bgcolor: "rgba(255,255,255,.18)",
                      color: "#fff",
                      fontWeight: 700,
                    }}
                  />

                  <Chip
                    label="Maintenance"
                    sx={{
                      bgcolor: "rgba(255,255,255,.18)",
                      color: "#fff",
                      fontWeight: 700,
                    }}
                  />

                </Stack>

              </Stack>

            </Paper>

          </motion.div>
                    {/* ================= SUMMARY CARDS ================= */}

          <Grid
            container
            spacing={3}
            sx={{
              mb: 4,
            }}
          >

            {summaryCards.map((card) => (

              <Grid
                item
                xs={12}
                sm={6}
                lg={3}
                key={card.title}
              >

                <motion.div
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >

                  <Paper
                    elevation={0}
                    sx={{
                      height: 215,

                      p: 4,

                      borderRadius: "28px",

                      border: "1px solid #E8EEF5",

                      background: "#FFFFFF",

                      boxShadow:
                        "0 14px 35px rgba(15,23,42,.06)",

                      transition: ".3s",

                      "&:hover": {
                        boxShadow:
                          "0 22px 55px rgba(25,118,210,.15)",
                      },
                    }}
                  >

                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >

                      <Box>

                        <Typography
                          sx={{
                            color: "#64748B",
                            fontWeight: 700,
                            fontSize: 15,
                          }}
                        >
                          {card.title}
                        </Typography>

                        <Typography
                          sx={{
                            mt: 2,

                            fontWeight: 900,

                            fontSize: {
                              xs: 34,
                              md: 42,
                            },

                            color: card.color,
                          }}
                        >
                          {card.value}
                        </Typography>

                        <Typography
                          sx={{
                            mt: 1,
                            color: "#64748B",
                          }}
                        >
                          {card.subtitle}
                        </Typography>

                      </Box>

                      <Avatar
                        sx={{
                          width: 82,
                          height: 82,

                          bgcolor: card.bg,

                          color: card.color,
                        }}
                      >
                        {card.icon}
                      </Avatar>

                    </Stack>

                    <Box
                      sx={{
                        mt: 4,

                        width: 70,

                        height: 5,

                        borderRadius: 5,

                        bgcolor: card.color,
                      }}
                    />

                  </Paper>

                </motion.div>

              </Grid>

            ))}

          </Grid>
                    {/* ================= MAIN SECTION ================= */}

          <Grid
            container
            spacing={3}
            alignItems="stretch"
            sx={{
              mb: 4,
            }}
          >

            {/* ================= LEFT ================= */}

            <Grid
              item
              xs={12}
              lg={8}
            >

              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  minHeight: 720,
                  borderRadius: "30px",
                  border: "1px solid #E8EEF5",
                  boxShadow:
                    "0 18px 45px rgba(15,23,42,.06)",
                }}
              >

                <Typography
                  sx={{
                    fontSize: 30,
                    fontWeight: 900,
                    mb: 4,
                  }}
                >
                  High Priority Notifications
                </Typography>

                <Stack spacing={3}>

                  {notifications.map((item) => (
                    

                    <motion.div
                      key={item.id}
                      whileHover={{
                        x: 10,
                      }}
                    >
                      <Chip
  label={item.read ? "Read" : "Unread"}
  color={item.read ? "success" : "error"}
  size="small"
/>

                      <Paper
                        elevation={0}
                        sx={{
                          p: 3,
                          borderRadius: "20px",
                          border: "1px solid #EDF2F7",

                          bgcolor:
                            item.type === "danger"
                              ? "#FFF5F5"
                              : item.type === "warning"
                              ? "#FFF8E8"
                              : "#EEF6FF",

                          transition: ".3s",

                          "&:hover": {
                            boxShadow:
                              "0 12px 30px rgba(15,23,42,.08)",
                          },
                        }}
                      >

                        <Stack
                          direction="row"
                          spacing={3}
                          alignItems="center"
                        >

                          <Avatar
                            sx={{
                              width: 62,
                              height: 62,

                              bgcolor:
                                item.type === "danger"
                                  ? "#E53935"
                                  : item.type === "warning"
                                  ? "#FB8C00"
                                  : "#1976D2",
                            }}
                          >

                            {item.type === "danger"
                              ? <ErrorOutlineRounded />
                              : <NotificationsActiveRounded />}

                          </Avatar>

                          <Box flex={1}>

                            <Typography
                              sx={{
                                fontWeight: 800,
                                fontSize: 21,
                              }}
                            >
                              {item.title}
                            </Typography>

                            <Typography
                              sx={{
                                mt: 1,
                                color: "#64748B",
                              }}
                            >
                              {item.message}
                            </Typography>

                          </Box>

                          <Chip
                            label={item.time}
                            color="primary"
                            variant="outlined"
                          />

                        </Stack>

                      </Paper>

                    </motion.div>

                  ))}

                </Stack>

              </Paper>

            </Grid>

            {/* ================= RIGHT ================= */}

            <Grid
              item
              xs={12}
              lg={4}
            >

              <Paper
  elevation={0}
  sx={{
    p: 4,
    borderRadius: "30px",
    border: "1px solid #E8EEF5",
    boxShadow: "0 18px 45px rgba(15,23,42,.06)",

    display: "flex",
    flexDirection: "column",
    gap: 3,

    position: "sticky",
    top: 100,

    height: "fit-content",
    minHeight: "auto",
  }}
>

                <Typography
                  sx={{
                    fontSize: 28,
                    fontWeight: 900,
                    mb: 4,
                  }}
                >
                  Quick Actions
                </Typography>

                <Stack spacing={2.5} sx={{ mt: 2 }}>

  <Button
  fullWidth
  variant="contained"
  onClick={markAllRead}
>
  Mark All Read
</Button>

  <Paper
  onClick={() => setOpenAlerts(true)}
  sx={{
    p:2,
    border:"2px solid #1976D2",
    borderRadius:3,
    textAlign:"center",
    cursor:"pointer",
    "&:hover":{
      bgcolor:"#EEF6FF"
    }
  }}
>
    <Typography fontWeight={700}>
      Enable Alerts
    </Typography>
  </Paper>

<Paper
  onClick={downloadReport}
  sx={{
    p: 2,
    border: "2px solid #1976D2",
    borderRadius: 3,
    textAlign: "center",
    cursor: "pointer",
    transition: ".3s",
    "&:hover": {
      bgcolor: "#EEF6FF",
    },
  }}
>
  <Typography fontWeight={700}>
    Download Report
  </Typography>
</Paper>

  <Paper
  onClick={() => setOpenSettings(true)}
  sx={{
    p: 2,
    border: "2px solid #1976D2",
    borderRadius: 3,
    textAlign: "center",
    cursor: "pointer",
    transition: ".3s",
    "&:hover": {
      bgcolor: "#EEF6FF",
    },
  }}
>
  <Typography fontWeight={700}>
    Notification Settings
  </Typography>
</Paper>

</Stack>

                <Paper
                  elevation={0}
                  sx={{
                    mt: 5,
                    p: 3,
                    borderRadius: "18px",
                    bgcolor: "#EEF6FF",
                  }}
                >

                  <Typography
                    fontWeight={800}
                    color="primary"
                  >
                    💡 Smart Tip
                  </Typography>

                  <Typography
                    mt={1}
                    color="text.secondary"
                  >
                    Enable push notifications to receive
                    instant leak alerts and bill reminders.
                  </Typography>

                </Paper>

              </Paper>

            </Grid>

          </Grid>
                    {/* ================= NOTIFICATION TIMELINE ================= */}

          <Paper
            elevation={0}
            sx={{
              p: 4,
              mb: 4,
              borderRadius: "30px",
              border: "1px solid #E8EEF5",
              boxShadow:
                "0 18px 45px rgba(15,23,42,.06)",
            }}
          >

            <Typography
              sx={{
                fontSize: 30,
                fontWeight: 900,
                mb: 4,
              }}
            >
              Notification Timeline
            </Typography>

            <Stack spacing={3}>

              {[
                {
                  color: "#E53935",
                  title: "Leak Alert",
                  time: "Today • 09:45 AM",
                  desc: "Possible leakage detected near your kitchen water meter.",
                },
                {
                  color: "#FB8C00",
                  title: "Bill Reminder",
                  time: "Yesterday • 05:30 PM",
                  desc: "Your monthly water bill is due within 5 days.",
                },
                {
                  color: "#1976D2",
                  title: "Water Usage Report",
                  time: "2 Days Ago",
                  desc: "Daily water consumption report generated successfully.",
                },
                {
                  color: "#16A34A",
                  title: "Payment Successful",
                  time: "05 Jul 2026",
                  desc: "Your payment of ₹980 has been received.",
                },
              ].map((item, index) => (

                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: -40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: .45,
                    delay: index * .1,
                  }}
                >

                  <Paper
                    elevation={0}
                    sx={{
                      p: 3.5,
                      borderRadius: "20px",
                      border: "1px solid #EDF2F7",

                      transition: ".3s",

                      "&:hover": {
                        transform: "translateX(8px)",
                        boxShadow:
                          "0 12px 30px rgba(15,23,42,.08)",
                      },
                    }}
                  >

                    <Stack
                      direction="row"
                      spacing={3}
                      alignItems="center"
                    >

                      <Avatar
                        sx={{
                          width: 60,
                          height: 60,
                          bgcolor: item.color,
                        }}
                      >
                        <NotificationsActiveRounded />
                      </Avatar>

                      <Box flex={1}>

                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                        >

                          <Typography
                            sx={{
                              fontWeight: 800,
                              fontSize: 21,
                            }}
                          >
                            {item.title}
                          </Typography>

                          <Chip
                            label={item.time}
                            variant="outlined"
                          />

                        </Stack>

                        <Typography
                          sx={{
                            mt: 1,
                            color: "#64748B",
                          }}
                        >
                          {item.desc}
                        </Typography>

                      </Box>

                    </Stack>

                  </Paper>

                </motion.div>

              ))}

            </Stack>

          </Paper>
                    {/* ================= NOTIFICATION PREFERENCES ================= */}

          <Paper
            elevation={0}
            sx={{
              p: 4,
              mb: 4,
              borderRadius: "30px",
              border: "1px solid #E8EEF5",
              boxShadow:
                "0 18px 45px rgba(15,23,42,.06)",
            }}
          >

            <Typography
              sx={{
                fontSize: 30,
                fontWeight: 900,
                mb: 4,
              }}
            >
              Notification Preferences
            </Typography>

            <Grid
              container
              spacing={3}
            >

              {[
                {
                  title: "📧 Email Notifications",
                  desc: "Receive bills, reports and apartment announcements directly in your inbox.",
                },
                {
                  title: "📱 Push Notifications",
                  desc: "Instant alerts for leak detection, high water usage and billing updates.",
                },
                {
                  title: "💬 SMS Alerts",
                  desc: "Receive critical notifications even when you are offline.",
                },
              ].map((item) => (

                <Grid
                  item
                  xs={12}
                  md={4}
                  key={item.title}
                >

                  <motion.div
                    whileHover={{
                      y: -8,
                    }}
                  >

                    <Paper
                      elevation={0}
                      sx={{
                        p: 4,
                        height: 200,
                        borderRadius: "22px",
                        bgcolor: "#F8FBFF",
                        border: "1px solid #E8EEF5",

                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",

                        transition: ".3s",

                        "&:hover": {
                          boxShadow:
                            "0 14px 35px rgba(25,118,210,.10)",
                        },
                      }}
                    >

                      <Typography
                        sx={{
                          fontWeight: 800,
                          fontSize: 21,
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        sx={{
                          mt: 2,
                          color: "#64748B",
                          lineHeight: 1.8,
                        }}
                      >
                        {item.desc}
                      </Typography>

                    </Paper>

                  </motion.div>

                </Grid>

              ))}

            </Grid>

          </Paper>
                    {/* ================= AI RECOMMENDATIONS ================= */}

          <Paper
            elevation={0}
            sx={{
              p: 4,
              borderRadius: "30px",
              border: "1px solid #E8EEF5",
              boxShadow:
                "0 18px 45px rgba(15,23,42,.06)",
            }}
          >

            <Typography
              sx={{
                fontSize: 30,
                fontWeight: 900,
                mb: 4,
              }}
            >
              AI Recommendations
            </Typography>

            <Grid
              container
              spacing={3}
            >

              {[
                {
                  title: "💧 Water Saving",
                  color: "#EEF6FF",
                  text: "Your water usage is slightly above average. Reducing shower time can save nearly 15% water.",
                },
                {
                  title: "📊 Usage Pattern",
                  color: "#ECFDF5",
                  text: "Water consumption has remained stable over the last 30 days.",
                },
                {
                  title: "🔔 Reminder",
                  color: "#FFF7ED",
                  text: "Your next monthly bill will be generated in 5 days.",
                },
              ].map((item) => (

                <Grid
                  item
                  xs={12}
                  md={4}
                  key={item.title}
                >

                  <motion.div
                    whileHover={{
                      y: -8,
                    }}
                  >

                    <Paper
                      elevation={0}
                      sx={{
                        p: 4,
                        height: 220,
                        borderRadius: "22px",
                        bgcolor: item.color,

                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",

                        transition: ".3s",

                        "&:hover": {
                          boxShadow:
                            "0 16px 40px rgba(15,23,42,.08)",
                        },
                      }}
                    >

                      <Typography
                        sx={{
                          fontWeight: 800,
                          fontSize: 22,
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        sx={{
                          mt: 2,
                          color: "#64748B",
                          lineHeight: 1.8,
                        }}
                      >
                        {item.text}
                      </Typography>

                    </Paper>

                  </motion.div>

                </Grid>

              ))}

            </Grid>

          </Paper>
          <Dialog
  open={openAlerts}
  onClose={() => setOpenAlerts(false)}
  maxWidth="xs"
  fullWidth
  PaperProps={{
    sx: {
      borderRadius: "20px",
      p: 1,
    },
  }}
>
  <DialogTitle
    sx={{
      fontWeight: 800,
      fontSize: 28,
      color: "#0F172A",
      pb: 1,
    }}
  >
    Enable Notifications
  </DialogTitle>

  <DialogContent
    sx={{
      pt: 2,

      "& .MuiFormControlLabel-root": {
        my: 1,
      },

      "& .MuiFormControlLabel-label": {
        color: "#0F172A",
        fontSize: "17px",
        fontWeight: 600,
      },

      "& .MuiCheckbox-root": {
        color: "#1976D2",
      },

      "& .MuiCheckbox-root.Mui-checked": {
        color: "#1976D2",
      },
    }}
  >
    <FormGroup>

      <FormControlLabel
        control={
          <Checkbox
            checked={alertSettings.bill}
            onChange={(e) =>
              setAlertSettings({
                ...alertSettings,
                bill: e.target.checked,
              })
            }
          />
        }
        label="Bill Generated"
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={alertSettings.leak}
            onChange={(e) =>
              setAlertSettings({
                ...alertSettings,
                leak: e.target.checked,
              })
            }
          />
        }
        label="Leak Detection"
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={alertSettings.usage}
            onChange={(e) =>
              setAlertSettings({
                ...alertSettings,
                usage: e.target.checked,
              })
            }
          />
        }
        label="High Water Usage"
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={alertSettings.payment}
            onChange={(e) =>
              setAlertSettings({
                ...alertSettings,
                payment: e.target.checked,
              })
            }
          />
        }
        label="Payment Reminder"
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={alertSettings.monthly}
            onChange={(e) =>
              setAlertSettings({
                ...alertSettings,
                monthly: e.target.checked,
              })
            }
          />
        }
        label="Monthly Report"
      />

    </FormGroup>
  </DialogContent>

  <DialogActions
    sx={{
      px: 3,
      pb: 2,
      pt: 1,
    }}
  >
    <Button
      onClick={() => setOpenAlerts(false)}
      sx={{
        textTransform: "none",
        fontWeight: 700,
      }}
    >
      Cancel
    </Button>

    <Button
      variant="contained"
      onClick={() => {
  setNotifications(
    notifications.map((n) => ({
      ...n,
      read: true,
    }))
  );

  setSnackbar(true);
}}
      sx={{
        textTransform: "none",
        fontWeight: 700,
        px: 4,
        borderRadius: "12px",
      }}
    >
      Save
    </Button>
  </DialogActions>
</Dialog>

<Snackbar
  open={snackbar}
  autoHideDuration={3000}
  onClose={() => setSnackbar(false)}
  anchorOrigin={{
    vertical: "bottom",
    horizontal: "right",
  }}
>
  <Alert
  severity="success"
  variant="filled"
>
  All notifications marked as read.
</Alert>
</Snackbar>

        </Container>
        <Dialog
  open={openSettings}
  onClose={() => setOpenSettings(false)}
  maxWidth="xs"
  fullWidth
>
  <DialogTitle>
    Notification Settings
  </DialogTitle>

  <DialogContent>

    <FormControlLabel
      control={
        <Switch
          checked={alertSettings.bill}
          onChange={(e) =>
            setAlertSettings({
              ...alertSettings,
              bill: e.target.checked,
            })
          }
        />
      }
      label="Bill Notifications"
    />

    <FormControlLabel
      control={
        <Switch
          checked={alertSettings.leak}
          onChange={(e) =>
            setAlertSettings({
              ...alertSettings,
              leak: e.target.checked,
            })
          }
        />
      }
      label="Leak Alerts"
    />

    <FormControlLabel
      control={
        <Switch
          checked={alertSettings.usage}
          onChange={(e) =>
            setAlertSettings({
              ...alertSettings,
              usage: e.target.checked,
            })
          }
        />
      }
      label="High Water Usage"
    />

    <FormControlLabel
      control={
        <Switch
          checked={alertSettings.payment}
          onChange={(e) =>
            setAlertSettings({
              ...alertSettings,
              payment: e.target.checked,
            })
          }
        />
      }
      label="Payment Reminder"
    />

    <FormControlLabel
      control={
        <Switch
          checked={alertSettings.monthly}
          onChange={(e) =>
            setAlertSettings({
              ...alertSettings,
              monthly: e.target.checked,
            })
          }
        />
      }
      label="Monthly Report"
    />

  </DialogContent>

  <DialogActions>

    <Button onClick={() => setOpenSettings(false)}>
      Cancel
    </Button>

    <Button
      variant="contained"
      onClick={() => {
        localStorage.setItem(
          "notificationSettings",
          JSON.stringify(alertSettings)
        );

        setOpenSettings(false);
        setSnackbar(true);
      }}
    >
      Save
    </Button>

  </DialogActions>
</Dialog>

      </Box>

    </Box>

  );

}