import React from "react";
import {
  Drawer,
  Toolbar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Divider,
} from "@mui/material";

import {
  Dashboard,
  Apartment,
  Groups,
  WaterDrop,
  ReceiptLong,
  WarningAmber,
  Analytics,
  Settings,
  Logout,
} from "@mui/icons-material";

import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 260;

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    {
      text: "Dashboard",
      icon: <Dashboard />,
      path: "/admin-dashboard",
    },
    {
      text: "Apartments",
      icon: <Apartment />,
      path: "/apartments",
    },
    {
      text: "Households",
      icon: <Groups />,
      path: "/households",
    },
    {
      text: "Water Usage",
      icon: <WaterDrop />,
      path: "/water-usage",
    },
    {
      text: "Billing",
      icon: <ReceiptLong />,
      path: "/billing",
    },
    {
      text: "Alerts",
      icon: <WarningAmber />,
      path: "/alerts",
    },
    {
      text: "Analytics",
      icon: <Analytics />,
      path: "/analytics",
    },
    {
      text: "Settings",
      icon: <Settings />,
      path: "/settings",
    },
  ];

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <Drawer
    ModalProps={{
        disableScrollLock: true,
    }}
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,

        "& .MuiDrawer-paper": {
          width: drawerWidth,
          background:
            "linear-gradient(180deg,#1e40af,#0284c7)",
          color: "white",
          borderRight: "none",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Toolbar />

      <Box sx={{ p: 3 }}>
        <Typography
          sx={{
            fontSize: 26,
            fontWeight: 800,
            letterSpacing: 1,
          }}
        >
          AquaTrack
        </Typography>

        <Typography
          sx={{
            opacity: 0.8,
            mt: 1,
            fontSize: 13,
          }}
        >
          Smart Water Management
        </Typography>
      </Box>

      <Divider
        sx={{
          borderColor: "rgba(255,255,255,.15)",
        }}
      />

      <List sx={{ px: 2, mt: 2, flexGrow: 1 }}>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.text}
            onClick={() => navigate(item.path)}
            selected={location.pathname === item.path}
            sx={{
              borderRadius: 3,
              mb: 1,

              "&.Mui-selected": {
                background: "rgba(255,255,255,.20)",
              },

              "&:hover": {
                background: "rgba(255,255,255,.12)",
              },
            }}
          >
            <ListItemIcon
              sx={{
                color: "white",
                minWidth: 42,
              }}
            >
              {item.icon}
            </ListItemIcon>

            <ListItemText
              primary={item.text}
              primaryTypographyProps={{
                fontWeight: 600,
              }}
            />
          </ListItemButton>
        ))}
      </List>

      <Divider
        sx={{
          borderColor: "rgba(255,255,255,.15)",
        }}
      />

      <Box sx={{ p: 2 }}>
        <ListItemButton
          onClick={logout}
          sx={{
            borderRadius: 3,

            "&:hover": {
              background: "#dc2626",
            },
          }}
        >
          <ListItemIcon sx={{ color: "white" }}>
            <Logout />
          </ListItemIcon>

          <ListItemText
            primary="Logout"
            primaryTypographyProps={{
              fontWeight: 700,
            }}
          />
        </ListItemButton>
      </Box>
    </Drawer>
  );
}

export default Sidebar;