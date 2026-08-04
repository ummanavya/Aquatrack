import { useTranslation } from "react-i18next";

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

export default function StatisticsSection() {
  const { t } = useTranslation();

  const stats = [
    {
      title: t("statApartments"),
      value: "120+",
      subtitle: t("statApartmentsSub"),
      icon: <ApartmentRoundedIcon sx={{ fontSize: 42 }} />,
      color: "#1976D2",
    },
    {
      title: t("statWaterTracked"),
      value: "18.2M L",
      subtitle: t("statWaterTrackedSub"),
      icon: <WaterDropRoundedIcon sx={{ fontSize: 42 }} />,
      color: "#26A69A",
    },
    {
      title: t("statBillsGenerated"),
      value: "15,421",
      subtitle: t("statBillsGeneratedSub"),
      icon: <ReceiptLongRoundedIcon sx={{ fontSize: 42 }} />,
      color: "#FB8C00",
    },
    {
      title: t("statLeakAccuracy"),
      value: "98%",
      subtitle: t("statLeakAccuracySub"),
      icon: (
        <NotificationsActiveRoundedIcon
          sx={{ fontSize: 42 }}
        />
      ),
      color: "#E53935",
    },
  ];

  return (
    <Box
      sx={{
        py: 14,
        background:
          "linear-gradient(to bottom,#ffffff,#F7FAFC)",
      }}
    >
      <Container maxWidth="lg">
                {/* ================= Heading ================= */}

        <Stack
          spacing={2}
          alignItems="center"
          mb={8}
        >
          <Chip
            label={t("ourImpact")}
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
            {t("statisticsTitle")}
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
            {t("statisticsDescription")}
          </Typography>
        </Stack>

        {/* ================= Top Statistics ================= */}

        <Grid
          container
          spacing={4}
          justifyContent="center"
        >
          {stats.map((item) => (
            <Grid
              item
              xs={12}
              sm={6}
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
                  borderRadius: 6,
                  border: "1px solid #E2E8F0",
                  position: "relative",
                  overflow: "hidden",
                  transition: ".35s",

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
                      color: "#fff",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
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
                {/* ================= Performance Banner ================= */}

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

          <Typography
            align="center"
            sx={{
              fontWeight: 800,
              fontSize: {
                xs: 30,
                md: 42,
              },
              mb: 3,
            }}
          >
            {t("performanceTitle")}
          </Typography>

          <Typography
            align="center"
            sx={{
              maxWidth: 800,
              mx: "auto",
              fontSize: 18,
              lineHeight: 1.9,
              opacity: .95,
              mb: 6,
            }}
          >
            {t("performanceDescription")}
          </Typography>

          <Grid
            container
            spacing={3}
            justifyContent="center"
          >
            {[
              {
                title: "32%",
                subtitle: t("reductionWater"),
              },
              {
                title: "24 / 7",
                subtitle: t("realTimeMonitoring"),
              },
              {
                title: "100%",
                subtitle: t("billingAccuracy"),
              },
            ].map((item) => (

              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={item.title}
                display="flex"
                justifyContent="center"
              >

                <Paper
                  elevation={0}
                  sx={{
                    width: "100%",
                    maxWidth: 280,
                    bgcolor: "rgba(255,255,255,.14)",
                    border: "1px solid rgba(255,255,255,.18)",
                    backdropFilter: "blur(15px)",
                    borderRadius: 5,
                    p: 4,
                    textAlign: "center",
                    transition: ".35s",

                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow:
                        "0 18px 40px rgba(0,0,0,.18)",
                    },
                  }}
                >

                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: "22px",
                      bgcolor: "#fff",
                      color: "#1976D2",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mx: "auto",
                      mb: 3,
                    }}
                  >

                    <TrendingUpRoundedIcon
                      sx={{ fontSize: 36 }}
                    />

                  </Box>

                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: 36,
                      mb: 1,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      opacity: .95,
                      fontSize: 16,
                      lineHeight: 1.7,
                    }}
                  >
                    {item.subtitle}
                  </Typography>

                </Paper>

              </Grid>

            ))}

          </Grid>

        </Box>

      </Container>

    </Box>

  );

}