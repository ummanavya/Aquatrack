import {
  Box,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import WaterDropRoundedIcon from "@mui/icons-material/WaterDropRounded";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";

const stats = [
  {
    title: "Apartments",
    value: "120+",
    subtitle: "Communities Connected",
    icon: <ApartmentRoundedIcon sx={{ fontSize: 42 }} />,
    color: "#1976D2",
  },
  {
    title: "Water Tracked",
    value: "18.2M L",
    subtitle: "Monitored Every Month",
    icon: <WaterDropRoundedIcon sx={{ fontSize: 42 }} />,
    color: "#26A69A",
  },
  {
    title: "Bills Generated",
    value: "15,421",
    subtitle: "Automated Billing",
    icon: <ReceiptLongRoundedIcon sx={{ fontSize: 42 }} />,
    color: "#FB8C00",
  },
  {
    title: "Leak Accuracy",
    value: "98%",
    subtitle: "AI Detection",
    icon: (
      <NotificationsActiveRoundedIcon
        sx={{ fontSize: 42 }}
      />
    ),
    color: "#E53935",
  },
];

function StatisticsSection() {
  return (
    <Box
      sx={{
        py: 14,
        background:
          "linear-gradient(to bottom,#ffffff,#F7FAFC)",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          textAlign: "center",
        }}
      >
        <Stack
          spacing={2}
          alignItems="center"
          mb={8}
        >
          <Chip
            label="OUR IMPACT"
            color="primary"
            sx={{
              fontWeight: 700,
              borderRadius: "30px",
              px: 2,
            }}
          />

          <Typography
            align="center"
            sx={{
              fontWeight: 800,
              fontSize: {
                xs: 34,
                md: 46,
              },
              color: "#0F172A",
            }}
          >
            Trusted By Modern Apartment
            Communities
          </Typography>

          <Typography
            align="center"
            sx={{
              color: "#64748B",
              maxWidth: 950,
              mx: "auto",
              fontSize: {
                xs: 16,
                md: 18,
              },
              lineHeight: 1.8,
            }}
          >
            AquaTrack empowers apartment
            communities with intelligent
            monitoring, automated billing,
            leak detection and real-time
            analytics, making water
            management smarter than ever.
          </Typography>
        </Stack>

        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
        >
                    {stats.map((item) => (

            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={3}
              key={item.title}
              display="flex"
              justifyContent="center"
            >

              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  width: "100%",
                  maxWidth: 260,
                  height: "100%",
                  borderRadius: 6,
                  border: "1px solid #E2E8F0",
                  transition: ".35s",
                  position: "relative",
                  overflow: "hidden",

                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow:
                      "0 25px 55px rgba(15,23,42,.08)",
                  },
                }}
              >

                <Box
                  sx={{
                    position: "absolute",
                    top: -40,
                    right: -40,
                    width: 120,
                    height: 120,
                    borderRadius: "50%",
                    bgcolor: item.color,
                    opacity: 0.08,
                  }}
                />

                <Stack
                  spacing={3}
                  alignItems="center"
                  textAlign="center"
                >

                  <Box
                    sx={{
                      width: 82,
                      height: 82,
                      borderRadius: "24px",
                      bgcolor: item.color,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#fff",
                      boxShadow: `0 15px 35px ${item.color}55`,
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: 42,
                      color: "#0F172A",
                    }}
                  >
                    {item.value}
                  </Typography>

                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: 22,
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
                    {item.subtitle}
                  </Typography>

                </Stack>

              </Paper>

            </Grid>

          ))}

        </Grid>
                {/* ================= Bottom Performance Banner ================= */}

        <Box
          sx={{
            mt: 10,
            borderRadius: 6,
            overflow: "hidden",
            background:
              "linear-gradient(135deg,#1976D2,#42A5F5)",
            color: "#fff",
            p: {
              xs: 4,
              md: 6,
            },
            boxShadow:
              "0 25px 60px rgba(25,118,210,.25)",
          }}
        >
          <Grid
            container
            spacing={5}
            alignItems="center"
            justifyContent="space-between"
          >

            {/* Left Side */}

            <Grid
              item
              xs={12}
              md={7}
            >
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: {
                    xs: 30,
                    md: 40,
                  },
                  mb: 2,
                }}
              >
                Smarter Water Management Starts Here
              </Typography>

              <Typography
                sx={{
                  fontSize: 18,
                  lineHeight: 1.9,
                  opacity: 0.95,
                  maxWidth: 650,
                }}
              >
                AquaTrack enables apartment
                communities to reduce water
                wastage, automate billing,
                detect leakages instantly
                and gain valuable insights
                through one intelligent
                platform.
              </Typography>
            </Grid>

            {/* Right Side */}

            <Grid
              item
              xs={12}
              md={5}
            >
              <Stack spacing={3}>

                {[
                  {
                    title: "32%",
                    subtitle:
                      "Reduction in Water Wastage",
                  },
                  {
                    title: "24 / 7",
                    subtitle:
                      "Real-Time Monitoring",
                  },
                  {
                    title: "100%",
                    subtitle:
                      "Automated Billing Accuracy",
                  },
                ].map((item) => (
                                    <Paper
                    key={item.title}
                    elevation={0}
                    sx={{
                      bgcolor: "rgba(255,255,255,.14)",
                      border:
                        "1px solid rgba(255,255,255,.18)",
                      backdropFilter: "blur(15px)",
                      borderRadius: 4,
                      p: 3,
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                    >
                      <Box
                        sx={{
                          width: 58,
                          height: 58,
                          borderRadius: "18px",
                          bgcolor: "#fff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#1976D2",
                        }}
                      >
                        <TrendingUpRoundedIcon />
                      </Box>

                      <Box>
                        <Typography
                          sx={{
                            fontWeight: 800,
                            fontSize: 28,
                          }}
                        >
                          {item.title}
                        </Typography>

                        <Typography
                          sx={{
                            opacity: 0.9,
                          }}
                        >
                          {item.subtitle}
                        </Typography>
                      </Box>
                    </Stack>
                  </Paper>

                ))}

              </Stack>

            </Grid>

          </Grid>

        </Box>

      </Container>

    </Box>
  );
}

export default StatisticsSection;