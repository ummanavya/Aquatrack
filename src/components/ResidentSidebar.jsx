import React from "react";
import { motion } from "framer-motion";

import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Chip,
  Divider,
} from "@mui/material";

import {
  DashboardRounded,
  PersonRounded,
  WaterDropRounded,
  ReceiptLongRounded,
  NotificationsRounded,
  EmojiEventsRounded,
  GroupsRounded,
  SupportAgentRounded,
  SettingsRounded,
  LogoutRounded,
} from "@mui/icons-material";

import { useNavigate, useLocation } from "react-router-dom";

export default function ResidentSidebar() {

  const navigate = useNavigate();
  const location = useLocation();

  const menus = [
    {
      title: "Dashboard",
      icon: <DashboardRounded />,
      path: "/resident-dashboard",
    },
    {
      title: "My Profile",
      icon: <PersonRounded />,
      path: "/resident-profile",
    },
    {
      title: "Water Usage",
      icon: <WaterDropRounded />,
      path: "/resident-water-usage",
    },
    {
      title: "Bills & Payments",
      icon: <ReceiptLongRounded />,
      path: "/resident-bills",
    },
    {
      title: "Notifications",
      icon: <NotificationsRounded />,
      path: "/resident-notifications",
      badge: "3",
    },
    {
      title: "Eco Rewards",
      icon: <EmojiEventsRounded />,
      path: "/resident-rewards",
      chip: "NEW",
    },
    {
      title: "Community",
      icon: <GroupsRounded />,
      path: "/resident-community",
    },
    {
      title: "Support",
      icon: <SupportAgentRounded />,
      path: "/resident-support",
    },
    {
      title: "Settings",
      icon: <SettingsRounded />,
      path: "/resident-settings",
    },
  ];

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (

    <motion.div
      initial={{
        x: -40,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: .6,
      }}
      style={{
        height: "100vh",
      }}
    >

      <Box
        sx={{
          width: 280,

          height: "100vh",

          position: "fixed",

          left: 0,

          top: 0,

          bgcolor: "#FFFFFF",

          borderRight: "1px solid #E8EEF5",

          boxShadow:
            "10px 0 35px rgba(15,23,42,.06)",

          display: "flex",

          flexDirection: "column",

          overflow: "hidden",

          zIndex: 1200,
        }}
      >

        {/* ================= Logo ================= */}

        <Box
          sx={{
            p: 3,
          }}
        >

          <Typography
            sx={{
              fontSize: 32,
              fontWeight: 900,
              color: "#1976D2",
            }}
          >
            AquaTrack
          </Typography>

          <Typography
            sx={{
              mt: .5,
              color: "#64748B",
              fontSize: 14,
            }}
          >
            Resident Portal
          </Typography>

        </Box>

        <Divider />
                {/* ================= Menu ================= */}

        <List
          sx={{
            flex: 1,

            px: 2,

            py: 2,

            overflowY: "auto",

            overflowX: "hidden",

            scrollbarWidth: "thin",

            "&::-webkit-scrollbar": {
              width: "7px",
            },

            "&::-webkit-scrollbar-thumb": {
              background: "#BFD7F5",
              borderRadius: "20px",
            },

            "&::-webkit-scrollbar-track": {
              background: "transparent",
            },
          }}
        >

          {menus.map((menu, index) => {

            const active = location.pathname === menu.path;

            return (

              <motion.div
                key={menu.title}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.05,
                }}
              >

                <ListItemButton

                  onClick={() => navigate(menu.path)}

                  sx={{

                    position: "relative",

                    borderRadius: "16px",

                    mb: 1.2,

                    py: 1.5,

                    transition: ".35s",

                    bgcolor: active
                      ? "#EAF4FF"
                      : "transparent",

                    "&:hover": {

                      bgcolor: "#F4F9FF",

                      transform: "translateX(6px)",

                    },

                    "&::before": active
                      ? {
                          content: '""',
                          position: "absolute",
                          left: -8,
                          top: 8,
                          bottom: 8,
                          width: 4,
                          borderRadius: 10,
                          background:
                            "linear-gradient(180deg,#1976D2,#42A5F5)",
                        }
                      : {},
                  }}

                >

                  <ListItemIcon
                    sx={{

                      color: active
                        ? "#1976D2"
                        : "#64748B",

                      minWidth: 46,

                      transition: ".3s",

                    }}
                  >

                    {menu.icon}

                  </ListItemIcon>

                  <ListItemText

                    primary={menu.title}

                    primaryTypographyProps={{

                      fontWeight: active ? 800 : 600,

                      color: active
                        ? "#1976D2"
                        : "#0F172A",

                      fontSize: 15,

                    }}

                  />

                  {menu.badge && (

                    <Chip
                      label={menu.badge}
                      size="small"
                      color="error"
                      sx={{
                        fontWeight: 700,
                      }}
                    />

                  )}

                  {menu.chip && (

                    <Chip
                      label={menu.chip}
                      size="small"
                      color="success"
                      sx={{
                        fontWeight: 700,
                      }}
                    />

                  )}

                </ListItemButton>

              </motion.div>

            );

          })}

        </List>
                {/* ================= Bottom Section ================= */}

        <Box
          sx={{
            p: 2,
            borderTop: "1px solid #EEF2F7",
            bgcolor: "#FFFFFF",
            flexShrink: 0,
          }}
        >

          {/* Save Water Card */}

          <motion.div
            whileHover={{
              y: -4,
              scale: 1.02,
            }}
            transition={{
              duration: 0.25,
            }}
          >

            <Box
              sx={{
                background:
                  "linear-gradient(135deg,#1976D2,#42A5F5)",
                borderRadius: "20px",
                color: "#FFFFFF",
                p: 2.5,
                mb: 2,
                position: "relative",
                overflow: "hidden",
              }}
            >

              {/* Decorative Circle */}

              <Box
                sx={{
                  position: "absolute",
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  bgcolor: "rgba(255,255,255,.12)",
                  top: -45,
                  right: -35,
                }}
              />

              <Typography
                sx={{
                  fontSize: 18,
                  fontWeight: 800,
                  mb: 1,
                  position: "relative",
                  zIndex: 2,
                }}
              >
                💧 Save Water
              </Typography>

              <Typography
                sx={{
                  fontSize: 14,
                  lineHeight: 1.8,
                  opacity: .96,
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Great progress!

                Save another

                <strong> 150 Litres </strong>

                this week to unlock your next

                <strong> Eco Reward Badge.</strong>
              </Typography>

            </Box>

          </motion.div>

          {/* Logout */}

          <motion.div
            whileHover={{
              x: 5,
            }}
          >

            <ListItemButton
              onClick={logout}
              sx={{
                borderRadius: "16px",
                py: 1.5,
                transition: ".3s",

                "&:hover": {
                  bgcolor: "#FEF2F2",
                },
              }}
            >

              <ListItemIcon
                sx={{
                  color: "#EF4444",
                  minWidth: 44,
                }}
              >
                <LogoutRounded />
              </ListItemIcon>

              <ListItemText
                primary="Logout"
                primaryTypographyProps={{
                  fontWeight: 700,
                  color: "#EF4444",
                }}
              />

            </ListItemButton>

          </motion.div>

        </Box>

      </Box>

    </motion.div>

  );

}