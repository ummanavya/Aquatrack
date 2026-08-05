import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Stack,
  Avatar,
  Chip,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";

import {
  SupportAgentRounded,
  ConfirmationNumberRounded,
  CheckCircleRounded,
  PendingActionsRounded,
  StarRounded,
} from "@mui/icons-material";

import ResidentSidebar from "../components/ResidentSidebar";
import ResidentTopbar from "../components/ResidentTopbar";

import "../styles/support.css";

const summaryCards = [
  {
    title: "Open Tickets",
    value: "03",
    subtitle: "Need Attention",
    color: "#1976D2",
    bg: "#EAF4FF",
    icon: <ConfirmationNumberRounded />,
  },
  {
    title: "Resolved",
    value: "18",
    subtitle: "Successfully Closed",
    color: "#43A047",
    bg: "#ECFDF5",
    icon: <CheckCircleRounded />,
  },
  {
    title: "Pending",
    value: "02",
    subtitle: "Waiting for Response",
    color: "#FB8C00",
    bg: "#FFF7E6",
    icon: <PendingActionsRounded />,
  },
  {
    title: "Support Rating",
    value: "4.9",
    subtitle: "Excellent",
    color: "#7E57C2",
    bg: "#F3E8FF",
    icon: <StarRounded />,
  },
];

