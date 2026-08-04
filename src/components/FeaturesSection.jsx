import React from "react";
import { useTranslation } from "react-i18next";

import {
  Box,
  Container,
  Typography,
  Chip,
  Card,
  CardContent,
  Avatar,
  Button,
  Stack,
} from "@mui/material";

import WaterDropRoundedIcon from "@mui/icons-material/WaterDropRounded";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import { motion } from "framer-motion";

export default function FeaturesSection() {

  const { t } = useTranslation();

  const features = [
    {
      icon: <WaterDropRoundedIcon />,
      title: t("feature1Title"),
      description: t("feature1Desc"),
      color: "#2196F3",
    },
    {
      icon: <ReceiptLongRoundedIcon />,
      title: t("feature2Title"),
      description: t("feature2Desc"),
      color: "#3B82F6",
    },
    {
      icon: <AnalyticsRoundedIcon />,
      title: t("feature3Title"),
      description: t("feature3Desc"),
      color: "#2563EB",
    },
    {
      icon: <ApartmentRoundedIcon />,
      title: t("feature4Title"),
      description: t("feature4Desc"),
      color: "#1976D2",
    },
    {
      icon: <NotificationsActiveRoundedIcon />,
      title: t("feature5Title"),
      description: t("feature5Desc"),
      color: "#0EA5E9",
    },
    {
      icon: <SecurityRoundedIcon />,
      title: t("feature6Title"),
      description: t("feature6Desc"),
      color: "#2563EB",
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        py: {
          xs: 12,
          md: 18,
        },
        overflow: "hidden",
        background:
          "linear-gradient(180deg,#F8FBFF 0%,#FFFFFF 45%,#F5FAFF 100%)",
      }}
    >
            {/* ================= Background Blur ================= */}

      <Box
        sx={{
          position: "absolute",
          top: -180,
          left: -150,
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: "#42A5F520",
          filter: "blur(100px)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: -160,
          right: -120,
          width: 380,
          height: 380,
          borderRadius: "50%",
          background: "#1976D225",
          filter: "blur(90px)",
        }}
      />

      {/* ================= Floating Bubble ================= */}

      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        style={{
          position: "absolute",
          top: "18%",
          right: "8%",
        }}
      >
        <Box
          sx={{
            width: 90,
            height: 90,
            borderRadius: "50%",
            background:
              "linear-gradient(135deg,#90CAF980,#E3F2FD80)",
            backdropFilter: "blur(14px)",
          }}
        />
      </motion.div>

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* ================= Header ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <Stack
            spacing={3}
            alignItems="center"
            mb={10}
          >
            <Chip
              label={t("featuresChip")}
              sx={{
                fontWeight: 700,
                fontSize: 14,
                color: "#fff",
                px: 2,
                py: 2.8,
                borderRadius: "50px",
                background:
                  "linear-gradient(90deg,#1976D2,#42A5F5)",
                boxShadow:
                  "0 15px 35px rgba(25,118,210,.35)",
              }}
            />

            <Typography
              align="center"
              sx={{
                fontWeight: 900,
                lineHeight: 1.1,
                color: "#0F172A",
                fontSize: {
                  xs: "2.8rem",
                  md: "4.2rem",
                },
              }}
            >
              {t("featuresTitle")}
            </Typography>

            <Typography
              align="center"
              sx={{
                maxWidth: 780,
                color: "#64748B",
                fontSize: 20,
                lineHeight: 1.9,
              }}
            >
              {t("featuresDescription")}
            </Typography>

            <Box
              sx={{
                width: 120,
                height: 5,
                borderRadius: 10,
                background:
                  "linear-gradient(90deg,#1976D2,#42A5F5)",
              }}
            />
          </Stack>
        </motion.div>

        {/* ================= FEATURES GRID ================= */}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2,1fr)",
              xl: "repeat(3,1fr)",
            },
            gap: 4,
          }}
        >
                    {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
            >
              <Card
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "28px",
                  minHeight: 320,
                  height: "100%",
                  p: 2,
                  background: "rgba(255,255,255,.78)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(25,118,210,.08)",
                  transition: ".35s",
                  boxShadow:
                    "0 20px 45px rgba(15,23,42,.06)",

                  "&:hover": {
                    boxShadow:
                      "0 35px 80px rgba(25,118,210,.18)",
                  },

                  "&::before": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: 5,
                    background: `linear-gradient(90deg,${feature.color},#64B5F6)`,
                  },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: -70,
                    right: -70,
                    width: 170,
                    height: 170,
                    borderRadius: "50%",
                    background: `${feature.color}18`,
                    filter: "blur(45px)",
                  }}
                />

                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <motion.div
                    whileHover={{
                      rotate: 360,
                      scale: 1.1,
                    }}
                    transition={{
                      duration: 0.8,
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 74,
                        height: 74,
                        bgcolor: feature.color,
                        mb: 3,
                        boxShadow: `0 18px 35px ${feature.color}55`,

                        "& svg": {
                          fontSize: 36,
                        },
                      }}
                    >
                      {feature.icon}
                    </Avatar>
                  </motion.div>

                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: "1.55rem",
                      color: "#0F172A",
                      mb: 2,
                    }}
                  >
                    {feature.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#64748B",
                      lineHeight: 1.9,
                      fontSize: "1rem",
                      flexGrow: 1,
                    }}
                  >
                    {feature.description}
                  </Typography>

                  <motion.div
                    whileHover={{
                      x: 8,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <Box
                      sx={{
                        mt: 4,
                        display: "flex",
                        alignItems: "center",
                        color: feature.color,
                        fontWeight: 700,
                      }}
                    >
                      {t("learnMore")}

                      <ArrowForwardRoundedIcon
                        sx={{
                          ml: 1,
                        }}
                      />
                    </Box>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

        </Box>
                {/* ====================== PREMIUM CTA ====================== */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              mt: 12,
              textAlign: "center",
              p: {
                xs: 5,
                md: 7,
              },
              borderRadius: "35px",
              position: "relative",
              overflow: "hidden",
              background:
                "linear-gradient(135deg,#1976D2 0%,#42A5F5 55%,#64B5F6 100%)",
              color: "#fff",
              boxShadow:
                "0 30px 70px rgba(25,118,210,.28)",
            }}
          >
            {/* Floating Circle 1 */}

            <motion.div
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: 220,
                  height: 220,
                  borderRadius: "50%",
                  bgcolor: "rgba(255,255,255,.12)",
                  top: -80,
                  left: -80,
                }}
              />
            </motion.div>

            {/* Floating Circle 2 */}

            <motion.div
              animate={{
                y: [0, 18, 0],
                x: [0, -10, 0],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: 180,
                  height: 180,
                  borderRadius: "50%",
                  bgcolor: "rgba(255,255,255,.10)",
                  bottom: -70,
                  right: -70,
                }}
              />
            </motion.div>

            <Typography
              sx={{
                fontWeight: 900,
                fontSize: {
                  xs: "2rem",
                  md: "3rem",
                },
                mb: 2,
                position: "relative",
                zIndex: 2,
              }}
            >
              {t("ctaTitle")}
            </Typography>

            <Typography
              sx={{
                maxWidth: 720,
                mx: "auto",
                fontSize: 18,
                lineHeight: 1.8,
                opacity: 0.92,
                position: "relative",
                zIndex: 2,
              }}
            >
              {t("ctaDescription")}
            </Typography>

            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={3}
              justifyContent="center"
              mt={5}
              sx={{
                position: "relative",
                zIndex: 2,
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  endIcon={<ArrowForwardRoundedIcon />}
                  sx={{
                    bgcolor: "#fff",
                    color: "#1976D2",
                    px: 5,
                    py: 1.7,
                    borderRadius: "50px",
                    fontWeight: 700,
                    textTransform: "none",

                    "&:hover": {
                      bgcolor: "#F5F9FF",
                    },
                  }}
                >
                  {t("getStarted")}
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    px: 5,
                    py: 1.7,
                    color: "#fff",
                    borderColor: "#fff",
                    borderRadius: "50px",
                    fontWeight: 700,
                    textTransform: "none",

                    "&:hover": {
                      borderColor: "#fff",
                      bgcolor: "rgba(255,255,255,.12)",
                    },
                  }}
                >
                  {t("contactSales")}
                </Button>
              </motion.div>
            </Stack>
          </Box>
        </motion.div>

      </Container>

      {/* ====================== BOTTOM WAVE ====================== */}

      <Box
        sx={{
          position: "absolute",
          bottom: -2,
          left: 0,
          width: "100%",
          lineHeight: 0,
        }}
      >
        <svg
          viewBox="0 0 1440 170"
          preserveAspectRatio="none"
          style={{
            width: "100%",
            height: "140px",
            display: "block",
          }}
        >
          <path
            fill="#FFFFFF"
            d="M0,64L80,74.7C160,85,320,107,480,117.3C640,128,800,128,960,112C1120,96,1280,64,1360,48L1440,32L1440,181L0,181Z"
          />
        </svg>
      </Box>
    </Box>
  );
}