import {
  Paper,
  Typography,
  Box,
  Avatar,
  Chip,
} from "@mui/material";

import {
  WaterDrop,
  WarningAmber,
  Payments,
  Apartment,
} from "@mui/icons-material";

const activities = [
  {
    icon: <WaterDrop />,
    title: "Water reading updated",
    description: "Apartment A - Block 3",
    time: "2 mins ago",
    color: "#2563eb",
    status: "Normal",
  },
  {
    icon: <WarningAmber />,
    title: "Possible Leak Detected",
    description: "Household H-204",
    time: "10 mins ago",
    color: "#ef4444",
    status: "Critical",
  },
  {
    icon: <Payments />,
    title: "Bill Generated",
    description: "Monthly billing completed",
    time: "30 mins ago",
    color: "#16a34a",
    status: "Completed",
  },
  {
    icon: <Apartment />,
    title: "New Apartment Added",
    description: "Green Valley Residency",
    time: "1 hour ago",
    color: "#7c3aed",
    status: "Success",
  },
];

export default function ActivityTimeline() {
  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 4,
        height: "100%",
      }}
    >
      <Typography variant="h6" fontWeight={700} mb={3}>
        Live Activity
      </Typography>

      {activities.map((item, index) => (
        <Box
          key={index}
          display="flex"
          alignItems="center"
          gap={2}
          mb={3}
        >
          <Avatar
            sx={{
              bgcolor: item.color,
              width: 52,
              height: 52,
            }}
          >
            {item.icon}
          </Avatar>

          <Box flex={1}>
            <Typography fontWeight={700}>
              {item.title}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              {item.description}
            </Typography>

            <Typography
              variant="caption"
              color="text.secondary"
            >
              {item.time}
            </Typography>
          </Box>

          <Chip
            label={item.status}
            color={
              item.status === "Critical"
                ? "error"
                : item.status === "Completed"
                ? "success"
                : "primary"
            }
            size="small"
          />
        </Box>
      ))}
    </Paper>
  );
}