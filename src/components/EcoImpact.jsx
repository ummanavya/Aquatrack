import React from "react";
import { motion } from "framer-motion";

import {
  Paper,
  Typography,
  Box,
  Stack,
  LinearProgress,
  Chip,
} from "@mui/material";

import {
  EmojiEventsRounded,
  WaterDropRounded,
  ForestRounded,
  WorkspacePremiumRounded,
  TrendingUpRounded,
} from "@mui/icons-material";

export default function EcoImpact() {

  const progress = 72;

  return (

    <motion.div
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
        duration: .6,
      }}
    >

      <Paper
        elevation={0}
        sx={{

          height: "100%",

          borderRadius: "30px",

          border: "1px solid #E8EEF5",

          boxShadow:
            "0 18px 45px rgba(15,23,42,.08)",

          overflow: "hidden",

        }}
      >

        {/* Top Banner */}

        <Box
          sx={{

            background:
              "linear-gradient(135deg,#1976D2,#42A5F5)",

            color: "#FFFFFF",

            p: 4,

          }}
        >

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >

            <Box>

              <Stack
                direction="row"
                spacing={1.5}
                alignItems="center"
                mb={1}
              >

                <WorkspacePremiumRounded
                  sx={{
                    fontSize: 34,
                  }}
                />

                <Typography
                  sx={{
                    fontSize: 30,
                    fontWeight: 900,
                  }}
                >
                  Eco Rewards
                </Typography>

              </Stack>

              <Typography
                sx={{
                  opacity: .92,
                  lineHeight: 1.7,
                }}
              >
                Track your environmental impact,
                reward points and weekly achievements.

              </Typography>

            </Box>

            <Chip
              icon={<TrendingUpRounded />}
              label="Gold Member"
              sx={{

                bgcolor: "#FFFFFF",

                color: "#1976D2",

                fontWeight: 800,

              }}
            />

          </Stack>

        </Box>

        <Box
          sx={{
            p: 4,
          }}
        >
                  {/* ================= Eco Stats ================= */}

        <Stack
          spacing={3}
        >

          {[
            {
              icon: <WaterDropRounded />,
              value: "1,250 L",
              label: "Water Saved",
              color: "#1976D2",
              bg: "#EEF6FF",
            },
            {
              icon: <ForestRounded />,
              value: "8",
              label: "Trees Equivalent",
              color: "#16A34A",
              bg: "#ECFDF5",
            },
            {
              icon: <EmojiEventsRounded />,
              value: "92%",
              label: "Eco Score",
              color: "#F59E0B",
              bg: "#FFF8E6",
            },
          ].map((item) => (

            <motion.div
              key={item.label}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
            >

              <Box
                sx={{

                  display: "flex",

                  alignItems: "center",

                  gap: 3,

                  p: 3,

                  borderRadius: "22px",

                  bgcolor: item.bg,

                  border: "1px solid #E8EEF5",

                  transition: ".3s",

                  "&:hover": {

                    bgcolor: "#FFFFFF",

                    boxShadow:
                      "0 18px 40px rgba(25,118,210,.10)",

                  },

                }}
              >

                <Box
                  sx={{

                    width: 70,

                    height: 70,

                    borderRadius: "20px",

                    bgcolor: item.color,

                    display: "flex",

                    alignItems: "center",

                    justifyContent: "center",

                    color: "#FFFFFF",

                    boxShadow:
                      `0 18px 35px ${item.color}40`,

                  }}
                >

                  {item.icon}

                </Box>

                <Box flex={1}>

                  <Typography
                    sx={{
                      color: "#64748B",
                      fontWeight: 600,
                      fontSize: 15,
                    }}
                  >
                    {item.label}
                  </Typography>

                  <Typography
                    sx={{
                      mt: .5,
                      fontSize: 34,
                      fontWeight: 900,
                      color: "#0F172A",
                    }}
                  >
                    {item.value}
                  </Typography>

                </Box>

                <Chip
                  label="Excellent"
                  sx={{
                    bgcolor: "#ECFDF5",
                    color: "#16A34A",
                    fontWeight: 700,
                  }}
                />

              </Box>

            </motion.div>

          ))}

        </Stack>
                {/* ================= Weekly Goal ================= */}

        <Box
          sx={{
            mt: 4,

            p: 4,

            borderRadius: "24px",

            background:
              "linear-gradient(135deg,#F8FBFF,#EEF6FF)",

            border: "1px solid #DCEBFA",
          }}
        >

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mb={3}
          >

            <Box>

              <Typography
                sx={{
                  fontSize: 22,
                  fontWeight: 800,
                  color: "#0F172A",
                }}
              >
                Weekly Water Saving Goal
              </Typography>

              <Typography
                sx={{
                  mt: .5,
                  color: "#64748B",
                }}
              >
                Keep saving water to unlock your next reward.
              </Typography>

            </Box>

            <Chip
              label={`${progress}% Complete`}
              sx={{
                bgcolor: "#1976D2",
                color: "#FFFFFF",
                fontWeight: 800,
              }}
            />

          </Stack>

          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{

              height: 14,

              borderRadius: 30,

              bgcolor: "#DCEBFA",

              "& .MuiLinearProgress-bar": {

                borderRadius: 30,

                background:
                  "linear-gradient(90deg,#1976D2,#42A5F5)",

              },

            }}
          />

          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
            spacing={3}
            mt={4}
          >

            <Box flex={1}>

              <Typography
                sx={{
                  color: "#64748B",
                  fontWeight: 600,
                }}
              >
                Current Progress
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  fontSize: 30,
                  fontWeight: 900,
                  color: "#1976D2",
                }}
              >
                {progress}%
              </Typography>

            </Box>

            <Box flex={1}>

              <Typography
                sx={{
                  color: "#64748B",
                  fontWeight: 600,
                }}
              >
                Remaining Goal
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  fontSize: 30,
                  fontWeight: 900,
                  color: "#EF4444",
                }}
              >
                {100 - progress}%
              </Typography>

            </Box>

          </Stack>

          <Box
            sx={{
              mt: 4,

              p: 3,

              borderRadius: "18px",

              bgcolor: "#FFFFFF",

              border: "1px solid #E8EEF5",
            }}
          >

            <Typography
              sx={{
                color: "#64748B",
                lineHeight: 1.8,
              }}
            >
              🎉 Excellent progress! You have completed
              <strong> {progress}% </strong>
              of your weekly water-saving target.

              Continue saving water to unlock your
              <strong> Platinum Eco Badge </strong>
              and earn additional reward points.
            </Typography>

          </Box>

        </Box>

      </Box>

    </Paper>

  </motion.div>

);

}
