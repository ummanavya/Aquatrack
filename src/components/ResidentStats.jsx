import React from "react";
import { motion } from "framer-motion";

import {
  Box,
  Typography,
  Chip,
} from "@mui/material";

import {
  WaterDropRounded,
  ReceiptLongRounded,
  TrendingUpRounded,
  EmojiEventsRounded,
  ArrowUpwardRounded,
} from "@mui/icons-material";

const cards = [
  {
    title: "Today's Usage",
    value: "320 L",
    subtitle: "+12% from yesterday",
    icon: <WaterDropRounded fontSize="large" />,
    color: "#1976D2",
    gradient: "linear-gradient(135deg,#1976D2,#42A5F5)",
  },
  {
    title: "Monthly Usage",
    value: "12,450 L",
    subtitle: "Current Month",
    icon: <TrendingUpRounded fontSize="large" />,
    color: "#00ACC1",
    gradient: "linear-gradient(135deg,#00ACC1,#26C6DA)",
  },
  {
    title: "Current Bill",
    value: "₹850",
    subtitle: "Due in 5 Days",
    icon: <ReceiptLongRounded fontSize="large" />,
    color: "#FB8C00",
    gradient: "linear-gradient(135deg,#FB8C00,#FFB300)",
  },
  {
    title: "Eco Score",
    value: "92%",
    subtitle: "Excellent",
    icon: <EmojiEventsRounded fontSize="large" />,
    color: "#43A047",
    gradient: "linear-gradient(135deg,#43A047,#66BB6A)",
  },
];

export default function ResidentStats() {

  return (

    <Box
      sx={{

        mt: 1,

        width: "100%",

        display: "grid",

        gap: 3,

        gridTemplateColumns: {

          xs: "1fr",

          sm: "repeat(2,1fr)",

          md: "repeat(2,1fr)",

          lg: "repeat(4,minmax(0,1fr))",

        },

      }}
    >
            {cards.map((card, index) => (

        <motion.div
          key={card.title}
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          whileHover={{
            y: -10,
            scale: 1.02,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: index * 0.1,
            duration: 0.5,
          }}
          style={{
            height: "100%",
          }}
        >

          <Box
            sx={{

              position: "relative",

              overflow: "hidden",

              height: "100%",

              minHeight: 245,

              borderRadius: "28px",

              p: 3,

              bgcolor: "#FFFFFF",

              border: "1px solid #E8EEF5",

              boxShadow:
                "0 18px 45px rgba(15,23,42,.08)",

              transition: ".35s",

              display: "flex",

              flexDirection: "column",

              justifyContent: "space-between",

              "&:hover": {

                borderColor: "#1976D2",

                boxShadow:
                  "0 28px 60px rgba(25,118,210,.15)",

              },

            }}
          >

            {/* Decorative Circle */}

            <Box
              sx={{
                position: "absolute",
                width: 150,
                height: 150,
                borderRadius: "50%",
                background: `${card.color}12`,
                top: -70,
                right: -50,
              }}
            />

            {/* Header */}

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-start"
            >

              <Box
                sx={{
                  width: 72,
                  height: 72,
                  borderRadius: "20px",
                  background: card.gradient,
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow:
                    `0 18px 35px ${card.color}55`,
                }}
              >
                {card.icon}
              </Box>

              <Chip
                icon={
                  <ArrowUpwardRounded
                    sx={{
                      color: "#16A34A !important",
                    }}
                  />
                }
                label="Active"
                size="small"
                sx={{
                  bgcolor: "#ECFDF5",
                  color: "#16A34A",
                  fontWeight: 700,
                }}
              />

            </Box>

            <Box>

              <Typography
                sx={{
                  mt: 3,
                  color: "#64748B",
                  fontWeight: 700,
                  fontSize: 15,
                }}
              >
                {card.title}
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  fontSize: {
                    xs: 34,
                    md: 38,
                  },
                  fontWeight: 900,
                  color: "#0F172A",
                  letterSpacing: -0.5,
                }}
              >
                {card.value}
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  color: "#16A34A",
                  fontWeight: 700,
                  fontSize: 16,
                }}
              >
                {card.subtitle}
              </Typography>

            </Box>

          </Box>

        </motion.div>

      ))}
          </Box>

  );

}
