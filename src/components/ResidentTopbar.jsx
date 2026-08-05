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
  TextField,
  InputAdornment,
} from "@mui/material";

import {
  NotificationsRounded,
  SearchRounded,
  WbSunnyRounded,
  MenuRounded,
} from "@mui/icons-material";

export default function ResidentTopbar({ handleDrawerToggle }) {
  return (
    <AppBar
      elevation={0}
      position="static"
      sx={{
        width: {
          xs: "100%",
          lg: "calc(100% - 280px)",
        },

        ml: {
          xs: 0,
          lg: "280px",
        },

        bgcolor: "rgba(255,255,255,.90)",
        backdropFilter: "blur(20px)",

        borderBottom: "1px solid #E8EEF5",

        boxShadow: "0 8px 25px rgba(15,23,42,.05)",
      }}
    >
      <Toolbar
        sx={{
          minHeight: {
            xs: 70,
            md: 82,
          },

          px: {
            xs: 2,
            md: 4,
          },

          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* LEFT */}

        <Box
          display="flex"
          alignItems="center"
          gap={2}
        >
          {/* Hamburger */}

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
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <Typography
              sx={{
                fontWeight: 900,

                color: "#0F172A",

                fontSize: {
                  xs: 20,
                  sm: 24,
                  md: 30,
                },
              }}
            >
              Welcome Back, Navya 👋
            </Typography>

            <Typography
              sx={{
                mt: 0.5,

                color: "#64748B",

                display: {
                  xs: "none",
                  sm: "block",
                },

                fontSize: {
                  sm: 13,
                  md: 15,
                },
              }}
            >
              Monitor your water usage and manage everything from one place.
            </Typography>
          </motion.div>
        </Box>

        {/* RIGHT */}

        <Box
          display="flex"
          alignItems="center"
          gap={{
            xs: 1,
            md: 2,
          }}
        >
          {/* Search */}

          <TextField
            placeholder="Search..."
            size="small"
            sx={{
              display: {
                xs: "none",
                md: "block",
              },

              width: 260,

              "& .MuiOutlinedInput-root": {
                borderRadius: "16px",

                bgcolor: "#F8FBFF",

                "& fieldset": {
                  borderColor: "#E8EEF5",
                },

                "&:hover fieldset": {
                  borderColor: "#1976D2",
                },

                "&.Mui-focused fieldset": {
                  borderColor: "#1976D2",
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchRounded
                    sx={{
                      color: "#64748B",
                    }}
                  />
                </InputAdornment>
              ),
            }}
          />

          {/* Weather */}

          <Box
            sx={{
              display: {
                xs: "none",
                sm: "flex",
              },

              alignItems: "center",

              gap: 1,

              px: 2,

              py: 1,

              bgcolor: "#FFF8E1",

              borderRadius: "14px",
            }}
          >
            <WbSunnyRounded
              sx={{
                color: "#F59E0B",
              }}
            />

            <Typography fontWeight={700}>
              29°C
            </Typography>
          </Box>

          {/* Notification */}

          <IconButton
            sx={{
              bgcolor: "#F4F8FF",

              "&:hover": {
                bgcolor: "#E3F2FD",
              },
            }}
          >
            <Badge
              badgeContent={3}
              color="error"
            >
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
            gap={1}
          >
            <Avatar
              sx={{
                bgcolor: "#1976D2",

                width: {
                  xs: 38,
                  md: 42,
                },

                height: {
                  xs: 38,
                  md: 42,
                },

                fontWeight: 800,
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
                  fontWeight: 800,
                  fontSize: 15,
                }}
              >
                Madhan
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
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}