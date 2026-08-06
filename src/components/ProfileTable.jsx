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
  EditRounded,
  PersonRounded,
  EmailRounded,
  PhoneRounded,
  ApartmentRounded,
  HomeRounded,
  CalendarMonthRounded,
  BadgeRounded,
} from "@mui/icons-material";

const profile = [
  {
    icon: <PersonRounded />,
    title: "Full Name",
    value: "Navya",
  },
  {
    icon: <EmailRounded />,
    title: "Email Address",
    value: "navya@gmail.com",
  },
  {
    icon: <PhoneRounded />,
    title: "Mobile Number",
    value: "+91 9876543210",
  },
  {
    icon: <ApartmentRounded />,
    title: "Apartment",
    value: "Aqua Residency",
  },
  {
    icon: <HomeRounded />,
    title: "Flat Number",
    value: "A-101",
  },
  {
    icon: <CalendarMonthRounded />,
    title: "Resident Since",
    value: "July 2026",
  },
  {
    icon: <BadgeRounded />,
    title: "Resident ID",
    value: "AQ-100245",
  },
];

export default function ProfileTable({ onEditProfile }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Paper
        elevation={0}
        sx={{
          borderRadius: "24px",
          overflow: "hidden",
          border: "1px solid #E5EAF2",
          boxShadow: "0 15px 35px rgba(15,23,42,.06)",
          height: "100%",
        }}
      >
        {/* Header */}

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            p: 3,
          }}
        >
          <Box>
            <Typography
              fontWeight={800}
              fontSize={34}
            >
              Personal Information
            </Typography>

            <Typography color="text.secondary">
              Resident account information
            </Typography>
          </Box>

          <Button
  variant="contained"
  startIcon={<EditRounded />}
  onClick={onEditProfile}
  sx={{
    borderRadius: "14px",
    px: 3,
    py: 1.3,
    textTransform: "none",
    fontWeight: 700,
  }}
>
  Edit
</Button>
        </Stack>

        <Divider />

        {profile.map((item, index) => (
          <Box key={item.title}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{
                px: 3,
                py: 2,
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
                sx={{
                  width: "45%",
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: "#EEF5FF",
                    color: "#1976D2",
                  }}
                >
                  {item.icon}
                </Avatar>

                <Typography
                  fontWeight={700}
                  color="text.secondary"
                >
                  {item.title}
                </Typography>
              </Stack>

              <Typography
                sx={{
                  width: "40%",
                  fontWeight: 700,
                }}
              >
                {item.value}
              </Typography>

              <Chip
                color="success"
                size="small"
                label="Active"
              />
            </Stack>

            {index !== profile.length - 1 && (
              <Divider />
            )}
          </Box>
        ))}

        <Box
          sx={{
            bgcolor: "#F8FBFF",
            p: 3,
            borderTop: "1px solid #EEF2F7",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                fontWeight={700}
              >
                Profile Status
              </Typography>

              <Typography
                color="text.secondary"
                fontSize={14}
              >
                Your resident account is verified and complete.
              </Typography>
            </Box>

            <Chip
              color="success"
              label="Verified Resident"
            />
          </Stack>
        </Box>
      </Paper>
    </motion.div>
  );
}