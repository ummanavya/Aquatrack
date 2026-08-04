import React from "react";
import { useTranslation } from "react-i18next";

import {
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import Grid from "@mui/material/Grid";

import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import WaterDropRoundedIcon from "@mui/icons-material/WaterDropRounded";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import { motion } from "framer-motion";

export default function HowItWorksSection() {

  const { t } = useTranslation();

  const steps = [
    {
      number: "01",
      title: t("step1Title"),
      desc: t("step1Desc"),
      icon: <ApartmentRoundedIcon sx={{ fontSize: 34 }} />,
      color: "#1976D2",
    },
    {
      number: "02",
      title: t("step2Title"),
      desc: t("step2Desc"),
      icon: <WaterDropRoundedIcon sx={{ fontSize: 34 }} />,
      color: "#00ACC1",
    },
    {
      number: "03",
      title: t("step3Title"),
      desc: t("step3Desc"),
      icon: <ReceiptLongRoundedIcon sx={{ fontSize: 34 }} />,
      color: "#FB8C00",
    },
    {
      number: "04",
      title: t("step4Title"),
      desc: t("step4Desc"),
      icon: <AnalyticsRoundedIcon sx={{ fontSize: 34 }} />,
      color: "#7E57C2",
    },
  ];

  return (
        <Box
      id="how"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: {
          xs: 12,
          md: 18,
        },
        background:
          "linear-gradient(180deg,#F8FBFF 0%,#FFFFFF 55%,#F5FAFF 100%)",
      }}
    >
      {/* ================= Background Blur ================= */}

      <Box
        sx={{
          position: "absolute",
          top: -220,
          left: -220,
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: "#42A5F520",
          filter: "blur(120px)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: -180,
          right: -180,
          width: 430,
          height: 430,
          borderRadius: "50%",
          background: "#1976D215",
          filter: "blur(120px)",
        }}
      />

      {/* ================= Floating Bubble ================= */}

      <motion.div
        animate={{
          y: [0, -25, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        style={{
          position: "absolute",
          top: "12%",
          right: "7%",
        }}
      >
        <Box
          sx={{
            width: 90,
            height: 90,
            borderRadius: "50%",
            background:
              "linear-gradient(135deg,#90CAF980,#E3F2FD80)",
            backdropFilter: "blur(12px)",
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

        <Stack
          spacing={3}
          alignItems="center"
          mb={10}
        >
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
              duration: 0.6,
            }}
          >
            <Chip
              label={t("howChip")}
              sx={{
                px: 2,
                py: 2.7,
                borderRadius: "40px",
                color: "#fff",
                fontWeight: 700,
                background:
                  "linear-gradient(90deg,#1976D2,#42A5F5)",
                boxShadow:
                  "0 16px 35px rgba(25,118,210,.30)",
              }}
            />
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
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
            }}
          >
            <Typography
              align="center"
              sx={{
                fontWeight: 900,
                color: "#0F172A",
                lineHeight: 1.15,
                fontSize: {
                  xs: "2.6rem",
                  md: "4rem",
                },
              }}
            >
              {t("howTitle1")}
              <br />

              <Box
                component="span"
                sx={{
                  color: "#1976D2",
                }}
              >
                {t("howTitle2")}
              </Box>

            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Typography
              align="center"
              sx={{
                maxWidth: 820,
                color: "#64748B",
                fontSize: 18,
                lineHeight: 1.9,
              }}
            >
              {t("howDescription")}
            </Typography>
          </motion.div>
        </Stack>

        {/* ================= Timeline ================= */}

        <Grid
          container
          spacing={4}
          justifyContent="center"
        >
                    {steps.map((step, index) => (

            <Grid
              key={step.number}
              size={{
                xs: 12,
                sm: 6,
                lg: 3,
              }}
            >

              <motion.div
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
                  delay: index * 0.18,
                }}
                whileHover={{
                  y: -10,
                }}
              >

                <Box
                  sx={{
                    position: "relative",
                    height: "100%",
                  }}
                >

                  {/* Connection Line */}

                  {index !== steps.length - 1 && (

                    <Box
                      sx={{
                        display: {
                          xs: "none",
                          lg: "block",
                        },
                        position: "absolute",
                        top: 60,
                        left: "74%",
                        width: "55%",
                        height: 4,
                        borderRadius: 20,
                        background:
                          "linear-gradient(90deg,#90CAF9,#42A5F5)",
                        zIndex: 0,
                      }}
                    />

                  )}

                  <Paper
                    elevation={0}
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      height: "100%",
                      p: 4,
                      borderRadius: "30px",

                      background:
                        "rgba(255,255,255,.82)",

                      backdropFilter: "blur(20px)",

                      border:
                        "1px solid rgba(25,118,210,.08)",

                      boxShadow:
                        "0 25px 60px rgba(15,23,42,.08)",

                      transition: ".35s",

                      "&:hover": {
                        boxShadow:
                          "0 35px 80px rgba(25,118,210,.18)",
                      },
                    }}
                  >

                    <Typography
                      sx={{
                        position: "absolute",
                        top: 18,
                        right: 20,
                        fontSize: 42,
                        fontWeight: 900,
                        color: "#E2E8F0",
                      }}
                    >
                      {step.number}
                    </Typography>

                    <Box
                      sx={{
                        position: "absolute",
                        top: -70,
                        right: -70,
                        width: 180,
                        height: 180,
                        borderRadius: "50%",
                        background: `${step.color}15`,
                        filter: "blur(45px)",
                      }}
                    />

                    <motion.div
                      whileHover={{
                        rotate: 360,
                        scale: 1.12,
                      }}
                      transition={{
                        duration: 0.8,
                      }}
                    >

                      <Avatar
                        sx={{
                          width: 82,
                          height: 82,
                          mx: "auto",
                          mb: 4,
                          bgcolor: step.color,
                          boxShadow:
                            `0 20px 40px ${step.color}55`,
                        }}
                      >
                        {step.icon}
                      </Avatar>

                    </motion.div>

                    <Typography
                      align="center"
                      sx={{
                        fontWeight: 800,
                        fontSize: 23,
                        color: "#0F172A",
                        mb: 2,
                      }}
                    >
                      {step.title}
                    </Typography>

                    <Typography
                      align="center"
                      sx={{
                        color: "#64748B",
                        lineHeight: 1.9,
                        fontSize: 15.5,
                      }}
                    >
                      {step.desc}
                    </Typography>

                    <Stack
                      direction="row"
                      spacing={1}
                      justifyContent="center"
                      mt={4}
                    >
                      {[1, 2, 3].map((dot) => (

                        <motion.div
                          key={dot}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: dot * 0.2,
                          }}
                        >

                          <Box
                            sx={{
                              width: 10,
                              height: 10,
                              borderRadius: "50%",
                              bgcolor: step.color,
                            }}
                          />

                        </motion.div>

                      ))}
                    </Stack>

                  </Paper>

                </Box>

              </motion.div>

            </Grid>

          ))}

        </Grid>
                {/* ================= Premium CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              mt: 12,
              position: "relative",
              overflow: "hidden",
              borderRadius: "36px",
              px: {
                xs: 3,
                md: 10,
              },
              py: {
                xs: 7,
                md: 9,
              },
              textAlign: "center",
              background:
                "linear-gradient(135deg,#1565C0 0%,#1976D2 45%,#42A5F5 100%)",
              color: "#fff",
              boxShadow:
                "0 30px 80px rgba(25,118,210,.35)",
            }}
          >

            {/* Glow */}

            <Box
              sx={{
                position: "absolute",
                top: -120,
                left: -120,
                width: 250,
                height: 250,
                borderRadius: "50%",
                background: "rgba(255,255,255,.10)",
                filter: "blur(45px)",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                bottom: -120,
                right: -120,
                width: 250,
                height: 250,
                borderRadius: "50%",
                background: "rgba(255,255,255,.10)",
                filter: "blur(45px)",
              }}
            />

            <Typography
              sx={{
                fontWeight: 900,
                lineHeight: 1.15,
                mb: 3,
                fontSize: {
                  xs: "2.2rem",
                  md: "3.5rem",
                },
              }}
            >
              {t("howCtaTitle1")}
              <br />
              {t("howCtaTitle2")}
            </Typography>

            <Typography
              sx={{
                maxWidth: 760,
                mx: "auto",
                color: "rgba(255,255,255,.92)",
                lineHeight: 1.9,
                fontSize: {
                  xs: 16,
                  md: 18,
                },
              }}
            >
              {t("howCtaDescription")}
            </Typography>

            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={3}
              justifyContent="center"
              mt={6}
            >
              <Button
                variant="contained"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{
                  bgcolor: "#fff",
                  color: "#1976D2",
                  px: 5,
                  py: 1.8,
                  borderRadius: "50px",
                  fontWeight: 800,
                  textTransform: "none",
                  fontSize: 16,

                  "&:hover": {
                    bgcolor: "#F5F9FF",
                  },
                }}
              >
                {t("getStarted")}
              </Button>

              <Button
                variant="outlined"
                sx={{
                  px: 5,
                  py: 1.8,
                  borderRadius: "50px",
                  color: "#fff",
                  borderColor: "rgba(255,255,255,.7)",
                  textTransform: "none",
                  fontWeight: 700,

                  "&:hover": {
                    borderColor: "#fff",
                    bgcolor: "rgba(255,255,255,.08)",
                  },
                }}
              >
                {t("learnMore")}
              </Button>
            </Stack>

          </Box>
        </motion.div>

      </Container>

      {/* ================= Bottom Wave ================= */}

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
            height: "130px",
            display: "block",
          }}
        >
          <path
            fill="#FFFFFF"
            d="M0,96L120,90.7C240,85,480,75,720,90.7C960,107,1200,149,1320,170.7L1440,192L1440,181L1320,181C1200,181,960,181,720,181C480,181,240,181,120,181L0,181Z"
          />
        </svg>
      </Box>

    </Box>
  );
}