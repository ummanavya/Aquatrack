import React, { useEffect, useState } from "react";

import {
  Box,
  Grid,
  Typography,
  Paper,
  Avatar,
  Button,
  Stack,
  Chip,
  Divider,
} from "@mui/material";

import {
  Apartment,
  Groups,
  WaterDrop,
  CurrencyRupee,
  ReceiptLong,
  ReportProblem,
  Assessment,
} from "@mui/icons-material";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import WaterUsageChart from "../components/WaterUsageChart";
import RecentBills from "../components/RecentBills";
import ActiveAlerts from "../components/ActiveAlerts";

import KPICards from "../components/KPICards";
import SystemHealth from "../components/SystemHealth";
import AnalyticsDashboard from "../components/AnalyticsDashboard";
import ActivityTimeline from "../components/ActivityTimeline";

import api from "../services/api";

import "../styles/dashboard.css";

export default function AdminDashboard() {

    const [apartments, setApartments] = useState([]);
    const [households, setHouseholds] = useState([]);
    const [bills, setBills] = useState([]);
    const [alerts, setAlerts] = useState([]);

    const [usage, setUsage] = useState(0);
    const [revenue, setRevenue] = useState(0);

    const username =
        localStorage.getItem("username") || "Administrator";

    useEffect(() => {
        loadDashboard();
    }, []);

    const loadDashboard = async () => {

        try {

            const [
                apartmentRes,
                householdRes,
                billRes,
                alertRes,
            ] = await Promise.all([
                api.get("/api/apartments"),
                api.get("/api/households"),
                api.get("/api/billing-cycles"),
                api.get("/api/alerts"),
            ]);

            setApartments(apartmentRes.data || []);
            setHouseholds(householdRes.data || []);
            setBills(billRes.data || []);
            setAlerts(alertRes.data || []);

            let totalUsage = 0;
            let totalRevenue = 0;

            (billRes.data || []).forEach((bill) => {

                totalUsage += Number(bill.unitsConsumed || 0);

                totalRevenue += Number(bill.totalAmount || 0);

            });

            setUsage(totalUsage);
            setRevenue(totalRevenue);

        } catch (error) {

            console.error("Dashboard loading failed", error);

        }

    };
        const greeting = () => {

        const hour = new Date().getHours();

        if (hour < 12) return "Good Morning";

        if (hour < 17) return "Good Afternoon";

        return "Good Evening";

    };

    /* =====================================================
       HERO STATISTICS
    ===================================================== */

    const heroStats = [

        {
            title: "Apartments",
            value: apartments.length,
            icon: <Apartment />,
            color: "blue",
        },

        {
            title: "Households",
            value: households.length,
            icon: <Groups />,
            color: "green",
        },

        {
            title: "Water Usage",
            value: `${usage.toFixed(2)} KL`,
            icon: <WaterDrop />,
            color: "cyan",
        },

        {
            title: "Revenue",
            value: `₹${revenue.toLocaleString()}`,
            icon: <CurrencyRupee />,
            color: "orange",
        },

        {
            title: "Bills",
            value: bills.length,
            icon: <ReceiptLong />,
            color: "purple",
        },

        {
            title: "Alerts",
            value: alerts.length,
            icon: <ReportProblem />,
            color: "red",
        }

    ];

    /* =====================================================
       QUICK ACTIONS
    ===================================================== */

    const quickActions = [

        {
            title: "Add Apartment",
            icon: <Apartment />,
            description: "Register a new apartment"
        },

        {
            title: "Add Household",
            icon: <Groups />,
            description: "Create a household"
        },

        {
            title: "Record Usage",
            icon: <WaterDrop />,
            description: "Update water meter reading"
        },

        {
            title: "Generate Bill",
            icon: <CurrencyRupee />,
            description: "Generate monthly bill"
        },

        {
            title: "Leak Alerts",
            icon: <ReportProblem />,
            description: "View detected leaks"
        },

        {
            title: "Reports",
            icon: <Assessment />,
            description: "Download reports"
        }

    ];

    /* =====================================================
       START JSX
    ===================================================== */

    return (

        <>

            <div className="dashboard-layout">

                <Navbar />

                <Sidebar />

                <Box className="dashboard-content">
                  {/* ================= HERO SECTION ================= */}

<Paper className="hero-block" elevation={0}>

    <Box className="hero-top">

        <Box className="hero-left">

            <Chip
                label="💧 AquaTrack Dashboard"
                className="hero-chip"
                color="primary"
            />

            <Typography className="hero-title">

                {greeting()}, {username} 👋

            </Typography>

            <Typography className="hero-subtitle">

                Welcome to AquaTrack Smart Water Tracking &
                Billing Management System.

                Monitor apartment water usage, billing,
                leak alerts, analytics and overall system
                performance from one centralized dashboard.

            </Typography>

        </Box>

        <Stack
            direction="row"
            spacing={2}
            className="hero-actions"
        >

            <Button
                variant="contained"
                size="large"
                className="hero-btn-primary"
            >
                Generate Report
            </Button>

            <Button
                variant="outlined"
                size="large"
                className="hero-btn-outline"
            >
                View Analytics
            </Button>

        </Stack>

    </Box>

    <Divider className="hero-divider" />

    <Grid
        container
        spacing={3}
        mt={1}
    >

        {heroStats.map((item, index) => (

            <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={2}
                key={index}
            >

                <Paper
                    elevation={0}
                    className="hero-stat"
                >

                    <Avatar
                        className={`hero-stat-icon tone-${item.color}`}
                    >

                        {item.icon}

                    </Avatar>

                    <Typography
                        className="hero-stat-value"
                    >
                        {item.value}
                    </Typography>

                    <Typography
                        className="hero-stat-label"
                    >
                        {item.title}
                    </Typography>

                </Paper>

            </Grid>

        ))}

    </Grid>

</Paper>
{/* ================= MAIN DASHBOARD ================= */}

<Grid
    container
    spacing={3}
    sx={{ mt: 2 }}
>

    {/* ================= KPI CARDS ================= */}

    <Grid item xs={12}>

        <KPICards />

    </Grid>

    {/* ================= SYSTEM HEALTH ================= */}

    <Grid item xs={12}>

        <SystemHealth />

    </Grid>

    {/* ================= WATER USAGE ================= */}

    <Grid item xs={12} lg={8}>

        <Paper className="dashboard-card">

            <Box className="card-header">

                <Box>

                    <Typography className="card-title">

                        Water Usage Analytics

                    </Typography>

                    <Typography className="card-subtitle">

                        Monthly water consumption across apartments

                    </Typography>

                </Box>

                <Chip
                    label="Live Data"
                    className="live-chip"
                    color="success"
                />

            </Box>

            <Box
                sx={{
                    height: 420,
                    mt: 2
                }}
            >

                <WaterUsageChart />

            </Box>

        </Paper>

    </Grid>

    {/* ================= RECENT ACTIVITY ================= */}

    <Grid item xs={12} lg={4}>

        <Paper
            className="dashboard-card"
            sx={{
                height: "100%"
            }}
        >

            <Box className="card-header">

                <Typography className="card-title">

                    Recent Activity

                </Typography>

            </Box>

            <ActivityTimeline />

        </Paper>

    </Grid>
        {/* ================= QUICK ACTIONS ================= */}

    <Grid item xs={12}>

        <Paper className="dashboard-card">

            <Box className="card-header">

                <Box>

                    <Typography className="card-title">

                        Quick Actions

                    </Typography>

                    <Typography className="card-subtitle">

                        Frequently used operations for administrators

                    </Typography>

                </Box>

            </Box>

            <Grid container spacing={3} mt={1}>

                {quickActions.map((action, index) => (

                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        lg={2}
                        key={index}
                    >

                        <Button
                            fullWidth
                            variant="outlined"
                            className="quick-action-tile"
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                p: 3,
                                minHeight: 140,
                                borderRadius: 3,
                                textTransform: "none",
                            }}
                        >

                            <Avatar
                                className={`quick-action-icon tone-${heroStats[index].color}`}
                                sx={{
                                    width: 60,
                                    height: 60,
                                    mb: 2,
                                }}
                            >
                                {action.icon}
                            </Avatar>

                            <Typography
                                fontWeight={700}
                                align="center"
                            >
                                {action.title}
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                                align="center"
                                mt={1}
                            >
                                {action.description}
                            </Typography>

                        </Button>

                    </Grid>

                ))}

            </Grid>

        </Paper>

    </Grid>

    {/* ================= ADVANCED ANALYTICS ================= */}

    <Grid item xs={12}>

        <Paper className="dashboard-card">

            <Box className="card-header">

                <Box>

                    <Typography className="card-title">

                        Advanced Analytics

                    </Typography>

                    <Typography className="card-subtitle">

                        Revenue, Water Distribution and Weekly Consumption

                    </Typography>

                </Box>

                <Chip
                    label="AI Insights"
                    color="primary"
                />

            </Box>

            <Box mt={3}>

                <AnalyticsDashboard />

            </Box>

        </Paper>

    </Grid>
        {/* ================= RECENT BILLS ================= */}

    <Grid item xs={12} lg={8}>

        <Paper className="dashboard-card">

            <Box className="card-header">

                <Box>

                    <Typography className="card-title">

                        Recent Bills

                    </Typography>

                    <Typography className="card-subtitle">

                        Latest billing records

                    </Typography>

                </Box>

                <Button
                    variant="text"
                    className="text-link-btn"
                >
                    View All
                </Button>

            </Box>

            <RecentBills bills={bills} />

        </Paper>

    </Grid>

    {/* ================= ACTIVE ALERTS ================= */}

    <Grid item xs={12} lg={4}>

        <Paper
            className="dashboard-card"
            sx={{ height: "100%" }}
        >

            <Box className="card-header">

                <Typography className="card-title">

                    Active Alerts

                </Typography>

                <Chip
                    color="error"
                    label={`${alerts.length} Active`}
                />

            </Box>

            <Box mt={2}>

                <ActiveAlerts alerts={alerts} />

            </Box>

        </Paper>

    </Grid>

    {/* ================= SYSTEM OVERVIEW ================= */}

    <Grid item xs={12}>

        <Paper className="overview-strip">

            <Grid container spacing={3}>

                <Grid item xs={6} md={2.4}>

                    <Typography className="overview-value">

                        {apartments.length}

                    </Typography>

                    <Typography className="overview-label">

                        Apartments

                    </Typography>

                </Grid>

                <Grid item xs={6} md={2.4}>

                    <Typography className="overview-value">

                        {households.length}

                    </Typography>

                    <Typography className="overview-label">

                        Households

                    </Typography>

                </Grid>

                <Grid item xs={6} md={2.4}>

                    <Typography className="overview-value">

                        {usage.toFixed(2)} KL

                    </Typography>

                    <Typography className="overview-label">

                        Water Usage

                    </Typography>

                </Grid>

                <Grid item xs={6} md={2.4}>

                    <Typography className="overview-value">

                        ₹{revenue.toLocaleString()}

                    </Typography>

                    <Typography className="overview-label">

                        Revenue

                    </Typography>

                </Grid>

                <Grid item xs={6} md={2.4}>

                    <Typography className="overview-value">

                        {alerts.length}

                    </Typography>

                    <Typography className="overview-label">

                        Alerts

                    </Typography>

                </Grid>

            </Grid>

        </Paper>

    </Grid>

    {/* ================= FOOTER ================= */}

    <Grid item xs={12}>

        <Typography
            className="dashboard-footer"
            align="center"
        >

            © 2026 AquaTrack — Smart Water Tracking & Billing Management System

        </Typography>

    </Grid>

</Grid>

</Box>

</div>

</>

);

}