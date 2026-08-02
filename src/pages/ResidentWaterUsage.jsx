import React from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import WaterDropRoundedIcon from "@mui/icons-material/WaterDropRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import EmojiNatureRoundedIcon from "@mui/icons-material/EmojiNatureRounded";

import ResidentSidebar from "../components/ResidentSidebar";
import ResidentTopbar from "../components/ResidentTopbar";
import UsageChart from "../components/UsageChart";

const summaryCards = [
  {
    title: "Today's Usage",
    value: "320 L",
    subtitle: "+12% from yesterday",
    color: "#1976D2",
    icon: <WaterDropRoundedIcon fontSize="large" />,
  },
  {
    title: "Weekly Average",
    value: "415 L",
    subtitle: "Average per day",
    color: "#16A34A",
    icon: <TrendingUpRoundedIcon fontSize="large" />,
  },
  {
    title: "Monthly Usage",
    value: "12.45 KL",
    subtitle: "Current month",
    color: "#FB8C00",
    icon: <CalendarMonthRoundedIcon fontSize="large" />,
  },
  {
    title: "Water Saving",
    value: "92%",
    subtitle: "Excellent",
    color: "#8E24AA",
    icon: <EmojiNatureRoundedIcon fontSize="large" />,
  },
];

export default function ResidentWaterUsage() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        background:
          "linear-gradient(180deg,#EEF5FF 0%,#F7FAFF 50%,#FFFFFF 100%)",
      }}
    >
      <ResidentSidebar />

      <Box
        sx={{
          flex: 1,
          ml: {
            lg: "260px",
          },
        }}
      >
        <ResidentTopbar />

        <Container
          maxWidth={false}
          sx={{
            mt: "90px",
            px: {
              xs: 2,
              md: 4,
              lg: 5,
            },
            pb: 5,
          }}
        >
          {/* HERO */}

          <Paper
            elevation={0}
            sx={{
              mb: 4,
              p: 4,
              borderRadius: "28px",
              color: "#fff",
              overflow: "hidden",
              position: "relative",
              background:
                "linear-gradient(135deg,#1565C0 0%,#1E88E5 45%,#42A5F5 100%)",
              boxShadow: "0 20px 40px rgba(21,101,192,.20)",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: 260,
                height: 260,
                borderRadius: "50%",
                bgcolor: "rgba(255,255,255,.08)",
                right: -80,
                top: -120,
              }}
            />

            <Typography
              sx={{
                fontSize: {
                  xs: 30,
                  md: 40,
                },
                fontWeight: 800,
              }}
            >
              💧 Water Usage Dashboard
            </Typography>

            <Typography
              sx={{
                mt: 1,
                opacity: .9,
                fontSize: 18,
              }}
            >
              Monitor and analyse your daily, weekly and monthly
              water consumption.
            </Typography>
          </Paper>

          {/* SUMMARY CARDS */}

          <Grid
            container
            spacing={3}
            sx={{
              mb: 4,
            }}
          >
            {summaryCards.map((card) => (
              <Grid
                item
                xs={12}
                sm={6}
                lg={3}
                key={card.title}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: "22px",
                    border: "1px solid #E5EAF2",
                    boxShadow: "0 10px 25px rgba(15,23,42,.06)",
                    transition: ".3s",

                    "&:hover": {
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                  >
                    <Box>
                      <Typography color="text.secondary">
                        {card.title}
                      </Typography>

                      <Typography
                        sx={{
                          mt: 1,
                          fontSize: 34,
                          fontWeight: 800,
                          color: card.color,
                        }}
                      >
                        {card.value}
                      </Typography>

                      <Typography
                        sx={{
                          mt: .5,
                          color: "text.secondary",
                        }}
                      >
                        {card.subtitle}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        color: card.color,
                      }}
                    >
                      {card.icon}
                    </Box>
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {/* MAIN CONTENT */}

          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              xs={12}
              lg={8}
            >
              <UsageChart />
            </Grid>

            <Grid
              item
              xs={12}
              lg={4}
            >
              {/* Next Part */}
            </Grid>

            <Grid
              item
              xs={12}
            >
              {/* Monthly Comparison - Next Part */}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}