export default function Support() {

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "#EEF5FD",
      }}
    >
      <ResidentSidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />

      <Box
        sx={{
          flex: 1,
          ml: {
            lg: "280px",
          },
        }}
      >
        <ResidentTopbar
          handleDrawerToggle={handleDrawerToggle}
        />

        <Container
          maxWidth={false}
          disableGutters
          sx={{
            mt: "90px",
            px: {
              xs: 2,
              sm: 3,
              md: 4,
              lg: 5,
            },
            pb: 6,
          }}
        >
          {/* ================= HERO ================= */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Paper
  elevation={0}
  className="supportHero"
  sx={{
    background:
      "linear-gradient(135deg,#1565C0 0%,#1976D2 55%,#42A5F5 100%)",
    color: "#fff",
    minHeight: 300,
    borderRadius: "32px",
    p: 6,
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 22px 45px rgba(25,118,210,.28)",
  }}
>
              <Box className="heroCircleOne" />
              <Box className="heroCircleTwo" />

              <Chip
label="🎧 Resident Help Center"
sx={{
background:"rgba(255,255,255,.18)",
color:"#fff",
fontWeight:700,
backdropFilter:"blur(10px)"
}}
/>

              <Typography
  sx={{
    mt:3,
    fontSize:48,
    fontWeight:900,
    color:"#fff",
  }}
>
                Support Center
              </Typography>

              <Typography
  sx={{
    mt:2,
    mb:4,
    maxWidth:700,
    color:"rgba(255,255,255,.95)",
    lineHeight:1.8,
    fontSize:18,
  }}
>
                Need help? Raise support tickets,
                contact the management team,
                browse FAQs and get quick assistance.
              </Typography>

              <Stack
                direction="row"
                spacing={2}
                mt={4}
                flexWrap="wrap"
                useFlexGap
              >
                <Chip label="🎫 3 Open Tickets" />
                <Chip label="✅ 18 Resolved" />
                <Chip label="⭐ 4.9 Rating" />
                <Chip label="💬 Live Support" />
              </Stack>
            </Paper>
          </motion.div>

          {/* ================= SUMMARY CARDS ================= */}

          <Grid
            container
            spacing={3}
            sx={{
              mt: 3,
              mb: 5,
            }}
          >
            {summaryCards.map((card) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={card.title}
              >
                <motion.div
                  whileHover={{
                    y: -8,
                  }}
                >
                  <Paper
                    elevation={0}
                    className="summaryCard"
                  >
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Box>
                        <Typography className="cardTitle">
                          {card.title}
                        </Typography>

                        <Typography
                          className="cardValue"
                          sx={{
                            color: card.color,
                          }}
                        >
                          {card.value}
                        </Typography>

                        <Typography className="cardSubtitle">
                          {card.subtitle}
                        </Typography>
                      </Box>

                      <Avatar
                        sx={{
                          width: 80,
                          height: 80,
                          bgcolor: card.bg,
                          color: card.color,
                        }}
                      >
                        {card.icon}
                      </Avatar>
                    </Stack>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* ========= PART 2 STARTS HERE ========= */}
          
{/* ========= PART 3 STARTS HERE ========= */}
{/* ================= FAQ & CONTACT ================= */}

<Grid
  container
  spacing={3}
  sx={{
    mb: 5,
  }}
>
  {/* ================= FAQ ================= */}

  <Grid item xs={12} lg={7}>
    <Paper
      elevation={0}
      className="faqSection"
    >
      <Typography
        className="sectionHeading"
        mb={4}
      >
        ❓ Frequently Asked Questions
      </Typography>

      {[
        {
          question: "How do I pay my water bill?",
          answer:
            "Go to Bills & Payments and click on 'Pay Now' to complete your payment securely.",
        },
        {
          question: "How can I report a water leakage?",
          answer:
            "Open the Support page, create a new support ticket, choose 'Leak Report' and submit the details.",
        },
        {
          question: "How do I update my profile?",
          answer:
            "Visit the Profile page and click Edit Profile to update your personal information.",
        },
        {
          question: "How can I redeem Eco Rewards?",
          answer:
            "Visit the Eco Rewards page, select an available reward, and redeem it using your earned points.",
        },
      ].map((faq) => (
        <Paper
          key={faq.question}
          elevation={0}
          sx={{
            p: 3,
            mb: 2,
            borderRadius: "18px",
            border: "1px solid #E8EEF5",
            bgcolor: "#F8FBFF",
          }}
        >
          <Typography
            fontWeight={800}
            fontSize={18}
          >
            {faq.question}
          </Typography>

          <Typography
            sx={{
              mt: 1.5,
              color: "#64748B",
              lineHeight: 1.8,
            }}
          >
            {faq.answer}
          </Typography>
        </Paper>
      ))}
    </Paper>
  </Grid>

  {/* ================= CONTACT SUPPORT ================= */}

  <Grid item xs={12} lg={5}>
    <Paper
      elevation={0}
      className="contactSection"
    >
      <Typography
        className="sectionHeading"
        mb={4}
      >
        📞 Contact Support
      </Typography>

      <Paper
        elevation={0}
        sx={{
          p: 3,
          mb: 3,
          borderRadius: "18px",
          bgcolor: "#EEF6FF",
        }}
      >
        <Typography fontWeight={800}>
          📧 Email
        </Typography>

        <Typography
          sx={{
            mt: 1,
            color: "#64748B",
          }}
        >
          support@aquatrack.com
        </Typography>
      </Paper>

      <Paper
        elevation={0}
        sx={{
          p: 3,
          mb: 3,
          borderRadius: "18px",
          bgcolor: "#ECFDF5",
        }}
      >
        <Typography fontWeight={800}>
          📞 Phone
        </Typography>

        <Typography
          sx={{
            mt: 1,
            color: "#64748B",
          }}
        >
          +91 98765 43210
        </Typography>
      </Paper>

      <Paper
        elevation={0}
        sx={{
          p: 3,
          mb: 3,
          borderRadius: "18px",
          bgcolor: "#FFF7ED",
        }}
      >
        <Typography fontWeight={800}>
          🏢 Office
        </Typography>

        <Typography
          sx={{
            mt: 1,
            color: "#64748B",
            lineHeight: 1.7,
          }}
        >
          AquaTrack Apartment Office<br />
          Ground Floor, Block A
        </Typography>
      </Paper>

      <Paper
        elevation={0}
        sx={{
          p: 3,
          borderRadius: "18px",
          bgcolor: "#F3E8FF",
        }}
      >
        <Typography fontWeight={800}>
          💬 Live Chat
        </Typography>

        <Typography
          sx={{
            mt: 1,
            color: "#64748B",
            lineHeight: 1.8,
          }}
        >
          Chat with our support team from
          <strong> 9:00 AM to 6:00 PM</strong>,
          Monday to Saturday.
        </Typography>

        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            borderRadius: "12px",
            textTransform: "none",
          }}
        >
          Start Chat
        </Button>
      </Paper>
    </Paper>
  </Grid>
