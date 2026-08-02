import React from "react";
import { motion } from "framer-motion";

import {
  Avatar,
  Box,
  Chip,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import {
  LoginRounded,
  WaterDropRounded,
  ReceiptLongRounded,
  WorkspacePremiumRounded,
  EditRounded,
} from "@mui/icons-material";

const activities = [
  {
    title: "Logged into AquaTrack",
    time: "Today • 09:15 AM",
    icon: <LoginRounded />,
    color: "#1976D2",
  },
  {
    title: "Water usage synchronized",
    time: "Today • 08:10 AM",
    icon: <WaterDropRounded />,
    color: "#00ACC1",
  },
  {
    title: "Paid July Water Bill",
    time: "Yesterday • 06:20 PM",
    icon: <ReceiptLongRounded />,
    color: "#16A34A",
  },
  {
    title: "Gold Eco Badge Earned",
    time: "2 Days Ago",
    icon: <WorkspacePremiumRounded />,
    color: "#F59E0B",
  },
  {
    title: "Updated Profile Information",
    time: "5 Days Ago",
    icon: <EditRounded />,
    color: "#8B5CF6",
  },
];

export default function RecentActivityCard() {

  return (

    <motion.div
      initial={{
        opacity: 0,
        x: 30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: .6,
      }}
    >

      <Paper
        elevation={0}
        sx={{
          p: 3,
          borderRadius: "26px",
          border: "1px solid #E8EEF5",
          boxShadow:
            "0 18px 45px rgba(15,23,42,.08)",
          height: "100%",
        }}
      >

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >

          <Box>

            <Typography
              sx={{
                fontSize: 28,
                fontWeight: 800,
                color: "#0F172A",
              }}
            >
              Recent Activity
            </Typography>

            <Typography
              sx={{
                mt: .5,
                color: "#64748B",
              }}
            >
              Latest account activities
            </Typography>

          </Box>

          <Chip
            label="Live"
            color="success"
            sx={{
              fontWeight: 700,
            }}
          />

        </Stack>

        <Stack spacing={0}>

          {activities.map((activity, index) => (

            <motion.div
              key={activity.title}
              whileHover={{
                x: 6,
              }}
            >

              <Stack
                direction="row"
                spacing={2}
                sx={{
                  py: 2,
                  position: "relative",
                }}
              >

                {/* Timeline */}

                <Box
                  sx={{
                    position: "relative",
                    width: 60,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >

                  {index !== activities.length - 1 && (

                    <Box
                      sx={{
                        position: "absolute",
                        top: 56,
                        width: 2,
                        height: 60,
                        bgcolor: "#E5E7EB",
                      }}
                    />

                  )}

                  <Avatar
                    sx={{
                      bgcolor: `${activity.color}15`,
                      color: activity.color,
                      width: 48,
                      height: 48,
                    }}
                  >
                    {activity.icon}
                  </Avatar>

                </Box>

                {/* Content */}

                <Paper
                  elevation={0}
                  sx={{
                    flex: 1,
                    p: 2,
                    borderRadius: "18px",
                    bgcolor: "#F8FBFF",
                    border: "1px solid #EEF2F7",
                    transition: ".3s",

                    "&:hover": {
                      bgcolor: "#FFFFFF",
                      boxShadow:
                        "0 12px 30px rgba(25,118,210,.10)",
                    },
                  }}
                >

                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: "#0F172A",
                    }}
                  >
                    {activity.title}
                  </Typography>

                  <Typography
                    sx={{
                      mt: .5,
                      fontSize: 13,
                      color: "#64748B",
                    }}
                  >
                    {activity.time}
                  </Typography>

                </Paper>

              </Stack>

            </motion.div>

          ))}

        </Stack>

      </Paper>

    </motion.div>

  );

}