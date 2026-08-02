import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Box,
  TextField,
  InputAdornment,
} from "@mui/material";

import {
  Search,
  NotificationsNone,
  AccountCircle,
  Logout,
  Settings,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const username = localStorage.getItem("username") || "Administrator";

  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <AppBar className="top-navbar" elevation={0}>
      <Toolbar className="navbar-toolbar">
        <Box className="navbar-left">
          <Typography className="navbar-title">
            AquaTrack Dashboard
          </Typography>

          <Typography className="navbar-date">
            {today}
          </Typography>
        </Box>

        <Box className="navbar-center">
          <TextField
            placeholder="Search apartments, households..."
            size="small"
            className="navbar-search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box className="navbar-right">
          <IconButton>
            <Badge badgeContent={4} color="error">
              <NotificationsNone />
            </Badge>
          </IconButton>

          <IconButton onClick={handleOpen}>
            <Avatar
              sx={{
                bgcolor: "#2563eb",
                width: 42,
                height: 42,
              }}
            >
              {username.charAt(0).toUpperCase()}
            </Avatar>
          </IconButton>

          <Menu
    disableScrollLock
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem disabled>
              <AccountCircle sx={{ mr: 1 }} />
              {username}
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <Settings sx={{ mr: 1 }} />
              Settings
            </MenuItem>

            <MenuItem onClick={logout}>
              <Logout sx={{ mr: 1 }} />
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}