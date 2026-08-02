import React from "react";
import { motion } from "framer-motion";

import {
  Paper,
  Box,
  Typography,
  Avatar,
  Chip,
  Stack,
  Divider,
  LinearProgress,
} from "@mui/material";

import {
  VerifiedRounded,
  EmailRounded,
  PhoneRounded,
  ApartmentRounded,
  WaterDropRounded,
  EmojiEventsRounded,
} from "@mui/icons-material";

export default function ProfileCard() {

  return (

    <motion.div
      initial={{
        opacity: 0,
        x: -30,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: .6,
      }}
    >

      <Paper
        elevation={0}
        sx={{
          borderRadius: "30px",
          overflow: "hidden",
          border: "1px solid #E5E7EB",
          boxShadow:
            "0 20px 45px rgba(15,23,42,.08)",
        }}
      >

        {/* ================= Header ================= */}

        <Box
          sx={{
            height: 140,
            background:
              "linear-gradient(135deg,#1976D2,#42A5F5)",
            position: "relative",
          }}
        >

          <Box
            sx={{
              position: "absolute",
              width: 180,
              height: 180,
              borderRadius: "50%",
              bgcolor: "rgba(255,255,255,.08)",
              top: -60,
              right: -60,
            }}
          />

        </Box>

        {/* ================= Avatar ================= */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: "-55px",
            position: "relative",
            zIndex: 5,
          }}
        >

          <Avatar
            sx={{
              width: 110,
              height: 110,
              fontSize: 42,
              bgcolor: "#1976D2",
              border: "6px solid white",
              fontWeight: 700,
            }}
          >
            N
          </Avatar>

        </Box>

        <Box
          sx={{
            p: 4,
            pt: 2,
            textAlign: "center",
          }}
        >

          <Typography
            sx={{
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            Navya
          </Typography>

          <Stack
            direction="row"
            justifyContent="center"
            mt={1}
          >

            <Chip
              icon={<VerifiedRounded />}
              label="Verified Resident"
              color="success"
            />

          </Stack>
                    {/* ================= Resident Details ================= */}

          <Divider
            sx={{
              my: 3,
            }}
          />

          <Stack
            spacing={2.5}
          >

            <Box
              display="flex"
              alignItems="center"
              gap={2}
            >

              <EmailRounded
                sx={{
                  color: "#1976D2",
                }}
              />

              <Box>

                <Typography
                  sx={{
                    fontSize: 13,
                    color: "#64748B",
                  }}
                >
                  Email Address
                </Typography>

                <Typography
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  navya@gmail.com
                </Typography>

              </Box>

            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap={2}
            >

              <PhoneRounded
                sx={{
                  color: "#16A34A",
                }}
              />

              <Box>

                <Typography
                  sx={{
                    fontSize: 13,
                    color: "#64748B",
                  }}
                >
                  Mobile Number
                </Typography>

                <Typography
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  +91 9876543210
                </Typography>

              </Box>

            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap={2}
            >

              <ApartmentRounded
                sx={{
                  color: "#FB8C00",
                }}
              />

              <Box>

                <Typography
                  sx={{
                    fontSize: 13,
                    color: "#64748B",
                  }}
                >
                  Apartment
                </Typography>

                <Typography
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  Aqua Residency
                </Typography>

              </Box>

            </Box>

          </Stack>

          <Divider
            sx={{
              my: 3,
            }}
          />

          {/* ================= Eco Badge ================= */}

          <Box
            sx={{
              bgcolor: "#F8FBFF",
              borderRadius: "22px",
              p: 3,
            }}
          >

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >

              <Box>

                <Typography
                  sx={{
                    color: "#64748B",
                    fontSize: 13,
                  }}
                >
                  Eco Level
                </Typography>

                <Typography
                  sx={{
                    mt: 1,
                    fontWeight: 800,
                    fontSize: 24,
                  }}
                >
                  Gold Member
                </Typography>

              </Box>

              <Avatar
                sx={{
                  bgcolor: "#FFF8E1",
                  color: "#F59E0B",
                }}
              >
                <EmojiEventsRounded />
              </Avatar>

            </Stack>

          </Box>
                    <Divider
            sx={{
              my: 3,
            }}
          />

          {/* ================= Profile Completion ================= */}

          <Typography
            sx={{
              fontWeight: 700,
              color: "#0F172A",
              mb: 1,
            }}
          >
            Profile Completion
          </Typography>

          <LinearProgress
            variant="determinate"
            value={92}
            sx={{
              height: 10,
              borderRadius: 20,

              "& .MuiLinearProgress-bar": {
                borderRadius: 20,
              },
            }}
          />

          <Typography
            sx={{
              mt: 1,
              color: "#64748B",
              fontSize: 14,
            }}
          >
            92% Completed
          </Typography>

          {/* ================= Water Saving ================= */}

          <Box
            sx={{
              mt: 4,
              p: 3,
              borderRadius: "20px",
              background:
                "linear-gradient(135deg,#1976D2,#42A5F5)",
              color: "#FFFFFF",
            }}
          >

            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
            >

              <Avatar
                sx={{
                  bgcolor: "rgba(255,255,255,.18)",
                }}
              >
                <WaterDropRounded />
              </Avatar>

              <Box>

                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: 20,
                  }}
                >
                  1,250 Litres Saved
                </Typography>

                <Typography
                  sx={{
                    opacity: .9,
                    mt: .5,
                    lineHeight: 1.7,
                  }}
                >
                  Excellent work! Keep saving water to
                  unlock your next Eco Reward badge.
                </Typography>

              </Box>

            </Stack>

          </Box>

        </Box>

      </Paper>

    </motion.div>

  );

}