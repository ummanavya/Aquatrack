import React from "react";
import { motion } from "framer-motion";

import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Avatar,
  Badge,
  Chip,
} from "@mui/material";

import {
  NotificationsRounded,
  WaterDropRounded,
  MenuRounded,
  KeyboardArrowDownRounded,
} from "@mui/icons-material";

export default function ResidentTopbar({ handleDrawerToggle }) {
  return (
    <AppBar
      elevation={0}
      position="fixed"
      sx={{
        width: {
          xs: "100%",
          lg: "calc(100% - 280px)",
        },
        ml: {
          xs: 0,
          lg: "280px",
        },
        bgcolor: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(18px)",
        borderBottom: "1px solid #E8EEF5",
        boxShadow: "0 6px 20px rgba(15,23,42,.06)",
        zIndex: 1200,
      }}
    >
      <Toolbar
        sx={{
          minHeight: "72px !important",
          px: {
            xs: 2,
            md: 4,
          },
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* LEFT */}

        <Box display="flex" alignItems="center" gap={2}>
          <IconButton
            onClick={handleDrawerToggle}
            sx={{
              display: {
                xs: "flex",
                lg: "none",
              },
            }}
          >
            <MenuRounded />
          </IconButton>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              sx={{
                fontWeight: 800,
                color: "#0F172A",
                fontSize: {
                  xs: 22,
                  md: 28,
                },
                lineHeight: 1.2,
              }}
            >
              Good Morning, Navya 👋
            </Typography>

            <Typography
              sx={{
                color: "#64748B",
                fontSize: 14,
                mt: 0.4,
                display: {
                  xs: "none",
                  md: "block",
                },
              }}
            >
              Here's your water usage overview.
            </Typography>
          </motion.div>
        </Box>

        {/* RIGHT */}

        <Box display="flex" alignItems="center" gap={2}>
          {/* Today's Usage */}

          <Chip
            icon={<WaterDropRounded />}
            label="320 L Today"
            sx={{
              display: {
                xs: "none",
                sm: "flex",
              },
              bgcolor: "#E8F4FF",
              color: "#1976D2",
              fontWeight: 700,
              px: 1,
              height: 42,
              borderRadius: "14px",

              "& .MuiChip-icon": {
                color: "#1976D2",
              },
            }}
          />

          {/* Notification */}

          <IconButton
            sx={{
              width: 46,
              height: 46,
              bgcolor: "#F5F9FF",

              "&:hover": {
                bgcolor: "#E3F2FD",
              },
            }}
          >
            <Badge badgeContent={3} color="error">
              <NotificationsRounded
                sx={{
                  color: "#1976D2",
                }}
              />
            </Badge>
          </IconButton>

          {/* Profile */}

          <Box
            display="flex"
            alignItems="center"
            gap={1.5}
            sx={{
              cursor: "pointer",
              px: 1,
              py: 0.6,
              borderRadius: "14px",

              transition: ".3s",

              "&:hover": {
                bgcolor: "#F7FAFF",
              },
            }}
          >
            <Avatar
              sx={{
                bgcolor: "#1976D2",
                width: 44,
                height: 44,
                fontWeight: 800,
                boxShadow: "0 6px 16px rgba(25,118,210,.25)",
              }}
            >
              N
            </Avatar>

            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "block",
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: 15,
                  color: "#0F172A",
                  lineHeight: 1.1,
                }}
              >
                Navya
              </Typography>

              <Typography
                sx={{
                  color: "#64748B",
                  fontSize: 13,
                }}
              >
                Resident
              </Typography>
            </Box>

            <KeyboardArrowDownRounded
              sx={{
                color: "#64748B",
                display: {
                  xs: "none",
                  md: "block",
                },
              }}
            />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}