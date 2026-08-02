import React from "react";

import {
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
  Avatar,
  Chip,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

import WaterDropRoundedIcon from "@mui/icons-material/WaterDropRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import EmojiNatureRoundedIcon from "@mui/icons-material/EmojiNatureRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import TipsAndUpdatesRoundedIcon from "@mui/icons-material/TipsAndUpdatesRounded";
import MonitorHeartRoundedIcon from "@mui/icons-material/MonitorHeartRounded";

import ResidentSidebar from "../components/ResidentSidebar";
import ResidentTopbar from "../components/ResidentTopbar";
import UsageChart from "../components/UsageChart";

const summaryCards = [
  {
    title: "Today's Usage",
    value: "320 L",
    subtitle: "+12% from yesterday",
    color: "#1976D2",
    bg: "#EAF4FF",
    icon: <WaterDropRoundedIcon fontSize="large" />,
  },
  {
    title: "Weekly Average",
    value: "415 L",
    subtitle: "Average per day",
    color: "#16A34A",
    bg: "#ECFDF5",
    icon: <TrendingUpRoundedIcon fontSize="large" />,
  },
  {
    title: "Monthly Usage",
    value: "12.45 KL",
    subtitle: "Current month",
    color: "#FB8C00",
    bg: "#FFF4E5",
    icon: <CalendarMonthRoundedIcon fontSize="large" />,
  },
  {
    title: "Water Saving",
    value: "92%",
    subtitle: "Excellent",
    color: "#8E24AA",
    bg: "#F7ECFF",
    icon: <EmojiNatureRoundedIcon fontSize="large" />,
  },
];

const quickTips = [
  "Turn off the tap while brushing.",
  "Fix leaking taps immediately.",
  "Run washing machine only on full load.",
  "Reuse RO water for cleaning.",
];

export default function ResidentWaterUsage() {

  return (

    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "#F4F8FD",
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
              lg: 4,
            },
            pb: 5,
          }}
        >
                    {/* ================= HERO ================= */}

          <Paper
            elevation={0}
            sx={{
              p: {
                xs: 3,
                md: 5,
              },
              mb: 4,
              borderRadius: "30px",
              overflow: "hidden",
              position: "relative",
              color: "#fff",
              background:
                "linear-gradient(135deg,#1565C0 0%,#1976D2 45%,#42A5F5 100%)",
              boxShadow: "0 20px 45px rgba(25,118,210,.22)",
            }}
          >

            <Box
              sx={{
                position: "absolute",
                width: 320,
                height: 320,
                borderRadius: "50%",
                bgcolor: "rgba(255,255,255,.08)",
                top: -140,
                right: -80,
              }}
            />

            <Typography
              sx={{
                fontSize: {
                  xs: 30,
                  md: 46,
                },
                fontWeight: 900,
              }}
            >
              💧 Water Usage Dashboard
            </Typography>

            <Typography
              sx={{
                mt: 2,
                maxWidth: 700,
                lineHeight: 1.8,
                opacity: .95,
                fontSize: 18,
              }}
            >
              Monitor your household water consumption, analyse monthly
              trends, track savings and receive AI-powered insights to
              improve water efficiency.
            </Typography>

            <Stack
              direction="row"
              spacing={2}
              mt={4}
              flexWrap="wrap"
              useFlexGap
            >

              <Chip
                label="Live Analytics"
                sx={{
                  bgcolor: "rgba(255,255,255,.15)",
                  color: "#fff",
                  fontWeight: 700,
                }}
              />

              <Chip
                label="Smart Alerts"
                sx={{
                  bgcolor: "rgba(255,255,255,.15)",
                  color: "#fff",
                  fontWeight: 700,
                }}
              />

              <Chip
                label="AI Insights"
                sx={{
                  bgcolor: "rgba(255,255,255,.15)",
                  color: "#fff",
                  fontWeight: 700,
                }}
              />

              <Chip
                label="Water Saving"
                sx={{
                  bgcolor: "rgba(255,255,255,.15)",
                  color: "#fff",
                  fontWeight: 700,
                }}
              />

            </Stack>

          </Paper>

          {/* ================= SUMMARY CARDS ================= */}

          <Grid
            container
            spacing={4}
            sx={{
              mb: 4,
            }}
          >

            {summaryCards.map((card) => (

              <Grid
  item
  xs={12}
  sm={6}
  md={6}
  lg={3}
  xl={3}
  key={card.title}
>

                <Paper
                  elevation={0}
                  sx={{
  p: 4,
  height: 220,
  borderRadius: "28px",
  display: "flex",
  alignItems: "center",
  border: "1px solid #E8EEF5",
  boxShadow: "0 18px 40px rgba(15,23,42,.08)",
  transition: ".35s",

  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow:
      "0 24px 55px rgba(25,118,210,.16)",
  },
}}
                >

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >

                    <Box>

                      <Typography
  sx={{
    color: "#64748B",
    fontWeight: 700,
    fontSize: 18,
  }}
>
                        {card.title}
                      </Typography>

                      <Typography
                        sx={{
                          mt: 1,
                          fontWeight: 900,
                          fontSize: {
  xs: 40,
  md: 50,
},
                          color: card.color,
                        }}
                      >
                        {card.value}
                      </Typography>

                      <Typography
  sx={{
    mt: 1,
    color: "#64748B",
    fontSize: 17,
  }}
>
                        {card.subtitle}
                      </Typography>

                    </Box>

                    <Avatar
                      sx={{
                        width: 95,
                        height: 95,
                        bgcolor: card.bg,
                        color: card.color,
                      }}
                    >
                      {card.icon}
                    </Avatar>

                  </Stack>

                </Paper>

              </Grid>

            ))}

          </Grid>
                    {/* ================= FULL WIDTH ANALYTICS ================= */}

          <Paper
            elevation={0}
            sx={{
              p: {
                xs: 3,
                md: 4,
              },
              mb: 4,
              borderRadius: "28px",
              border: "1px solid #E8EEF5",
              boxShadow:
                "0 18px 45px rgba(15,23,42,.06)",
            }}
          >

            <Stack
              direction={{
                xs: "column",
                lg: "row",
              }}
              justifyContent="space-between"
              alignItems={{
                xs: "flex-start",
                lg: "center",
              }}
              spacing={3}
              mb={4}
            >

              <Box>

                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                >

                  <Avatar
                    sx={{
                      width: 60,
                      height: 60,
                      bgcolor: "#EAF4FF",
                      color: "#1976D2",
                    }}
                  >
                    <WaterDropRoundedIcon />
                  </Avatar>

                  <Box>

                    <Typography
                      sx={{
                        fontWeight: 900,
                        fontSize: {
                          xs: 28,
                          md: 36,
                        },
                      }}
                    >
                      Water Analytics
                    </Typography>

                    <Typography color="text.secondary">
                      Monitor your water consumption and monthly trends.
                    </Typography>

                  </Box>

                </Stack>

              </Box>

              <Stack
                direction="row"
                spacing={2}
                flexWrap="wrap"
                useFlexGap
              >

                <Chip
                  color="primary"
                  icon={<CalendarMonthRoundedIcon />}
                  label="July 2026"
                />

                <Chip
                  color="success"
                  icon={<TrendingUpRoundedIcon />}
                  label="+12%"
                />

                <Chip
                  color="info"
                  label="415 L / Day"
                />

              </Stack>

            </Stack>

            <UsageChart />

          </Paper>

          {/* ================= KPI GRID ================= */}

          <Grid
            container
            spacing={3}
          >
                        {/* Today's Goal */}

            <Grid
              item
              xs={12}
              sm={6}
              lg={3}
            >

              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: "100%",
                  borderRadius: "24px",
                  border: "1px solid #E8EEF5",
                  boxShadow: "0 12px 30px rgba(15,23,42,.06)",
                }}
              >

                <Typography
                  variant="h6"
                  fontWeight={800}
                  gutterBottom
                >
                  🎯 Today's Goal
                </Typography>

                <Typography color="text.secondary">
                  Water Consumed
                </Typography>

                <Typography
                  sx={{
                    mt: 2,
                    mb: 2,
                    fontSize: 40,
                    fontWeight: 900,
                    color: "#1976D2",
                  }}
                >
                  320 L
                </Typography>

                <LinearProgress
                  variant="determinate"
                  value={64}
                  sx={{
                    height: 10,
                    borderRadius: 20,
                  }}
                />

                <Typography
                  sx={{
                    mt: 2,
                    color: "text.secondary",
                  }}
                >
                  320 L of 500 L daily target used.
                </Typography>

              </Paper>

            </Grid>

            {/* Water Quality */}

            <Grid
              item
              xs={12}
              sm={6}
              lg={3}
            >

              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: "100%",
                  borderRadius: "24px",
                  border: "1px solid #E8EEF5",
                  boxShadow: "0 12px 30px rgba(15,23,42,.06)",
                }}
              >

                <Typography
                  variant="h6"
                  fontWeight={800}
                  gutterBottom
                >
                  💧 Water Quality
                </Typography>

                <Stack spacing={2} mt={3}>

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                  >
                    <Typography>pH Level</Typography>

                    <Chip
                      label="7.2"
                      color="success"
                    />
                  </Stack>

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                  >
                    <Typography>TDS</Typography>

                    <Chip
                      label="280 ppm"
                      color="primary"
                    />
                  </Stack>

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                  >
                    <Typography>Overall</Typography>

                    <Chip
                      label="Excellent"
                      color="success"
                      icon={<CheckCircleRoundedIcon />}
                    />
                  </Stack>

                </Stack>

              </Paper>

            </Grid>

            {/* Water Saving */}

            <Grid
              item
              xs={12}
              sm={6}
              lg={3}
            >

              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: "100%",
                  borderRadius: "24px",
                  border: "1px solid #E8EEF5",
                  boxShadow: "0 12px 30px rgba(15,23,42,.06)",
                }}
              >

                <Typography
                  variant="h6"
                  fontWeight={800}
                >
                  🌱 Water Saving
                </Typography>

                <Typography
                  sx={{
                    mt: 3,
                    fontSize: 42,
                    fontWeight: 900,
                    color: "#16A34A",
                  }}
                >
                  92%
                </Typography>

                <Typography color="text.secondary">
                  Better than last month.
                </Typography>

                <LinearProgress
                  variant="determinate"
                  value={92}
                  color="success"
                  sx={{
                    mt: 3,
                    height: 10,
                    borderRadius: 20,
                  }}
                />

              </Paper>

            </Grid>

            {/* Smart Tips */}

            <Grid
              item
              xs={12}
              sm={6}
              lg={3}
            >

              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: "100%",
                  borderRadius: "24px",
                  border: "1px solid #E8EEF5",
                  boxShadow: "0 12px 30px rgba(15,23,42,.06)",
                }}
              >

                <Typography
                  variant="h6"
                  fontWeight={800}
                  gutterBottom
                >
                  💡 Smart Tips
                </Typography>

                <List dense>

                  {quickTips.map((tip) => (

                    <ListItem
                      key={tip}
                      disablePadding
                      sx={{
                        py: 1,
                      }}
                    >

                      <ListItemAvatar>

                        <Avatar
                          sx={{
                            bgcolor: "#EAF4FF",
                            color: "#1976D2",
                            width: 34,
                            height: 34,
                          }}
                        >
                          <BoltRoundedIcon fontSize="small" />
                        </Avatar>

                      </ListItemAvatar>

                      <ListItemText
                        primary={tip}
                      />

                    </ListItem>

                  ))}

                </List>

              </Paper>

            </Grid>
                        {/* ================= BOTTOM SECTION ================= */}

            <Grid
              item
              xs={12}
            >

              <Grid
                container
                spacing={4}
              >

                {/* Monthly Comparison */}

                <Grid
  item
  xs={12}
  md={7}
  lg={7}
