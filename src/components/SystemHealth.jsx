import {
  Grid,
  Paper,
  Typography,
  Box,
  LinearProgress,
} from "@mui/material";

const metrics = [
  {
    title: "Database Health",
    value: 98,
    color: "#4caf50",
  },
  {
    title: "API Response",
    value: 92,
    color: "#2196f3",
  },
  {
    title: "Storage Usage",
    value: 68,
    color: "#ff9800",
  },
  {
    title: "Server Load",
    value: 34,
    color: "#9c27b0",
  },
];

export default function SystemHealth() {
  return (
    <Grid container spacing={3}>
      {metrics.map((metric, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 4,
              textAlign: "center",
              transition: ".3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: 6,
              },
            }}
          >
            <Typography
              variant="subtitle1"
              fontWeight={600}
              gutterBottom
            >
              {metric.title}
            </Typography>

            <Typography
              variant="h4"
              fontWeight={800}
              sx={{ color: metric.color, mb: 2 }}
            >
              {metric.value}%
            </Typography>

            <LinearProgress
              variant="determinate"
              value={metric.value}
              sx={{
                height: 10,
                borderRadius: 5,
              }}
            />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}