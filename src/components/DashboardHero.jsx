import React from "react";
import { Box, Typography, Button } from "@mui/material";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";

import "../styles/hero.css";

export default function DashboardHero() {

  const username =
    localStorage.getItem("username") || "Navya";

  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 17
      ? "Good Afternoon"
      : "Good Evening";

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Box className="hero">

      <Box>

        <Typography className="hero-title">
          {greeting}, {username} 👋
        </Typography>

        <Typography className="hero-subtitle">
          Smart Apartment Water Management Dashboard
        </Typography>

        <Typography className="hero-text">
          Monitor water consumption, billing,
          apartments, households and alerts
          from one dashboard.
        </Typography>

        <Box className="hero-date">

          <CalendarTodayRoundedIcon
            fontSize="small"
          />

          <span>{today}</span>

        </Box>

      </Box>

      <Button
        variant="contained"
        startIcon={<DownloadRoundedIcon />}
        className="download-btn"
      >
        Download Report
      </Button>

    </Box>
  );

}