>

                  <Paper
                    elevation={0}
                    sx={{
  p: 5,
  minHeight: 560,
  borderRadius: "30px",
  border: "1px solid #E8EEF5",
  boxShadow: "0 20px 50px rgba(15,23,42,.08)",
}}
                  >

                    <Typography
                      sx={{
  fontSize: 38,
  fontWeight: 900,
}}
                      fontWeight={800}
                      mb={4}
                    >
                      📊 Monthly Comparison
                    </Typography>

                    {[
                      { month: "April", usage: 980, progress: 68 },
                      { month: "May", usage: 1120, progress: 76 },
                      { month: "June", usage: 1370, progress: 94 },
                      { month: "July", usage: 1245, progress: 88 },
                    ].map((item) => (

                      <Box
                        key={item.month}
                        mb={3}
                      >

                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          mb={1}
                        >

                          <Typography fontWeight={700}>
                            {item.month}
                          </Typography>

                          <Typography fontWeight={700}>
                            {item.usage} L
                          </Typography>

                        </Stack>

                        <LinearProgress
  variant="determinate"
  value={item.progress}
  sx={{
    mt: 1,
    height: 12,
    borderRadius: 20,
  }}
/>

                      </Box>

                    ))}

                  </Paper>

                </Grid>

                {/* Smart Insights */}

                <Grid
  item
  xs={12}
  md={5}
  lg={5}
