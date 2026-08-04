import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import api from "../services/api";

import {
  Box,
  Typography,
  Button,
  Stack,
  Chip,
} from "@mui/material";

import {
  WaterDropRounded,
  ReceiptLongRounded,
  ArrowForwardRounded,
} from "@mui/icons-material";

export default function ResidentHero() {

  const [profile, setProfile] = useState({
    username: "",
  });

  const [dashboard, setDashboard] = useState({
    todayUsage: 0,
    billAmount: 0,
  });

  useEffect(() => {
    loadResidentData();
  }, []);

  const loadResidentData = async () => {

    try {

      const profileResponse = await api.get("/api/resident/profile");
      const dashboardResponse = await api.get("/api/resident/dashboard");

      setProfile(profileResponse.data);
      setDashboard(dashboardResponse.data);

    } catch (error) {
      console.error("Error loading resident data:", error);
    }
  };

  return (

    <motion.div
      initial={{
        opacity: 0,
        y: -40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
    >

      <Box
        sx={{
          position: "relative",
          overflow: "hidden",

          background:
            "linear-gradient(135deg,#1565C0 0%,#1976D2 45%,#42A5F5 100%)",

          borderRadius: "34px",

          boxShadow:
            "0 30px 70px rgba(25,118,210,.25)",

          p: {
            xs: 3,
            sm: 4,
            md: 5,
          },

          color: "#FFFFFF",

          display: "flex",

          flexDirection: {
            xs: "column",
            lg: "row",
          },

          justifyContent: "space-between",

          alignItems: "center",

          gap: 5,
        }}
      >

        {/* Background Effects */}

        <Box
          sx={{
            position: "absolute",
            width: 380,
            height: 380,
            borderRadius: "50%",
            bgcolor: "rgba(255,255,255,.08)",
            top: -170,
            right: -120,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: 220,
            height: 220,
            borderRadius: "50%",
            bgcolor: "rgba(255,255,255,.05)",
            bottom: -90,
            left: -70,
          }}
        />

        {/* Left Side */}

        <Box
          sx={{
            width: {
              xs: "100%",
              lg: "58%",
            },

            zIndex: 2,
          }}
        >

          <Chip
            label="Resident Dashboard"

            sx={{
              bgcolor: "rgba(255,255,255,.18)",
              color: "#FFFFFF",
              fontWeight: 700,
              mb: 3,
            }}
          />

          <Typography
            sx={{
              fontSize: {
                xs: 30,
                sm: 40,
                md: 50,
              },

              fontWeight: 900,

              lineHeight: 1.15,

              mb: 2,
            }}
          >

            Good Morning, {profile.username || "Resident"} 👋

          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: 15,
                md: 18,
              },

              lineHeight: 1.9,

              opacity: .96,

              maxWidth: 650,

              mb: 4,
            }}
          >

            Welcome back to AquaTrack.

            Monitor your water usage,
            manage bills,
            receive intelligent notifications,
            track your Eco Score,
            and save more water every month.

          </Typography>

          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
            spacing={2}
          >

            <Button
              variant="contained"

              startIcon={<WaterDropRounded />}

              endIcon={<ArrowForwardRounded />}

              sx={{

                bgcolor: "#0F172A",

                color: "#FFFFFF",

                px: 4,

                py: 1.6,

                borderRadius: "16px",

                fontWeight: 800,

                textTransform: "none",

                fontSize: 15,

                boxShadow:
                  "0 15px 35px rgba(15,23,42,.30)",

                "&:hover": {

                  bgcolor: "#1E293B",

                  transform: "translateY(-3px)",

                },
              }}
            >

              View Water Usage

            </Button>

            <Button
              variant="outlined"

              startIcon={<ReceiptLongRounded />}

              sx={{

                borderWidth: 2,

                borderColor: "#FFFFFF",

                color: "#FFFFFF",

                px: 4,

                py: 1.6,

                borderRadius: "16px",

                fontWeight: 700,

                textTransform: "none",

                "&:hover": {

                  borderWidth: 2,

                  bgcolor: "rgba(255,255,255,.12)",

                  borderColor: "#FFFFFF",

                },
              }}
            >

              Pay Current Bill

            </Button>

          </Stack>

        </Box>

        {/* Right Side */}

        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: "100%",
            maxWidth: "420px",
          }}
        >

          <Box
            sx={{
              width: "100%",

              minHeight: {
                xs: 260,
                md: 320,
              },

              borderRadius: "28px",

              bgcolor: "rgba(255,255,255,.18)",

              backdropFilter: "blur(22px)",

              border: "1px solid rgba(255,255,255,.25)",

              p: 4,

              display: "flex",

              flexDirection: "column",

              justifyContent: "space-between",

              boxShadow:
                "0 25px 60px rgba(0,0,0,.20)",

              position: "relative",

              zIndex: 2,
            }}
          >

            <Typography
              sx={{
                fontSize: 24,
                fontWeight: 800,
                mb: 2,
              }}
            >
              Today's Overview
            </Typography>

            <Stack spacing={3}>

              <Box
                sx={{
                  p: 2,
                  borderRadius: "18px",
                  bgcolor: "rgba(255,255,255,.12)",
                }}
              >

                <Typography
                  sx={{
                    opacity: .9,
                    fontSize: 15,
                  }}
                >
                  💧 Water Used Today
                </Typography>

                <Typography
                  sx={{
                    mt: 1,
                    fontSize: 34,
                    fontWeight: 900,
                  }}
                >
                  {dashboard.todayUsage} Litres
                </Typography>

              </Box>

              <Box
                sx={{
                  p: 2,
                  borderRadius: "18px",
                  bgcolor: "rgba(255,255,255,.12)",
                }}
              >

                <Typography
                  sx={{
                    opacity: .9,
                    fontSize: 15,
                  }}
                >
                  💰 Current Bill
                </Typography>

                <Typography
                  sx={{
                    mt: 1,
                    fontSize: 34,
                    fontWeight: 900,
                  }}
                >
                  ₹{dashboard.billAmount}
                </Typography>

              </Box>

            </Stack>

            <Chip
              label="Saving 18% More Water Than Last Month 🎉"
              sx={{
                mt: 3,
                alignSelf: "flex-start",
                bgcolor: "#16A34A",
                color: "#FFFFFF",
                fontWeight: 800,
                px: 1,
              }}
            />

          </Box>

        </motion.div>

      </Box>

    </motion.div>

  );

}