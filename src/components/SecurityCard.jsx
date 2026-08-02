import React from "react";
import { motion } from "framer-motion";

import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import {
  LockRounded,
  SecurityRounded,
  DevicesRounded,
  HistoryRounded,
  ShieldRounded,
  ChevronRightRounded,
} from "@mui/icons-material";

const security = [
  {
    title: "Password",
    subtitle: "Updated 12 days ago",
    icon: <LockRounded />,
    color: "#1976D2",
  },
  {
    title: "Two-Factor Authentication",
    subtitle: "Enabled",
    icon: <SecurityRounded />,
    color: "#16A34A",
  },
  {
    title: "Trusted Devices",
    subtitle: "3 Active Devices",
    icon: <DevicesRounded />,
    color: "#FB8C00",
  },
  {
    title: "Recent Login",
    subtitle: "Today • 09:15 AM",
    icon: <HistoryRounded />,
    color: "#8E24AA",
  },
];

export default function SecurityCard() {

  return (

    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: .5 }}
    >

      <Paper
        elevation={0}
        sx={{

          height: "100%",

          display: "flex",

          flexDirection: "column",

          borderRadius: "24px",

          overflow: "hidden",

          border: "1px solid #E5EAF2",

          boxShadow:
            "0 15px 35px rgba(15,23,42,.06)",

        }}
      >

        {/* Header */}

        <Box
          sx={{
            p: 3,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >

          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
          >

            <Avatar
              sx={{
                bgcolor: "#EEF5FF",
                color: "#1976D2",
              }}
            >
              <ShieldRounded />
            </Avatar>

            <Box>

              <Typography
                fontWeight={800}
                fontSize={26}
              >
                Security
              </Typography>

              <Typography
                color="text.secondary"
              >
                Account Protection
              </Typography>

            </Box>

          </Stack>

          <Chip
            label="Protected"
            color="success"
          />

        </Box>

        <Divider />

        {security.map((item, index) => (

          <Box key={item.title}>

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{

                px: 3,

                py: 2.2,

                transition: ".25s",

                "&:hover": {

                  bgcolor: "#F8FBFF",

                },

              }}
            >

              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
              >

                <Avatar
                  sx={{
                    bgcolor: `${item.color}15`,
                    color: item.color,
                  }}
                >
                  {item.icon}
                </Avatar>

                <Box>

                  <Typography
                    fontWeight={700}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    fontSize={13}
                    color="text.secondary"
                  >
                    {item.subtitle}
                  </Typography>

                </Box>

              </Stack>

              <ChevronRightRounded
                color="action"
              />

            </Stack>

            {index !== security.length - 1 && (
              <Divider />
            )}

          </Box>

        ))}

        <Box
          sx={{
            mt: "auto",
            p: 3,
          }}
        >

          <Button
            fullWidth
            variant="contained"
            sx={{
              py: 1.4,
              borderRadius: "14px",
              textTransform: "none",
              fontWeight: 700,
            }}
          >
            Manage Security
          </Button>

        </Box>

      </Paper>

    </motion.div>

  );

}