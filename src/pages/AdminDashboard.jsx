import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";

import DashboardLayout from "../components/DashboardLayout";
import KPICards from "../components/KPICards";
import WaterAnalytics from "../components/WaterAnalytics";
import RecentActivity from "../components/RecentActivity";
import QuickActions from "../components/QuickActions";
import RecentBills from "../components/RecentBills";
import ActiveAlerts from "../components/ActiveAlerts";
import api from "../services/api";
import "../styles/dashboard.css";

export default function AdminDashboard() {
  const [apartments, setApartments] = useState([]);
  const [households, setHouseholds] = useState([]);
  const [bills, setBills] = useState([]);
  const [alerts, setAlerts] = useState([]);

  const username = localStorage.getItem("username") || "Administrator";

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const [apartmentsRes, householdsRes, billsRes, alertsRes] =
        await Promise.all([
          api.get("/api/apartments"),
          api.get("/api/households"),
          api.get("/api/billing-cycles"),
          api.get("/api/alerts"),
        ]);

      setApartments(apartmentsRes.data || []);
      setHouseholds(householdsRes.data || []);
      setBills(billsRes.data || []);
      setAlerts(alertsRes.data || []);
    } catch (error) {
      console.error("Failed to load dashboard data:", error);
    }
  };

  const cards = [
    { title: "Water Usage", value: "1685.78 KL", icon: "💧", color: "#1976D2" },
    { title: "Revenue", value: "₹34,628", icon: "₹", color: "#16A34A" },
    { title: "Apartments", value: apartments.length, icon: "🏢", color: "#F59E0B" },
    { title: "Leak Alerts", value: alerts.length, icon: "⚠", color: "#DC2626" },
  ];

  return (
    <DashboardLayout>
      <Box className="dashboard-page">
        {/* HERO */}
        <Box className="dashboard-hero">
          <Typography className="hero-title">
            Good Morning, {username} 👋
          </Typography>

          <Typography className="hero-subtitle">
            Welcome back to AquaTrack Dashboard
          </Typography>

          <Typography className="hero-text">
            Monitor apartments, households, billing, water consumption,
            revenue and alerts from one intelligent dashboard.
          </Typography>
        </Box>

        {/* KPI CARDS */}
        <Box sx={{ mt: 3 }}>
          <KPICards cards={cards} />
        </Box>

        {/* ANALYTICS + ACTIVITY */}
        {/* WaterAnalytics is now the larger column (6.5/12) since it's
            the primary visual/data element; RecentActivity takes the rest. */}
        <Grid container spacing={3} className="dashboard-row">
          <Grid item xs={12} lg={6.5}>
            <WaterAnalytics />
          </Grid>

          <Grid item xs={12} lg={5.5}>
            <RecentActivity alerts={alerts} />
          </Grid>
        </Grid>

        {/* QUICK ACTIONS */}
        <Box className="dashboard-row">
          <QuickActions />
        </Box>

        {/* BILL + ALERT */}
        <Grid container spacing={3} className="dashboard-row">
          <Grid item xs={12} lg={7}>
            <RecentBills bills={bills} />
          </Grid>

          <Grid item xs={12} lg={5}>
            <ActiveAlerts alerts={alerts} />
          </Grid>
        </Grid>
      </Box>
    </DashboardLayout>
  );
}