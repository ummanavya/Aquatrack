import {
  Paper,
  Typography,
  Grid,
  Box,
} from "@mui/material";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line
} from "recharts";

const COLORS = [
  "#2563eb",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6"
];

const pieData = [
  { name: "Apartment A", value: 420 },
  { name: "Apartment B", value: 310 },
  { name: "Apartment C", value: 270 },
  { name: "Apartment D", value: 190 },
  { name: "Apartment E", value: 130 }
];

const revenueData = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 14000 },
  { month: "Mar", revenue: 13500 },
  { month: "Apr", revenue: 16000 },
  { month: "May", revenue: 18000 },
  { month: "Jun", revenue: 21000 }
];

const weeklyUsage = [
  { day: "Mon", usage: 120 },
  { day: "Tue", usage: 145 },
  { day: "Wed", usage: 132 },
  { day: "Thu", usage: 168 },
  { day: "Fri", usage: 158 },
  { day: "Sat", usage: 190 },
  { day: "Sun", usage: 170 }
];

export default function AnalyticsDashboard() {

  return (

    <Grid container spacing={3}>

      <Grid item xs={12} md={6}>

        <Paper
          sx={{
            p:3,
            borderRadius:4,
            height:420
          }}
        >

          <Typography
            variant="h6"
            fontWeight={700}
            mb={2}
          >
            Water Distribution
          </Typography>

          <ResponsiveContainer width="100%" height={320}>

            <PieChart>

              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={110}
                label
              >

                {pieData.map((entry,index)=>(
                  <Cell
                    key={index}
                    fill={COLORS[index%COLORS.length]}
                  />
                ))}

              </Pie>

              <Tooltip/>

              <Legend/>

            </PieChart>

          </ResponsiveContainer>

        </Paper>

      </Grid>

      <Grid item xs={12} md={6}>

        <Paper
          sx={{
            p:3,
            borderRadius:4,
            height:420
          }}
        >

          <Typography
            variant="h6"
            fontWeight={700}
            mb={2}
          >
            Monthly Revenue
          </Typography>

          <ResponsiveContainer width="100%" height={320}>

            <BarChart data={revenueData}>

              <CartesianGrid strokeDasharray="3 3"/>

              <XAxis dataKey="month"/>

              <YAxis/>

              <Tooltip/>

              <Bar
                dataKey="revenue"
                radius={[8,8,0,0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </Paper>

      </Grid>

      <Grid item xs={12}>

        <Paper
          sx={{
            p:3,
            borderRadius:4
          }}
        >

          <Typography
            variant="h6"
            fontWeight={700}
            mb={2}
          >
            Weekly Water Usage
          </Typography>

          <ResponsiveContainer
            width="100%"
            height={350}
          >

            <LineChart data={weeklyUsage}>

              <CartesianGrid strokeDasharray="3 3"/>

              <XAxis dataKey="day"/>

              <YAxis/>

              <Tooltip/>

              <Line
                type="monotone"
                dataKey="usage"
                stroke="#2563eb"
                strokeWidth={3}
              />

            </LineChart>

          </ResponsiveContainer>

        </Paper>

      </Grid>

    </Grid>

  );

}