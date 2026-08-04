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
  FormControl,
  Select,
} from "@mui/material";

import {
  Search,
  NotificationsNone,
  AccountCircle,
  Logout,
  Settings,
  Language,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";
import i18n from "../i18n";

export default function Navbar() {
  const navigate = useNavigate();

  const { t } = useTranslation();

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

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const today = new Date().toLocaleDateString(i18n.language === "en" ? "en-IN" : undefined, {
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
            {t("dashboardTitle")}
          </Typography>

          <Typography className="navbar-date">
            {today}
          </Typography>
        </Box>

        <Box className="navbar-center">
          <TextField
            placeholder={t("search")}
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

        <Box
          className="navbar-right"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          {/* Language Selector */}

          <FormControl size="small">
            <Select
              value={i18n.language}
              onChange={(e) => changeLanguage(e.target.value)}
              startAdornment={<Language sx={{ mr: 1 }} />}
              sx={{
                minWidth: 130,
                height: 40,
              }}
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="hi">हिन्दी</MenuItem>
              <MenuItem value="te">తెలుగు</MenuItem>
              <MenuItem value="ta">தமிழ்</MenuItem>
            </Select>
          </FormControl>

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
              {t("settings")}
            </MenuItem>

            <MenuItem onClick={logout}>
              <Logout sx={{ mr: 1 }} />
              {t("logout")}
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}