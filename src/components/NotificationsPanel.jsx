import React from "react";
import { motion } from "framer-motion";

import {
  Paper,
  Typography,
  Box,
  Stack,
  Avatar,
  Button,
  Chip,
} from "@mui/material";

import {
  WarningAmberRounded,
  ReceiptLongRounded,
  WaterDropRounded,
  CheckCircleRounded,
  NotificationsActiveRounded,
} from "@mui/icons-material";

const notifications = [
  {
    id: 1,
    title: "Leak Alert",
    message: "Unusual water usage detected in your apartment.",
    time: "10 mins ago",
    color: "#EF4444",
    icon: <WarningAmberRounded />,
    unread: true,
  },
  {
    id: 2,
    title: "Bill Generated",
    message: "Your July water bill has been generated.",
    time: "2 hours ago",
    color: "#1976D2",
    icon: <ReceiptLongRounded />,
    unread: true,
  },
  {
    id: 3,
    title: "Water Usage",
    message: "You saved 18% more water this week.",
    time: "Yesterday",
    color: "#00ACC1",
    icon: <WaterDropRounded />,
    unread: false,
  },
  {
    id: 4,
    title: "Payment Successful",
    message: "Your June bill payment was successful.",
    time: "3 days ago",
    color: "#16A34A",
    icon: <CheckCircleRounded />,
    unread: false,
  },
];

export default function NotificationsPanel() {

  return (

    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .6 }}
    >

      <Paper
        elevation={0}
        sx={{
          borderRadius: "30px",
          border: "1px solid #E8EEF5",
          boxShadow: "0 18px 45px rgba(15,23,42,.08)",
          p: {
            xs: 2.5,
            md: 4,
          },
        }}
      >

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={4}
        >

          <Box>

            <Stack
              direction="row"
              spacing={1.5}
              alignItems="center"
              mb={1}
            >

              <NotificationsActiveRounded
                sx={{
                  color: "#1976D2",
                  fontSize: 32,
                }}
              />

              <Typography
                sx={{
                  fontSize: 28,
                  fontWeight: 900,
                  color: "#0F172A",
                }}
              >
                Notifications
              </Typography>

            </Stack>

            <Typography color="#64748B">
              Recent updates from AquaTrack
            </Typography>

          </Box>

          <Button
            variant="outlined"
            sx={{
              borderRadius: "12px",
              textTransform: "none",
              fontWeight: 700,
            }}
          >
            Mark All Read
          </Button>

        </Stack>

        <Stack spacing={3}>
                  {notifications.map((notification, index) => (

          <motion.div
            key={notification.id}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.08,
            }}
          >

            <Box
              sx={{
                position: "relative",

                display: "flex",

                alignItems: "center",

                gap: 2,

                p: 2.5,

                borderRadius: "22px",

                bgcolor: "#F8FBFF",

                border: "1px solid #E8EEF5",

                transition: ".35s",

                cursor: "pointer",

                "&:hover": {
                  bgcolor: "#FFFFFF",
                  transform: "translateY(-4px)",
                  boxShadow:
                    "0 16px 35px rgba(25,118,210,.12)",
                },
              }}
            >

              {notification.unread && (

                <Box
                  sx={{
                    position: "absolute",
                    top: 18,
                    right: 18,

                    width: 10,
                    height: 10,

                    borderRadius: "50%",

                    bgcolor: "#1976D2",
                  }}
                />

              )}

              <Avatar
                sx={{
                  bgcolor: notification.color,

                  width: 58,

                  height: 58,

                  boxShadow:
                    `0 12px 25px ${notification.color}40`,
                }}
              >

                {notification.icon}

              </Avatar>

              <Box
                sx={{
                  flex: 1,
                }}
              >

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >

                  <Typography
                    sx={{
                      fontWeight: 800,
                      color: "#0F172A",
                      fontSize: 17,
                    }}
                  >
                    {notification.title}
                  </Typography>

                  <Chip
                    label={notification.time}
                    size="small"
                    sx={{
                      bgcolor: "#EEF6FF",
                      color: "#1976D2",
                      fontWeight: 700,
                    }}
                  />

                </Stack>

                <Typography
                  sx={{
                    mt: 1,

                    color: "#64748B",

                    lineHeight: 1.7,

                    fontSize: 14,
                  }}
                >
                  {notification.message}
                </Typography>

              </Box>

            </Box>

          </motion.div>

        ))}

      </Stack>

    </Paper>

  </motion.div>

);

}
