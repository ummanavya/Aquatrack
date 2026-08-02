import React from "react";
import { motion } from "framer-motion";

import {
  Paper,
  Typography,
  Box,
  Stack,
  Chip,
  Avatar,
} from "@mui/material";

import {
  PsychologyRounded,
  LightbulbRounded,
  WaterDropRounded,
  WbSunnyRounded,
  AutoAwesomeRounded,
} from "@mui/icons-material";

const tips = [

  {
    title: "Daily Water Tip",
    description:
      "Turn off the tap while brushing your teeth to save nearly 20 litres of water every day.",
    icon: <LightbulbRounded />,
    color: "#F59E0B",
    badge: "95% Confidence",
  },

  {
    title: "Leak Prediction",
    description:
      "Your water usage is normal today. No leakage patterns detected.",
    icon: <WaterDropRounded />,
    color: "#1976D2",
    badge: "AI Verified",
  },

  {
    title: "Weather Advice",
    description:
      "Today's temperature is expected to be high. Stay hydrated while using water wisely.",
    icon: <WbSunnyRounded />,
    color: "#16A34A",
    badge: "Today's Forecast",
  },

];

export default function SmartTips() {

  return (

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
        duration: .6,
      }}
    >

      <Paper
        elevation={0}
        sx={{
          mt: 4,
          p: 4,
          borderRadius: "30px",
          border: "1px solid #E8EEF5",
          boxShadow:
            "0 18px 45px rgba(15,23,42,.08)",
        }}
      >

        {/* ================= Header ================= */}

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={4}
        >

          <Box>

            <Stack
              direction="row"
              spacing={1.5}
              alignItems="center"
              mb={1}
            >

              <AutoAwesomeRounded
                sx={{
                  color: "#7C3AED",
                  fontSize: 30,
                }}
              />

              <Typography
                sx={{
                  fontSize: 30,
                  fontWeight: 900,
                  color: "#0F172A",
                }}
              >
                Aqua AI Assistant
              </Typography>

            </Stack>

            <Typography
              sx={{
                color: "#64748B",
              }}
            >
              Personalized AI recommendations to reduce water consumption and improve efficiency.
            </Typography>

          </Box>

          <Chip
            icon={<PsychologyRounded />}
            label="AI Powered"
            sx={{
              bgcolor: "#EEF2FF",
              color: "#4F46E5",
              fontWeight: 800,
            }}
          />

        </Stack>

        <Stack spacing={3}>
                    {tips.map((tip, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.15,
                duration: .45,
              }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
            >

              <Box
                sx={{
                  display: "flex",
                  gap: 3,
                  p: 3,
                  borderRadius: "24px",
                  bgcolor: "#F8FBFF",
                  border: "1px solid #E8EEF5",
                  transition: ".35s",

                  "&:hover": {
                    bgcolor: "#FFFFFF",
                    boxShadow:
                      "0 15px 35px rgba(25,118,210,.12)",
                  },
                }}
              >

                <Avatar
                  sx={{
                    width: 62,
                    height: 62,
                    bgcolor: tip.color,
                    boxShadow:
                      `0 15px 35px ${tip.color}45`,
                  }}
                >
                  {tip.icon}
                </Avatar>

                <Box flex={1}>

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={1}
                  >

                    <Typography
                      sx={{
                        fontSize: 18,
                        fontWeight: 800,
                        color: "#0F172A",
                      }}
                    >
                      {tip.title}
                    </Typography>

                    <Chip
                      label={tip.badge}
                      size="small"
                      sx={{
                        bgcolor: `${tip.color}18`,
                        color: tip.color,
                        fontWeight: 700,
                      }}
                    />

                  </Stack>

                  <Typography
                    sx={{
                      color: "#64748B",
                      lineHeight: 1.8,
                    }}
                  >
                    {tip.description}
                  </Typography>

                </Box>

              </Box>

            </motion.div>

          ))}

          {/* ================= AI Daily Mission ================= */}

          <motion.div
            whileHover={{
              scale: 1.02,
            }}
          >

            <Box
              sx={{
                mt: 2,
                p: 4,
                borderRadius: "28px",
                background:
                  "linear-gradient(135deg,#1976D2,#42A5F5)",
                color: "#FFFFFF",
                position: "relative",
                overflow: "hidden",
              }}
            >

              {/* Decorative Circle */}

              <Box
                sx={{
                  position: "absolute",
                  width: 180,
                  height: 180,
                  borderRadius: "50%",
                  bgcolor: "rgba(255,255,255,.10)",
                  top: -60,
                  right: -50,
                }}
              />

              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                mb={2}
              >

                <AutoAwesomeRounded
                  sx={{
                    fontSize: 34,
                  }}
                />

                <Typography
                  sx={{
                    fontSize: 26,
                    fontWeight: 900,
                  }}
                >
                  AI Daily Mission
                </Typography>

              </Stack>

              <Typography
                sx={{
                  lineHeight: 1.9,
                  opacity: .95,
                  fontSize: 16,
                }}
              >
                Reduce today's water consumption by
                <strong> 20 litres </strong>
                compared to yesterday.

                Completing today's mission will earn you
                <strong> +50 Eco Points</strong>,
                improve your Eco Score,
                and increase your Community Ranking.
              </Typography>

              <Chip
                label="Reward +50 XP"
                sx={{
                  mt: 3,
                  bgcolor: "#FFFFFF",
                  color: "#1976D2",
                  fontWeight: 800,
                }}
              />

            </Box>

          </motion.div>

        </Stack>

      </Paper>

    </motion.div>

  );

}
