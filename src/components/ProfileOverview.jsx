import React from "react";
import { motion } from "framer-motion";

import {
  Avatar,
  Box,
  Button,
  Chip,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import {
  ApartmentRounded,
  DownloadRounded,
  EditRounded,
  HomeRounded,
  VerifiedRounded,
} from "@mui/icons-material";

export default function ProfileOverview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Paper
        elevation={0}
        sx={{
          position: "relative",
          overflow: "hidden",
          mb: 3,
          borderRadius: "28px",
          background:
            "linear-gradient(135deg,#1565C0 0%,#1E88E5 45%,#42A5F5 100%)",
          color: "#fff",
          boxShadow: "0 18px 40px rgba(21,101,192,.22)",
        }}
      >
        {/* Background Decorations */}

        <Box
          sx={{
            position: "absolute",
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "rgba(255,255,255,.07)",
            top: -180,
            right: -120,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: 260,
            height: 260,
            borderRadius: "50%",
            background: "rgba(255,255,255,.05)",
            left: -80,
            bottom: -120,
          }}
        />

        <Stack
          direction={{
            xs: "column",
            lg: "row",
          }}
          justifyContent="space-between"
          spacing={4}
          sx={{
            position: "relative",
            zIndex: 2,
            px: 4,
            py: 3,
          }}
        >
          {/* Left */}

          <Stack
            direction="row"
            spacing={3}
            alignItems="center"
          >
            <Avatar
              sx={{
                width: 90,
                height: 90,
                bgcolor: "#fff",
                color: "#1565C0",
                fontWeight: 800,
                fontSize: 42,
              }}
            >
              N
            </Avatar>

            <Box>
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: {
                    xs: 32,
                    md: 42,
                  },
                }}
              >
                Navya
              </Typography>

              <Typography
                sx={{
                  opacity: 0.9,
                  fontSize: 18,
                  mt: 0.5,
                }}
              >
                Resident • Aqua Residency
              </Typography>

              <Stack
                direction="row"
                spacing={1.5}
                mt={3}
                flexWrap="wrap"
                useFlexGap
              >
                <Chip
                  icon={<VerifiedRounded />}
                  label="Verified Resident"
                  sx={{
                    bgcolor: "rgba(255,255,255,.18)",
                    color: "#fff",
                    fontWeight: 600,
                    "& .MuiChip-icon": {
                      color: "#fff",
                    },
                  }}
                />

                <Chip
                  icon={<ApartmentRounded />}
                  label="Block A"
                  sx={{
                    bgcolor: "rgba(255,255,255,.18)",
                    color: "#fff",
                    "& .MuiChip-icon": {
                      color: "#fff",
                    },
                  }}
                />

                <Chip
                  icon={<HomeRounded />}
                  label="Flat A-101"
                  sx={{
                    bgcolor: "rgba(255,255,255,.18)",
                    color: "#fff",
                    "& .MuiChip-icon": {
                      color: "#fff",
                    },
                  }}
                />
              </Stack>
            </Box>
          </Stack>

          {/* Right */}

          <Stack
            spacing={2}
            sx={{
              width: {
                xs: "100%",
                md: 260,
              },
            }}
          >
            <Button
              variant="contained"
              startIcon={<EditRounded />}
              fullWidth
              sx={{
                bgcolor: "#fff",
                color: "#1565C0",
                py: 1.4,
                fontWeight: 700,
                borderRadius: "14px",
                textTransform: "none",
                "&:hover": {
                  bgcolor: "#F5F9FF",
                },
              }}
            >
              Edit Profile
            </Button>

            <Button
              variant="outlined"
              startIcon={<DownloadRounded />}
              fullWidth
              sx={{
                color: "#fff",
                borderColor: "#fff",
                py: 1.4,
                borderRadius: "14px",
                textTransform: "none",
                fontWeight: 700,
                "&:hover": {
                  bgcolor: "rgba(255,255,255,.08)",
                  borderColor: "#fff",
                },
              }}
            >
              Download Profile
            </Button>

            <Paper
              elevation={0}
              sx={{
                bgcolor: "rgba(255,255,255,.15)",
                color: "#fff",
                borderRadius: "16px",
                p: 2.2,
              }}
            >
              <Typography fontSize={14}>
                Profile Completion
              </Typography>

              <Typography
                sx={{
                  fontSize: 34,
                  fontWeight: 800,
                }}
              >
                96%
              </Typography>
            </Paper>
          </Stack>
        </Stack>
      </Paper>
    </motion.div>
  );
}