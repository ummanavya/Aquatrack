import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import ResidentSidebar from "../components/ResidentSidebar";
import ResidentTopbar from "../components/ResidentTopbar";
import ResidentHero from "../components/ResidentHero";
import ResidentStats from "../components/ResidentStats";
import UsageChart from "../components/UsageChart";
import RecentBills from "../components/RecentBills";
import NotificationsPanel from "../components/NotificationsPanel";
import EcoImpact from "../components/EcoImpact";
import SmartTips from "../components/SmartTips";
import CommunitySpotlight from "../components/CommunitySpotlight";
import api from "../services/api";

import {
  Box,
  Grid,
  Stack,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
  Typography,
  Button,
} from "@mui/material";

export default function ResidentDashboard() {

  const [mobileOpen, setMobileOpen] = useState(false);
  const [bills, setBills] = useState([]);

const [selectedBill, setSelectedBill] = useState(null);

const [openBillDialog, setOpenBillDialog] = useState(false);

useEffect(() => {
  loadBills();
}, []);

const loadBills = async () => {
  try {
    const householdId = localStorage.getItem("householdId") || 1;

    console.log("Household ID:", householdId);

    const response = await api.get(
      `/api/billing-cycles/household/${householdId}`
    );

    console.log("Bills:", response.data);

    setBills(response.data);

  } catch (err) {
    console.error("Billing Error:", err);
  }
};

const downloadInvoice = async () => {
  if (!selectedBill) return;

  try {

    const response = await api.get(
      `/api/invoices/${selectedBill.id}`,
      {
        responseType: "blob",
      }
    );

    const file = new Blob([response.data], {
      type: "application/pdf",
    });

    const url = window.URL.createObjectURL(file);

    const link = document.createElement("a");

    link.href = url;
    link.download = `Invoice_${selectedBill.id}.pdf`;

    document.body.appendChild(link);

    link.click();

    link.remove();

    window.URL.revokeObjectURL(url);

  } catch (err) {

    console.error(err);

    alert("Download Failed");

  }
};

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (

    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "#F5F9FF",
        overflowX: "hidden",
      }}
    >

      {/* ================= Sidebar ================= */}
<ResidentSidebar
    mobileOpen={mobileOpen}
    handleDrawerToggle={handleDrawerToggle}
/>

      {/* ================= Main Content ================= */}

    <Box
  sx={{
    flex: 1,

    ml: {
      xs: 0,
      md: 0,
      lg: "260px",
    },

    width: {
      xs: "100%",
      md: "100%",
      lg: "calc(100% - 260px)",
    },

    display: "flex",
    flexDirection: "column",
  }}
>

       <ResidentTopbar
    handleDrawerToggle={handleDrawerToggle}
/>

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: .6,
          }}
        >

<Container
  maxWidth={false}
  sx={{
    mt: {
      xs: "72px",
      sm: "80px",
      md: "92px",
    },

    pb: 5,

    px: {
      xs: 1.5,
      sm: 2,
      md: 3,
      lg: 5,
    },

    maxWidth: "1650px",

    mx: "auto",
  }}
>
                        {/* ================= Hero ================= */}

            <ResidentHero />

            <Box sx={{ height: 32 }} />

            {/* ================= Stats ================= */}

            <Box
              sx={{
                width: "100%",
              }}
            >
              <ResidentStats />
            </Box>

            <Box sx={{ height: 36 }} />

            {/* ================= Dashboard Grid ================= */}

        <Grid
container
spacing={{
    xs:2,
    md:3,
    lg:4
}}
              alignItems="stretch"
            >

              {/* ================= Left Side ================= */}

              <Grid
                item
                xs={12}
                lg={8}
              >

              <Stack
spacing={{
    xs:2,
    md:3,
    lg:4
}}
>

                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .5 }}
                  >
                    <UsageChart />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: .1 }}
                  >
                    <RecentBills
  bills={bills}
  onViewBill={(bill) => {
    setSelectedBill(bill);
    setOpenBillDialog(true);
  }}
/>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: .2 }}
                  >
                    <SmartTips />
                  </motion.div>

                </Stack>

              </Grid>

              {/* ================= Right Side ================= */}

              <Grid
                item
                xs={12}
                lg={4}
              >

                <Stack
spacing={{
    xs:2,
    md:3,
    lg:4
}}
>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .5 }}
                  >
                    <NotificationsPanel />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: .1 }}
                  >
                    <EcoImpact />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: .2 }}
                  >
                    <CommunitySpotlight />
                  </motion.div>

                </Stack>

              </Grid>

            </Grid>
                      </Container>

        </motion.div>
        <Dialog
  open={openBillDialog}
  onClose={() => setOpenBillDialog(false)}
  maxWidth="sm"
  fullWidth
>
  <DialogTitle
    sx={{
      fontWeight: 800,
      fontSize: 24,
      color: "#1976D2",
    }}
  >
    Water Bill Details
  </DialogTitle>

  <DialogContent dividers>

    {selectedBill && (

      <>
        <Typography sx={{ mb: 2 }}>
          <strong>Household:</strong>{" "}
          {selectedBill.household?.householdNumber}
        </Typography>

        <Typography sx={{ mb: 2 }}>
          <strong>Billing Period:</strong><br />
          {selectedBill.cycleStartDate} -
          {" "}
          {selectedBill.cycleEndDate}
        </Typography>

        <Typography sx={{ mb: 2 }}>
          <strong>Water Usage:</strong>{" "}
          {selectedBill.unitsConsumed} Units
        </Typography>

        <Typography sx={{ mb: 2 }}>
          <strong>Total Amount:</strong>{" "}
          ₹{selectedBill.totalAmount}
        </Typography>

        <Typography sx={{ mb: 2 }}>
          <strong>Status:</strong>{" "}
          {selectedBill.status}
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography color="text.secondary">
          Invoice generated by AquaTrack Water
          Management System.
        </Typography>

      </>

    )}

  </DialogContent>

  <DialogActions>

    <Button
      onClick={() => setOpenBillDialog(false)}
    >
      Close
    </Button>

    <Button
      variant="contained"
      onClick={downloadInvoice}
    >
      Download PDF
    </Button>

  </DialogActions>

</Dialog>

      </Box>

    </Box>

  );

}