</Grid>

{/* ========= PART 4 STARTS HERE ========= */}
{/* ================= QUICK ACTIONS ================= */}

<Paper
  elevation={0}
  className="quickSection"
>
  <Typography className="sectionHeading">
    ⚡ Quick Actions
  </Typography>

  <Grid
    container
    spacing={3}
    mt={2}
  >
    <Grid item xs={12} md={4}>
      <Paper
        elevation={0}
        className="quickCard"
      >
        <Typography fontSize={46}>
          📞
        </Typography>

        <Typography className="quickTitle">
          Call Support
        </Typography>

        <Typography className="quickText">
          Speak directly with the AquaTrack support team.
        </Typography>

        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            borderRadius: 3,
          }}
        >
          Call Now
        </Button>
      </Paper>
    </Grid>

    <Grid item xs={12} md={4}>
      <Paper
        elevation={0}
        className="quickCard"
      >
        <Typography fontSize={46}>
          💬
        </Typography>

        <Typography className="quickTitle">
          Live Chat
        </Typography>

        <Typography className="quickText">
          Chat instantly with our support executives.
        </Typography>

        <Button
          fullWidth
          variant="outlined"
          sx={{
            mt: 3,
            borderRadius: 3,
          }}
        >
          Start Chat
        </Button>
      </Paper>
    </Grid>

    <Grid item xs={12} md={4}>
      <Paper
        elevation={0}
        className="quickCard"
      >
        <Typography fontSize={46}>
          📖
        </Typography>

        <Typography className="quickTitle">
          User Guide
        </Typography>

        <Typography className="quickText">
          Learn how to use all AquaTrack resident features.
        </Typography>

        <Button
          fullWidth
          variant="outlined"
          sx={{
            mt: 3,
            borderRadius: 3,
          }}
        >
          View Guide
        </Button>
      </Paper>
    </Grid>
  </Grid>
</Paper>

{/* ================= HELP RESOURCES ================= */}

<Paper
  elevation={0}
  sx={{
    mt: 5,
    p: 4,
    borderRadius: "30px",
    border: "1px solid #E8EEF5",
    boxShadow: "0 18px 45px rgba(15,23,42,.06)",
  }}
>
  <Typography
    className="sectionHeading"
    mb={4}
  >
    📚 Help Resources
  </Typography>

  <Grid container spacing={3}>
    {[
      "💧 Water Usage Guide",
      "💳 Billing & Payments",
      "🎁 Eco Rewards Guide",
      "👤 Account Management",
    ].map((item) => (
      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        key={item}
      >
        <Paper
          elevation={0}
          sx={{
            height: 160,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            borderRadius: "22px",
            bgcolor: "#EEF6FF",
            fontWeight: 700,
            fontSize: 18,
          }}
        >
          {item}
        </Paper>
      </Grid>
    ))}
  </Grid>
</Paper>

{/* ================= FOOTER ================= */}

<Paper
  elevation={0}
  sx={{
    mt: 5,
    mb: 4,
    p: 5,
    borderRadius: "30px",
    textAlign: "center",
    background:
      "linear-gradient(135deg,#1565C0,#1976D2,#42A5F5)",
    color: "#fff",
  }}
>
  <Typography
    sx={{
      fontSize: 34,
      fontWeight: 900,
    }}
  >
    💙 We're Here to Help
  </Typography>

  <Typography
    sx={{
      mt: 2,
      maxWidth: 700,
      mx: "auto",
      lineHeight: 1.8,
      opacity: 0.95,
    }}
  >
    Our support team is committed to providing quick and
    reliable assistance. If you have any questions,
    don't hesitate to reach out through AquaTrack.
  </Typography>

  <Button
    variant="contained"
    sx={{
      mt: 4,
      bgcolor: "#fff",
      color: "#1976D2",
      px: 5,
      py: 1.4,
      borderRadius: "14px",
      textTransform: "none",
      fontWeight: 700,
      "&:hover": {
        bgcolor: "#F4F8FF",
      },
    }}
  >
    Contact Support
  </Button>
</Paper>

        </Container>
      </Box>
    </Box>
  );
}