>

                  <Paper
                    sx={{
  p: 5,
  minHeight: 560,
  borderRadius: "30px",
  border: "1px solid #E8EEF5",
  boxShadow: "0 20px 50px rgba(15,23,42,.08)",
}}
                  >

                    <Typography
                      variant="h5"
                      fontWeight={800}
                      mb={3}
                    >
                      🤖 Smart Insights
                    </Typography>

                    <Stack spacing={3}>

                      <Paper
                        elevation={0}
                        sx={{
                          p: 2,
                          bgcolor: "#EEF6FF",
                          borderRadius: "18px",
                        }}
                      >

                        <Typography
                          fontWeight={700}
                          color="primary"
                        >
                          Great Progress
                        </Typography>

                        <Typography
                          color="text.secondary"
                          mt={1}
                        >
                          You used 18% less water than last month.
                        </Typography>

                      </Paper>

                      <Paper
                        elevation={0}
                        sx={{
                          p: 2,
                          bgcolor: "#ECFDF5",
                          borderRadius: "18px",
                        }}
                      >

                        <Typography
                          fontWeight={700}
                          color="success.main"
                        >
                          AI Suggestion
                        </Typography>

                        <Typography
                          color="text.secondary"
                          mt={1}
                        >
                          Washing clothes with full loads can save around
                          45 litres every week.
                        </Typography>

                      </Paper>

                      <Paper
                        elevation={0}
                        sx={{
                          p: 2,
                          bgcolor: "#FFF7ED",
                          borderRadius: "18px",
                        }}
                      >

                        <Typography
                          fontWeight={700}
                          color="#FB8C00"
                        >
                          Estimated Monthly Bill
                        </Typography>

                        <Typography
                          sx={{
                            mt: 2,
                            fontSize: 34,
                            fontWeight: 900,
                          }}
                        >
                          ₹1,245
                        </Typography>

                      </Paper>

                    </Stack>

                  </Paper>

                </Grid>

              </Grid>

            </Grid>

          </Grid>

        </Container>

      </Box>

    </Box>

  );

}