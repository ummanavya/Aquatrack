import React from "react";

import {
  Paper,
  Typography,
  Box,
  LinearProgress,
} from "@mui/material";

import {
  ApartmentRounded,
  GroupsRounded,
  WaterDropRounded,
  CurrencyRupeeRounded,
} from "@mui/icons-material";

import "../styles/systemOverview.css";

export default function SystemOverview({
  apartments = 0,
  households = 0,
  waterUsage = 0,
  revenue = 0,
}) {

  const items = [
    {
      title: "Apartments",
      value: apartments,
      progress: Math.min(apartments * 5, 100),
      icon: <ApartmentRounded />,
      color: "#1976D2",
    },
    {
      title: "Households",
      value: households,
      progress: Math.min(households * 2, 100),
      icon: <GroupsRounded />,
      color: "#43A047",
    },
    {
      title: "Water Usage",
      value: `${waterUsage} KL`,
      progress: 72,
      icon: <WaterDropRounded />,
      color: "#00ACC1",
    },
    {
      title: "Revenue",
      value: `₹ ${revenue}`,
      progress: 85,
      icon: <CurrencyRupeeRounded />,
      color: "#FB8C00",
    },
  ];

  return (
    <Paper className="overview-card" elevation={0}>

      <Typography className="overview-title">
        System Overview
      </Typography>

      <Typography className="overview-subtitle">
        Current platform statistics
      </Typography>

      <Box sx={{ mt: 3 }}>

        {items.map((item) => (

          <Box
            key={item.title}
            className="overview-item"
          >

            <Box className="overview-top">

              <Box
                className="overview-icon"
                sx={{
                  background: item.color,
                }}
              >
                {item.icon}
              </Box>

              <Typography className="overview-value">
                {item.value}
              </Typography>

            </Box>

            <Typography className="overview-name">
              {item.title}
            </Typography>

            <LinearProgress
              variant="determinate"
              value={item.progress}
              sx={{
                mt: 1.5,
                height: 8,
                borderRadius: 10,
              }}
            />

          </Box>

        ))}

      </Box>

    </Paper>
  );

}