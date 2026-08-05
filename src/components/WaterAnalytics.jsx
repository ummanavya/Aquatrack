import React from "react";

import { Typography } from "@mui/material";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "../styles/waterAnalytics.css";

export default function WaterAnalytics() {
  const data = [
    { month: "Jan", usage: 240 },
    { month: "Feb", usage: 310 },
    { month: "Mar", usage: 420 },
    { month: "Apr", usage: 380 },
    { month: "May", usage: 520 },
    { month: "Jun", usage: 480 },
  ];

  return (
    <div className="analytics-card">
      <Typography className="analytics-title">
        💧 Water Usage Analytics
      </Typography>

      <Typography className="chart-title">💧 Monthly Water Usage</Typography>

      <div className="chart-box">
        {/* height="100%" so the chart fills whatever space .chart-box
            has (via flex:1 in the CSS) instead of a fixed px value
            that clips when the parent card is height-constrained */}
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="usage" fill="#1976D2" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}