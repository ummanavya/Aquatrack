import React, { useState } from "react";
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

import {
  Box,
  Grid,
  Stack,
  Container,
} from "@mui/material";

export default function ResidentDashboard() {

  const [mobileOpen, setMobileOpen] = useState(false);

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
                    <RecentBills bills={[]} />
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

      </Box>

    </Box>

  );

}