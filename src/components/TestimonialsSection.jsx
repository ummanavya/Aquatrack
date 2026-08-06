import React from "react";

import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  LinearProgress,
  Rating,
  Stack,
  Typography,
} from "@mui/material";

import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import EmojiEmotionsRoundedIcon from "@mui/icons-material/EmojiEmotionsRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Anu",
    role: "Apartment Manager",
    initials: "RS",
    rating: 5,
    review:
      "AquaTrack completely transformed how we monitor water usage. Billing is automatic, reports are accurate, and leak alerts help us avoid unnecessary expenses.",
  },
  {
    name: "Priya Reddy",
    role: "Community Administrator",
    initials: "PR",
    rating: 5,
    review:
      "Managing multiple apartment blocks has become effortless. The dashboard is intuitive, and monthly billing takes only a few minutes.",
  },
  {
    name: "Arjun Kumar",
    role: "Facility Manager",
    initials: "AK",
    rating: 5,
    review:
      "Leak detection notifications helped us identify abnormal water consumption before it became a major issue, saving both water and maintenance costs.",
  },
];

export default function TestimonialsSection() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        py: {
          xs: 12,
          md: 18,
        },
        background:
          "linear-gradient(180deg,#FFFFFF 0%,#F7FBFF 55%,#EEF6FF 100%)",
      }}
    >
      {/* Background Glow */}

      <Box
        sx={{
          position: "absolute",
          top: -180,
          left: -180,
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: "#42A5F520",
          filter: "blur(120px)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: -150,
          right: -120,
          width: 360,
          height: 360,
          borderRadius: "50%",
          background: "#1976D220",
          filter: "blur(110px)",
        }}
      />

      {/* Floating Bubble */}

      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, 12, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        style={{
          position: "absolute",
          top: "14%",
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
        {/* Header */}

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
              label="💬 TESTIMONIALS"
              sx={{
                px: 2,
                py: 2.7,
                borderRadius: "40px",
                fontWeight: 700,
                color: "#fff",
                background:
                  "linear-gradient(90deg,#1976D2,#42A5F5)",
                boxShadow:
                  "0 15px 35px rgba(25,118,210,.30)",
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
              Trusted by
              <br />
              <Box
                component="span"
                sx={{
                  color: "#1976D2",
                }}
              >
                Apartment Communities
              </Box>
            </Typography>

            <Typography
              align="center"
              sx={{
                maxWidth: 760,
                color: "#64748B",
                fontSize: 19,
                lineHeight: 1.9,
              }}
            >
              See how apartment managers,
              administrators and residents
              use AquaTrack to simplify
              water monitoring, billing,
              reporting and leak detection.
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

        {/* ================= TESTIMONIAL CONTENT ================= */}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              lg: "1.35fr .65fr",
            },
            gap: 5,
            alignItems: "start",
          }}
        >
                    {/* ================= LEFT SIDE ================= */}

          <Box>
            {testimonials.map((user, index) => (
              <motion.div
                key={user.name}
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
                <Card
                  sx={{
                    mb: 4,
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "30px",
                    background: "rgba(255,255,255,.82)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(25,118,210,.08)",
                    boxShadow:
                      "0 20px 50px rgba(15,23,42,.08)",

                    "&:hover": {
                      boxShadow:
                        "0 30px 80px rgba(25,118,210,.18)",
                    },

                    "&::before": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: 6,
                      height: "100%",
                      background:
                        "linear-gradient(#1976D2,#42A5F5)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      mb={3}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.3 + index * 0.15,
                        }}
                      >
                        <Rating
                          value={user.rating}
                          readOnly
                          icon={
                            <StarRoundedIcon fontSize="inherit" />
                          }
                          emptyIcon={
                            <StarRoundedIcon fontSize="inherit" />
                          }
                        />
                      </motion.div>

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
                            width: 56,
                            height: 56,
                            bgcolor: "#E3F2FD",
                            color: "#1976D2",
                          }}
                        >
                          <FormatQuoteRoundedIcon />
                        </Avatar>
                      </motion.div>
                    </Box>

                    <Typography
                      sx={{
                        color: "#475569",
                        fontSize: 17,
                        lineHeight: 1.9,
                        mb: 4,
                        fontStyle: "italic",
                      }}
                    >
                      "{user.review}"
                    </Typography>

                    <Box
                      display="flex"
                      alignItems="center"
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.12,
                        }}
                      >
                        <Avatar
                          sx={{
                            bgcolor: "#2196F3",
                            width: 60,
                            height: 60,
                            fontWeight: 800,
                            mr: 2,
                            boxShadow:
                              "0 15px 30px rgba(33,150,243,.35)",
                          }}
                        >
                          {user.initials}
                        </Avatar>
                      </motion.div>

                      <Box>
                        <Typography
                          sx={{
                            fontWeight: 800,
                            fontSize: 18,
                          }}
                        >
                          {user.name}
                        </Typography>

                        <Typography
                          sx={{
                            color: "#64748B",
                          }}
                        >
                          {user.role}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>

          {/* ================= RIGHT SIDE ================= */}

          <Box>
            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              <Card
                sx={{
                  borderRadius: "32px",
                  overflow: "hidden",
                  position: "sticky",
                  top: 120,
                  background:
                    "linear-gradient(180deg,#1976D2,#42A5F5)",
                  color: "#fff",
                  mb: 4,
                  boxShadow:
                    "0 25px 70px rgba(25,118,210,.30)",
                }}
              >
                <CardContent sx={{ p: 5 }}>
                  <Typography
                    sx={{
                      fontWeight: 900,
                      fontSize: 42,
                    }}
                  >
                    4.9
                  </Typography>

                  <Rating
                    value={5}
                    readOnly
                    sx={{
                      color: "#FFD54F",
                      mb: 2,
                    }}
                  />

                  <Typography
                    sx={{
                      opacity: .9,
                      mb: 4,
                    }}
                  >
                    Average Customer Rating
                  </Typography>

                  <LinearProgress
                    variant="determinate"
                    value={98}
                    sx={{
                      height: 10,
                      borderRadius: 10,
                      mb: 4,
                      bgcolor:
                        "rgba(255,255,255,.25)",

                      "& .MuiLinearProgress-bar": {
                        bgcolor: "#fff",
                      },
                    }}
                  />

                  {[
                    {
                      icon: <EmojiEmotionsRoundedIcon />,
                      title: "98% Satisfaction",
                    },
                    {
                      icon: <GroupsRoundedIcon />,
                      title: "500+ Communities",
                    },
                    {
                      icon: <TrendingUpRoundedIcon />,
                      title: "24/7 Support",
                    },
                  ].map((item) => (
                    <motion.div
                      key={item.title}
                      whileHover={{
                        x: 8,
                      }}
                    >
                      <Box
                        display="flex"
                        alignItems="center"
                        mb={3}
                      >
                        <Avatar
                          sx={{
                            mr: 2,
                            bgcolor:
                              "rgba(255,255,255,.18)",
                          }}
                        >
                          {item.icon}
                        </Avatar>

                        <Typography
                          fontWeight={700}
                        >
                          {item.title}
                        </Typography>
                      </Box>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
                        <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.9,
                delay: 0.2,
              }}
            >
              <Card
                sx={{
                  borderRadius: "30px",
                  background: "rgba(255,255,255,.85)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(25,118,210,.08)",
                  boxShadow:
                    "0 20px 50px rgba(15,23,42,.08)",
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: 24,
                      mb: 4,
                      color: "#0F172A",
                    }}
                  >
                    Why Customers Trust AquaTrack
                  </Typography>

                  {[
                    {
                      label: "Customer Satisfaction",
                      value: 98,
                    },
                    {
                      label: "Billing Accuracy",
                      value: 99,
                    },
                    {
                      label: "System Reliability",
                      value: 100,
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{
                        opacity: 0,
                        x: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: index * 0.2,
                      }}
                    >
                      <Box mb={3}>
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          mb={1}
                        >
                          <Typography fontWeight={600}>
                            {item.label}
                          </Typography>

                          <Typography fontWeight={700}>
                            {item.value}%
                          </Typography>
                        </Box>

                        <LinearProgress
                          variant="determinate"
                          value={item.value}
                          sx={{
                            height: 9,
                            borderRadius: 10,
                          }}
                        />
                      </Box>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </Box>
        </Box>

        {/* ================= STATS ================= */}

        <Box
          sx={{
            mt: 10,
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2,1fr)",
              md: "repeat(4,1fr)",
            },
            gap: 3,
          }}
        >
          {[
            ["500+", "Apartment Communities"],
            ["25K+", "Monthly Bills"],
            ["98%", "Customer Satisfaction"],
            ["24/7", "Support"],
          ].map((item, index) => (
            <motion.div
              key={item[0]}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
            >
              <Card
                sx={{
                  textAlign: "center",
                  borderRadius: "26px",
                  background: "rgba(255,255,255,.85)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(25,118,210,.08)",
                  boxShadow:
                    "0 18px 45px rgba(15,23,42,.06)",
                }}
              >
                <CardContent>
                  <Typography
                    sx={{
                      fontWeight: 900,
                      fontSize: 38,
                      color: "#1976D2",
                    }}
                  >
                    {item[0]}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#64748B",
                    }}
                  >
                    {item[1]}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>

      {/* ================= BOTTOM WAVE ================= */}

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
          viewBox="0 0 1440 180"
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