import React from "react";
import { motion } from "framer-motion";

import {
  Avatar,
  Box,
  Chip,
  Divider,
  LinearProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import {
  WaterDropRounded,
  EmojiEventsRounded,
  ApartmentRounded,
  HomeRounded,
  CheckCircleRounded,
} from "@mui/icons-material";

export default function AccountCard() {

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

          borderRadius: "24px",

          overflow: "hidden",

          border: "1px solid #E5EAF2",

          boxShadow:
            "0 15px 35px rgba(15,23,42,.06)",

        }}
      >

        {/* Top */}

        <Box
          sx={{

            background:
              "linear-gradient(135deg,#1565C0,#42A5F5)",

            color: "#fff",

            textAlign: "center",

            p: 3,

          }}
        >

          <Avatar
            sx={{

              width: 80,

              height: 80,

              bgcolor: "#fff",

              color: "#1565C0",

              mx: "auto",

              mb: 2,

              fontWeight: 800,

              fontSize: 34,

            }}
          >
            N
          </Avatar>

          <Typography
            fontWeight={800}
            fontSize={24}
          >
            Navya
          </Typography>

          <Typography
            sx={{
              opacity: .9,
              mt: .5,
            }}
          >
            Resident
          </Typography>

          <Chip
            icon={<CheckCircleRounded />}
            label="Verified"
            sx={{
              mt: 2,
              bgcolor: "#fff",
              color: "#1565C0",
              fontWeight: 700,
            }}
          />

        </Box>

        {/* Details */}

        <Stack spacing={2} sx={{ p: 3 }}>

          <Stack
            direction="row"
            justifyContent="space-between"
          >
            <Typography color="text.secondary">
              Apartment
            </Typography>

            <Typography fontWeight={700}>
              Aqua Residency
            </Typography>
          </Stack>

          <Divider />

          <Stack
            direction="row"
            justifyContent="space-between"
          >
            <Typography color="text.secondary">
              Flat
            </Typography>

            <Typography fontWeight={700}>
              A-101
            </Typography>
          </Stack>

          <Divider />

          <Stack
            direction="row"
            justifyContent="space-between"
          >
            <Typography color="text.secondary">
              Profile Score
            </Typography>

            <Typography
              color="primary.main"
              fontWeight={700}
            >
              96%
            </Typography>
          </Stack>

          <LinearProgress
            variant="determinate"
            value={96}
            sx={{
              height: 8,
              borderRadius: 5,
            }}
          />

          <Divider />

          <Paper
            elevation={0}
            sx={{
              p: 2,
              bgcolor: "#F8FBFF",
              borderRadius: 3,
            }}
          >

            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
            >

              <WaterDropRounded color="primary"/>

              <Box>

                <Typography fontWeight={700}>
                  12,450 L
                </Typography>

                <Typography
                  color="text.secondary"
                  fontSize={13}
                >
                  Monthly Water Usage
                </Typography>

              </Box>

            </Stack>

          </Paper>

          <Paper
            elevation={0}
            sx={{
              p: 2,
              bgcolor: "#FFF8EB",
              borderRadius: 3,
            }}
          >

            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
            >

              <EmojiEventsRounded
                sx={{
                  color: "#F59E0B",
                }}
              />

              <Box>

                <Typography fontWeight={700}>
                  Gold Member
                </Typography>

                <Typography
                  color="text.secondary"
                  fontSize={13}
                >
                  Eco Reward Status
                </Typography>

              </Box>

            </Stack>

          </Paper>

          <Divider />

          <Stack
            direction="row"
            spacing={1}
          >

            <Chip
              icon={<ApartmentRounded />}
              label="Block A"
            />

            <Chip
              icon={<HomeRounded />}
              label="A-101"
            />

          </Stack>

        </Stack>

      </Paper>

    </motion.div>

  );

}