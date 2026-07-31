import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import SpeedRoundedIcon from "@mui/icons-material/SpeedRounded";
import WaterDropRoundedIcon from "@mui/icons-material/WaterDropRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import CloudDoneRoundedIcon from "@mui/icons-material/CloudDoneRounded";

const benefits = [
  {
    title: "Secure Platform",
    description:
      "JWT authentication and role-based access protect all apartment and billing data.",
    icon: <SecurityRoundedIcon />,
    color: "#1976D2",
  },
  {
    title: "Real-Time Monitoring",
    description:
      "Monitor water usage instantly with live meter readings and consumption insights.",
    icon: <WaterDropRoundedIcon />,
    color: "#00ACC1",
  },
  {
    title: "Fast Performance",
    description:
      "Optimized backend APIs ensure quick loading and responsive user experience.",
    icon: <SpeedRoundedIcon />,
    color: "#43A047",
  },
  {
    title: "Advanced Analytics",
    description:
      "Interactive reports and dashboards help make informed decisions.",
    icon: <AnalyticsRoundedIcon />,
    color: "#FB8C00",
  },
  {
    title: "Smart Alerts",
    description:
      "Receive notifications for leaks, abnormal usage and billing events.",
    icon: <NotificationsActiveRoundedIcon />,
    color: "#E53935",
  },
  {
    title: "Cloud Ready",
    description:
      "Designed for scalable deployment with secure and reliable cloud infrastructure.",
    icon: <CloudDoneRoundedIcon />,
    color: "#7E57C2",
  },
];

export default function WhyChooseSection() {
  return (
    <Box
      sx={{
        py: 14,
        background:
          "linear-gradient(180deg,#F8FBFF 0%,#EEF6FF 100%)",
      }}
    >
      <Container maxWidth="xl">

        <Box textAlign="center" mb={8}>

          <Chip
            label="WHY AQUATRACK"
            color="primary"
            sx={{
              mb: 2,
              fontWeight: 700,
            }}
          />

          <Typography
            sx={{
              fontSize: { xs: 34, md: 48 },
              fontWeight: 800,
              color: "#0F172A",
              mb: 2,
            }}
          >
            Why Choose AquaTrack?
          </Typography>

          <Typography
            sx={{
              maxWidth: 760,
              mx: "auto",
              color: "#64748B",
              fontSize: 18,
              lineHeight: 1.8,
            }}
          >
            AquaTrack combines intelligent monitoring, automated
            billing, analytics and security into one modern
            platform built specifically for apartment water
            management.
          </Typography>

        </Box>

        <Grid container spacing={4}>

          {benefits.map((item) => (

            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              key={item.title}
            >

              <Card
                elevation={0}
                sx={{
                  borderRadius: 5,
                  border: "1px solid #E2E8F0",
                  height: "100%",
                  transition: ".35s",
                  background: "rgba(255,255,255,.75)",
                  backdropFilter: "blur(12px)",

                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow:
                      "0 20px 50px rgba(15,23,42,.10)",
                  },
                }}
              >

                <CardContent sx={{ p: 4 }}>

                  <Avatar
                    sx={{
                      bgcolor: item.color,
                      width: 64,
                      height: 64,
                      mb: 3,
                    }}
                  >
                    {item.icon}
                  </Avatar>

                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: 22,
                      mb: 2,
                      color: "#0F172A",
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#64748B",
                      lineHeight: 1.8,
                    }}
                  >
                    {item.description}
                  </Typography>

                </CardContent>

              </Card>

            </Grid>

          ))}

        </Grid>

      </Container>
    </Box>
  );
}