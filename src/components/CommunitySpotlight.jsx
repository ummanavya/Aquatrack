import React from "react";
import { motion } from "framer-motion";

import {
  Paper,
  Typography,
  Box,
  Stack,
  Avatar,
  Chip,
} from "@mui/material";

import {
  EmojiEventsRounded,
  GroupsRounded,
  WorkspacePremiumRounded,
  TrendingUpRounded,
} from "@mui/icons-material";

const leaders = [

  {
    name: "Anu",
    house: "A-101",
    saved: "520 L",
    rank: 1,
    color: "#FFD700",
  },

  {
    name: "Priya Reddy",
    house: "B-204",
    saved: "485 L",
    rank: 2,
    color: "#C0C0C0",
  },

  {
    name: "Amit Kumar",
    house: "C-310",
    saved: "430 L",
    rank: 3,
    color: "#CD7F32",
  },

];

export default function CommunitySpotlight() {

  return (

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

              <WorkspacePremiumRounded
                sx={{
                  color: "#F59E0B",
                  fontSize: 30,
                }}
              />

              <Typography
                sx={{
                  fontSize: 30,
                  fontWeight: 900,
                  color: "text.primary",
                }}
              >
                Community Leaderboard
              </Typography>

            </Stack>

            <Typography
              sx={{
                color: "text.secondary",
              }}
            >
              Top residents leading water conservation this month.
            </Typography>

          </Box>

          <Chip
            icon={<GroupsRounded />}
            label="Live Rankings"
            sx={{
              bgcolor: "#EEF6FF",
              color: "#1976D2",
              fontWeight: 800,
            }}
          />

        </Stack>

        <Stack spacing={3}>
                    {leaders.map((leader, index) => (

            <motion.div
              key={leader.rank}
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
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: 3,
                  borderRadius: "24px",
                  bgcolor: "#F8FBFF",
                  border: "1px solid #E8EEF5",
                  transition: ".35s",

                  "&:hover": {
                    bgcolor: "background.paper",
                    boxShadow:
                      "0 15px 35px rgba(25,118,210,.12)",
                  },
                }}
              >

                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                >

                  <Avatar
                    sx={{
                      width: 64,
                      height: 64,
                      bgcolor: leader.color,
                      color: "#fff",
                      fontWeight: 900,
                      fontSize: 22,
                      boxShadow:
                        `0 15px 35px ${leader.color}50`,
                    }}
                  >
                    {leader.rank}
                  </Avatar>

                  <Box>

                    <Typography
                      sx={{
                        fontWeight: 800,
                        fontSize: 18,
                        color: "text.primary",
                      }}
                    >
                      {leader.name}
                    </Typography>

                    <Typography
                      sx={{
                        color: "text.secondary",
                      }}
                    >
                      Apartment {leader.house}
                    </Typography>

                  </Box>

                </Stack>

                <Box textAlign="right">

                  <Typography
                    sx={{
                      color: "#16A34A",
                      fontWeight: 900,
                      fontSize: 24,
                    }}
                  >
                    {leader.saved}
                  </Typography>

                  <Chip
                    icon={<EmojiEventsRounded />}
                    label={
                      leader.rank === 1
                        ? "Gold"
                        : leader.rank === 2
                        ? "Silver"
                        : "Bronze"
                    }
                    size="small"
                    sx={{
                      mt: 1,
                      bgcolor: `${leader.color}20`,
                      color: "text.primary",
                      fontWeight: 700,
                    }}
                  />

                </Box>

              </Box>

            </motion.div>

          ))}

          {/* ================= Community Impact ================= */}

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
                color: "#fff",
                position: "relative",
                overflow: "hidden",
              }}
            >

              {/* Decorative Circle */}

              <Box
                sx={{
                  position: "absolute",
                  width: 220,
                  height: 220,
                  borderRadius: "50%",
                  bgcolor: "rgba(255,255,255,.08)",
                  top: -90,
                  right: -70,
                }}
              />

              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                mb={3}
              >

                <TrendingUpRounded
                  sx={{
                    fontSize: 34,
                  }}
                />

                <Typography
                  sx={{
                    fontSize: 28,
                    fontWeight: 900,
                  }}
                >
                  Community Impact
                </Typography>

              </Stack>

              <Stack
                direction={{
                  xs: "column",
                  md: "row",
                }}
                spacing={4}
              >

                <Box flex={1}>

                  <Typography
                    sx={{
                      fontSize: 36,
                      fontWeight: 900,
                    }}
                  >
                    24,500 L
                  </Typography>

                  <Typography>
                    Water Saved This Month
                  </Typography>

                </Box>

                <Box flex={1}>

                  <Typography
                    sx={{
                      fontSize: 36,
                      fontWeight: 900,
                    }}
                  >
                    #12
                  </Typography>

                  <Typography>
                    Your Community Rank
                  </Typography>

                </Box>

                <Box flex={1}>

                  <Typography
                    sx={{
                      fontSize: 36,
                      fontWeight: 900,
                    }}
                  >
                    Gold
                  </Typography>

                  <Typography>
                    Conservation Badge
                  </Typography>

                </Box>

              </Stack>

            </Box>

          </motion.div>

        </Stack>

      </Paper>

    </motion.div>

  );

}