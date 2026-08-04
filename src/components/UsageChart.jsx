import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import api from "../services/api";

import {
  Paper,
  Typography,
  Box,
  Stack,
  Chip,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import WaterDropRoundedIcon from "@mui/icons-material/WaterDropRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function UsageChart() {

  const [period, setPeriod] = useState("month");

  const [chartData, setChartData] = useState([]);

  const [summary, setSummary] = useState({
    totalUsage: "0 L",
    average: "0 L",
    highest: "-",
  });

  useEffect(() => {
    loadChart();
  }, [period]);

  const loadChart = async () => {

    try {

      const response = await api.get(
        `/api/resident/water-usage/${period}`
      );

      const data = response.data || [];

      setChartData(data);

      if (data.length === 0) {

        setSummary({
          totalUsage: "0 L",
          average: "0 L",
          highest: "-",
        });

        return;
      }

      const total = data.reduce(
        (sum, item) => sum + item.usage,
        0
      );

      const highestUsage = data.reduce(
        (a, b) => (a.usage > b.usage ? a : b)
      );

      setSummary({

        totalUsage: `${total.toLocaleString()} L`,

        average: `${Math.round(
          total / data.length
        ).toLocaleString()} L`,

        highest: highestUsage.label,

      });

    } catch (error) {

      console.error("Error loading chart:", error);

      setChartData([]);

      setSummary({
        totalUsage: "0 L",
        average: "0 L",
        highest: "-",
      });

    }

  };

  return (

    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: .6,
      }}
    >

      <Paper
        elevation={0}
        sx={{
          borderRadius: "32px",
          overflow: "hidden",
          p: {
            xs: 2.5,
            md: 4,
          },
          bgcolor: "#FFFFFF",
          border: "1px solid #E8EEF5",
          boxShadow:
            "0 22px 60px rgba(15,23,42,.08)",
        }}
      >

        <Stack
          direction={{
            xs: "column",
            lg: "row",
          }}
          justifyContent="space-between"
          spacing={3}
          mb={4}
        >

          <Box>

            <Stack
              direction="row"
              spacing={1.5}
              alignItems="center"
            >

              <Box
                sx={{
                  width: 58,
                  height: 58,
                  borderRadius: "18px",
                  background:
                    "linear-gradient(135deg,#1976D2,#42A5F5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                }}
              >

                <WaterDropRoundedIcon fontSize="large" />

              </Box>

              <Box>

                <Typography
                  sx={{
                    fontSize: {
                      xs: 24,
                      md: 30,
                    },
                    fontWeight: 900,
                    color: "#0F172A",
                  }}
                >
                  Water Analytics
                </Typography>

                <Typography
                  sx={{
                    color: "#64748B",
                    mt: .5,
                  }}
                >
                  Water consumption analytics
                </Typography>

              </Box>

            </Stack>

          </Box>

          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
            spacing={2}
            alignItems="center"
          >

            <ToggleButtonGroup
              exclusive
              value={period}
              onChange={(event, value) => {

                if (value) {
                  setPeriod(value);
                }

              }}
              size="small"
            >

              <ToggleButton value="week">
                Week
              </ToggleButton>

              <ToggleButton value="month">
                Month
              </ToggleButton>

              <ToggleButton value="year">
                Year
              </ToggleButton>

            </ToggleButtonGroup>

            <Chip
              icon={<CalendarMonthRoundedIcon />}
              label={period.toUpperCase()}
              sx={{
                bgcolor: "#EEF6FF",
                color: "#1976D2",
                fontWeight: 700,
              }}
            />

            <Chip
              icon={<TrendingUpRoundedIcon />}
              label="Live Data"
              sx={{
                bgcolor: "#ECFDF5",
                color: "#16A34A",
                fontWeight: 700,
              }}
            />

          </Stack>

        </Stack>
                {/* ================= Chart ================= */}

        <Box
          sx={{
            width: "100%",
            height: {
              xs: 300,
              sm: 360,
              md: 420,
            },
            borderRadius: "24px",
            overflow: "hidden",
          }}
        >

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <AreaChart
              data={chartData}
              margin={{
                top: 20,
                right: 20,
                left: 0,
                bottom: 0,
              }}
            >

              <defs>

                <linearGradient
                  id="waterGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >

                  <stop
                    offset="0%"
                    stopColor="#1976D2"
                    stopOpacity={0.8}
                  />

                  <stop
                    offset="100%"
                    stopColor="#1976D2"
                    stopOpacity={0.02}
                  />

                </linearGradient>

              </defs>

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#EDF2F7"
                vertical={false}
              />

              <XAxis
                dataKey="label"
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "#64748B",
                  fontSize: 13,
                }}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "#64748B",
                  fontSize: 13,
                }}
              />

              <Tooltip
                contentStyle={{
                  borderRadius: "16px",
                  border: "none",
                  boxShadow:
                    "0 20px 45px rgba(15,23,42,.12)",
                }}
              />

              <Area
                type="monotone"
                dataKey="usage"
                stroke="#1976D2"
                strokeWidth={4}
                fill="url(#waterGradient)"
                activeDot={{
                  r: 7,
                }}
              />

            </AreaChart>

          </ResponsiveContainer>

        </Box>

        {/* ================= Summary Cards ================= */}

        <Stack
          direction={{
            xs: "column",
            md: "row",
          }}
          spacing={3}
          mt={4}
        >

          {[
            {
              title: "Total Usage",
              value: summary.totalUsage,
              color: "#1976D2",
            },
            {
              title: "Average",
              value: summary.average,
              color: "#00ACC1",
            },
            {
              title: "Highest",
              value: summary.highest,
              color: "#43A047",
            },
          ].map((item) => (

            <motion.div
              key={item.title}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              style={{
                flex: 1,
              }}
            >

              <Box
                sx={{
                  p: 3.5,
                  borderRadius: "24px",
                  bgcolor: "#F8FBFF",
                  border: "1px solid #E8EEF5",
                  transition: ".3s",

                  "&:hover": {
                    bgcolor: "#FFFFFF",
                    boxShadow:
                      "0 18px 45px rgba(25,118,210,.12)",
                  },
                }}
              >

                <Typography
                  sx={{
                    color: "#64748B",
                    fontWeight: 700,
                    fontSize: 15,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    mt: 2,
                    fontSize: {
                      xs: 28,
                      md: 34,
                    },
                    fontWeight: 900,
                    color: "#0F172A",
                  }}
                >
                  {item.value}
                </Typography>

                <Box
                  sx={{
                    mt: 2,
                    width: 55,
                    height: 5,
                    borderRadius: 5,
                    bgcolor: item.color,
                  }}
                />

              </Box>

            </motion.div>

          ))}

        </Stack>

      </Paper>

    </motion.div>

  );

}