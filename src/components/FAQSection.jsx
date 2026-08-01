import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Button,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";

import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import { motion } from "framer-motion";

const faqs = [
  {
    question: "How does AquaTrack calculate water bills?",
    answer:
      "AquaTrack automatically calculates monthly water bills using configurable tariff plans, water consumption, fixed charges and billing cycles.",
  },
  {
    question: "Can AquaTrack detect water leaks?",
    answer:
      "Yes. AquaTrack continuously monitors water usage and alerts administrators whenever abnormal consumption indicates a possible leak.",
  },
  {
    question: "Is AquaTrack secure?",
    answer:
      "Yes. AquaTrack uses JWT authentication, role-based access control and secure REST APIs to protect user data.",
  },
  {
    question: "Can residents view their own bills?",
    answer:
      "Residents can securely log in to view water usage history, bills, payments and notifications from their dashboard.",
  },
  {
    question: "Can AquaTrack manage multiple apartments?",
    answer:
      "Yes. AquaTrack supports multiple apartments, households, residents and billing cycles from a centralized admin dashboard.",
  },
];

export default function FAQSection() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "visible",
        py: { xs: 10, md: 14 },
        background:
          "linear-gradient(180deg,#F8FBFF 0%,#FFFFFF 60%,#F5FAFF 100%)",
      }}
    >
      {/* Background Blur */}

      <Box
        sx={{
          position: "absolute",
          top: -180,
          left: -180,
          width: 400,
          height: 400,
          borderRadius: "50%",
          bgcolor: "rgba(66,165,245,.18)",
          filter: "blur(120px)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: -180,
          right: -180,
          width: 420,
          height: 420,
          borderRadius: "50%",
          bgcolor: "rgba(25,118,210,.15)",
          filter: "blur(120px)",
        }}
      />

      {/* Floating Circle */}

      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        style={{
          position: "absolute",
          top: "15%",
          right: "8%",
        }}
      >
        <Box
          sx={{
            width: 90,
            height: 90,
            borderRadius: "50%",
            background:
              "linear-gradient(135deg,rgba(144,202,249,.6),rgba(227,242,253,.6))",
            backdropFilter: "blur(10px)",
          }}
        />
      </motion.div>

      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Stack
            spacing={3}
            alignItems="center"
            sx={{ mb: 7 }}
          >
            <Chip
              icon={<HelpOutlineRoundedIcon />}
              label="FREQUENTLY ASKED QUESTIONS"
              sx={{
                color: "#fff",
                fontWeight: 700,
                px: 2,
                py: 2.6,
                borderRadius: "50px",
                background:
                  "linear-gradient(90deg,#1976D2,#42A5F5)",
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
                  md: "4rem",
                },
              }}
            >
              Frequently Asked
              <br />
              <Box
                component="span"
                sx={{
                  color: "#1976D2",
                }}
              >
                Questions
              </Box>
            </Typography>

            <Typography
              align="center"
              sx={{
                maxWidth: 700,
                color: "#64748B",
                fontSize: 18,
                lineHeight: 1.8,
              }}
            >
              Find answers to the most common questions about
              AquaTrack, billing, leak detection, water usage,
              security and apartment management.
            </Typography>
          </Stack>
        </motion.div>

        {/* FAQ LIST STARTS HERE */}

        <Stack spacing={2.5}>
                    {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <Accordion
                disableGutters
                elevation={0}
                expanded={expanded === index}
                onChange={handleChange(index)}
                sx={{
                  overflow: "hidden",
                  borderRadius: "20px",
                  background: "#FFFFFF",
                  border: "1px solid #E3F2FD",
                  boxShadow: "0 8px 30px rgba(15,23,42,0.06)",

                  "&::before": {
                    display: "none",
                  },

                  transition: "all .3s ease",

                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow:
                      "0 18px 40px rgba(25,118,210,0.12)",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <Box
                      sx={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        bgcolor:
                          expanded === index
                            ? "#1976D2"
                            : "#E3F2FD",

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",

                        transition: ".3s",
                      }}
                    >
                      <motion.div
                        animate={{
                          rotate:
                            expanded === index ? 180 : 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                      >
                        <ExpandMoreRoundedIcon
                          sx={{
                            color:
                              expanded === index
                                ? "#fff"
                                : "#1976D2",
                          }}
                        />
                      </motion.div>
                    </Box>
                  }
                  sx={{
                    px: 3.5,
                    py: 1.8,

                    "& .MuiAccordionSummary-content": {
                      my: 1,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: "#0F172A",
                      fontSize: {
                        xs: 17,
                        md: 19,
                      },
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails
                  sx={{
                    px: 3.5,
                    pb: 3.5,
                    pt: 0,

                    background:
                      "linear-gradient(180deg,#F8FBFF 0%,#EEF6FF 100%)",

                    borderTop:
                      "1px solid rgba(25,118,210,.08)",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#54657E",
                      lineHeight: 1.9,
                      fontSize: 16,
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Stack>
                {/* ================= COMPACT SUPPORT SECTION ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              mt: 6,
              p: { xs: 4, md: 5 },
              borderRadius: "24px",
              textAlign: "center",

              background:
                "linear-gradient(135deg,#1976D2 0%,#42A5F5 100%)",

              color: "#fff",

              boxShadow:
                "0 20px 50px rgba(25,118,210,.18)",
            }}
          >
            <Typography
              sx={{
                fontWeight: 800,
                mb: 1,
                fontSize: {
                  xs: "1.8rem",
                  md: "2.4rem",
                },
              }}
            >
              Still Have Questions?
            </Typography>

            <Typography
              sx={{
                maxWidth: 650,
                mx: "auto",
                opacity: 0.92,
                mb: 4,
                lineHeight: 1.8,
                fontSize: 16,
              }}
            >
              Our support team is always ready to help you with
              billing, water monitoring, leak detection and every
              AquaTrack feature.
            </Typography>

            <Button
              variant="contained"
              endIcon={<ArrowForwardRoundedIcon />}
              sx={{
                bgcolor: "#fff",
                color: "#1976D2",

                px: 5,
                py: 1.5,

                borderRadius: "50px",

                fontWeight: 700,
                textTransform: "none",

                "&:hover": {
                  bgcolor: "#F5F9FF",
                },
              }}
            >
              Contact Support
            </Button>
          </Box>
        </motion.div>

      </Container>
    </Box>
  );
}