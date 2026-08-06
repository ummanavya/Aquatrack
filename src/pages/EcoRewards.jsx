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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

import {
  EmojiEventsRounded,
  WaterDropRounded,
  WorkspacePremiumRounded,
  StarsRounded,
  TrendingUpRounded,
} from "@mui/icons-material";


import ResidentSidebar from "../components/ResidentSidebar";
import ResidentTopbar from "../components/ResidentTopbar";
import Zoom from "@mui/material/Zoom";
import CelebrationRoundedIcon from "@mui/icons-material/CelebrationRounded";
import "../styles/ecoRewards.css";

const summaryCards = [
  {
    title: "Eco Score",
    value: "92",
    subtitle: "Excellent Performance",
    color: "#1976D2",
    bg: "#EAF4FF",
    icon: <StarsRounded />,
  },
  {
    title: "Water Saved",
    value: "520 L",
    subtitle: "This Month",
    color: "#00ACC1",
    bg: "#E6FAFD",
    icon: <WaterDropRounded />,
  },
  {
    title: "Reward Points",
    value: "1250",
    subtitle: "Available",
    color: "#43A047",
    bg: "#ECFDF5",
    icon: <EmojiEventsRounded />,
  },
  {
    title: "Apartment Rank",
    value: "#12",
    subtitle: "Top Residents",
    color: "#FB8C00",
    bg: "#FFF7E6",
    icon: <TrendingUpRounded />,
  },
];

export default function EcoRewards() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [rewardDialog, setRewardDialog] = useState(false);
const [selectedReward, setSelectedReward] = useState("");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const claimReward = (reward) => {
  setSelectedReward(reward.title);
  setRewardDialog(true);
};

const closeRewardDialog = () => {
  setRewardDialog(false);
};

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "#EEF5FD",
      }}
    >
      {/* Sidebar */}

      <ResidentSidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />

      {/* Main Content */}

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
{/* ================= HERO ================= */}

<motion.div
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <Paper
    elevation={0}
    sx={{
      position: "relative",
      overflow: "hidden",
      borderRadius: "34px",
      p: {
        xs: 4,
        md: 6,
      },
      mb: 4,
      background:
        "linear-gradient(135deg,#1565C0 0%,#1976D2 45%,#42A5F5 100%)",
      color: "#fff",
      boxShadow: "0 20px 45px rgba(25,118,210,.25)",
    }}
  >
    {/* Decorative Circles */}

    <Box
      sx={{
        position: "absolute",
        top: -80,
        right: -70,
        width: 240,
        height: 240,
        borderRadius: "50%",
        bgcolor: "rgba(255,255,255,.10)",
      }}
    />

    <Box
      sx={{
        position: "absolute",
        bottom: -90,
        left: -70,
        width: 180,
        height: 180,
        borderRadius: "50%",
        bgcolor: "rgba(255,255,255,.08)",
      }}
    />

    {/* Hero Content */}

    <Box
      sx={{
        position: "relative",
        zIndex: 2,
      }}
    >
      <Chip
        label="🌱 Resident Eco Dashboard"
        sx={{
          bgcolor: "rgba(255,255,255,.18)",
          color: "#fff",
          fontWeight: 700,
          borderRadius: "20px",
          mb: 3,
          backdropFilter: "blur(10px)",
        }}
      />

      <Typography
        sx={{
          fontSize: {
            xs: 38,
            md: 56,
          },
          fontWeight: 900,
          color: "#fff",
          mb: 2,
        }}
      >
        🌱 Eco Rewards
      </Typography>

      <Typography
        sx={{
          maxWidth: 760,
          color: "rgba(255,255,255,.92)",
          fontSize: {
            xs: 17,
            md: 20,
          },
          lineHeight: 1.8,
        }}
      >
        Save water, earn reward points, unlock badges,
        redeem exciting coupons and become one of the
        top eco-friendly residents in AquaTrack.
      </Typography>

      <Stack
        direction="row"
        spacing={2}
        mt={4}
        flexWrap="wrap"
        useFlexGap
      >
        <Chip
          label="🏆 Gold Member"
          sx={{
            bgcolor: "rgba(255,255,255,.18)",
            color: "#fff",
            fontWeight: 700,
          }}
        />

        <Chip
          label="⭐ 1250 Points"
          sx={{
            bgcolor: "rgba(255,255,255,.18)",
            color: "#fff",
            fontWeight: 700,
          }}
        />

        <Chip
          label="💧 520L Saved"
          sx={{
            bgcolor: "rgba(255,255,255,.18)",
            color: "#fff",
            fontWeight: 700,
          }}
        />

        <Chip
          label="📈 Rank #12"
          sx={{
            bgcolor: "rgba(255,255,255,.18)",
            color: "#fff",
            fontWeight: 700,
          }}
        />
      </Stack>
    </Box>
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
                    scale: 1.02,
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
                          width: 82,
                          height: 82,
                          bgcolor: card.bg,
                          color: card.color,
                        }}
                      >
                        {card.icon}
                      </Avatar>
                    </Stack>

                    <Box
                      sx={{
                        mt: 3,
                        width: 70,
                        height: 5,
                        borderRadius: 10,
                        bgcolor: card.color,
                      }}
                    />
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* ========= PART 2 STARTS HERE ========= */}
          {/* ================= AVAILABLE REWARDS ================= */}

<Paper
  elevation={0}
  className="rewardSection"
>
  <Stack
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    mb={4}
  >
    <Box>
      <Typography className="sectionHeading">
        🎁 Available Rewards
      </Typography>

      <Typography color="text.secondary">
        Redeem your earned points for exciting rewards.
      </Typography>
    </Box>

    <Chip
      label="4 Rewards Available"
      color="success"
      sx={{
        fontWeight: 700,
      }}
    />
  </Stack>

  <Grid container spacing={3}>

    {[
      {
        icon: "☕",
        title: "Coffee Coupon",
        points: "300 Points",
        color: "#8D6E63",
      },
      {
        icon: "🍕",
        title: "Pizza Voucher",
        points: "500 Points",
        color: "#FB8C00",
      },
      {
        icon: "🛒",
        title: "Shopping Voucher",
        points: "1000 Points",
        color: "#43A047",
      },
      {
        icon: "🎬",
        title: "Movie Ticket",
        points: "1500 Points",
        color: "#1976D2",
      },
    ].map((reward) => (

      <Grid
        item
        xs={12}
        sm={6}
        md={3}
        key={reward.title}
      >

        <motion.div
          whileHover={{
            y: -10,
            scale: 1.03,
          }}
        >

          <Paper
            elevation={0}
            className="rewardCard"
          >

            <Avatar
              sx={{
                width: 72,
                height: 72,
                mx: "auto",
                mb: 2,
                bgcolor: `${reward.color}20`,
                color: reward.color,
                fontSize: 34,
              }}
            >
              {reward.icon}
            </Avatar>

            <Typography className="rewardTitle">
              {reward.title}
            </Typography>

            <Chip
              label={reward.points}
              sx={{
                mt: 2,
                bgcolor: "#EEF6FF",
                color: "#1976D2",
                fontWeight: 700,
              }}
            />

            <Chip
              label="Available"
              color="success"
              size="small"
              sx={{
                mt: 2,
                display: "flex",
                mx: "auto",
                width: "fit-content",
              }}
            />

            <Button
  fullWidth
  variant="contained"
  onClick={() => claimReward(reward)}
  sx={{
    mt: 3,
    py: 1.2,
    borderRadius: "14px",
    textTransform: "none",
    fontWeight: 700,
  }}
>
  Redeem Reward
</Button>

          </Paper>

        </motion.div>

      </Grid>

    ))}

  </Grid>

</Paper>

{/* ================= CURRENT BADGE & ECO TIPS ================= */}

<Grid
  container
  spacing={3}
  sx={{
    mb: 5,
  }}
>
  {/* LEFT */}

  <Grid
    item
    xs={12}
    lg={5}
  >
    <Paper
      elevation={0}
      className="progressSection"
    >
      <Typography className="sectionHeading">
        🌟 Current Badge
      </Typography>

      <Box
        sx={{
          textAlign: "center",
          mt: 4,
        }}
      >
        <Avatar
          sx={{
            width: 120,
            height: 120,
            mx: "auto",
            bgcolor: "#FFF4E5",
            color: "#FB8C00",
          }}
        >
          <WorkspacePremiumRounded
            sx={{
              fontSize: 65,
            }}
          />
        </Avatar>

        <Typography
          sx={{
            mt: 3,
            fontSize: 34,
            fontWeight: 900,
          }}
        >
          Gold
        </Typography>

        <Typography
          sx={{
            mt: 1,
            color: "#64748B",
          }}
        >
          You're one of AquaTrack's
          top eco-friendly residents.
        </Typography>

        <Typography
          sx={{
            mt: 4,
            fontWeight: 700,
          }}
        >
          Progress to Platinum
        </Typography>

        <Box className="progressBar">
          <Box
            className="progressFill"
            sx={{
              width: "72%",
            }}
          />
        </Box>

        <Typography
          mt={1}
          color="primary"
          fontWeight={800}
        >
          72%
        </Typography>
      </Box>
    </Paper>
  </Grid>

  {/* RIGHT */}

  <Grid
    item
    xs={12}
    lg={7}
  >
    <Stack spacing={3}>

      <Paper
        elevation={0}
        sx={{
          p: 4,
          borderRadius: "24px",
          bgcolor: "#EEF6FF",
        }}
      >
        <Typography
          sx={{
            fontSize: 24,
            fontWeight: 800,
          }}
        >
          💧 Save More Water
        </Typography>

        <Typography
          sx={{
            mt: 2,
            color: "#64748B",
            lineHeight: 1.8,
          }}
        >
          Reduce shower time by just 2 minutes every day to save nearly
          40 litres of water each week.
        </Typography>
      </Paper>

      <Paper
        elevation={0}
        sx={{
          p: 4,
          borderRadius: "24px",
          bgcolor: "#ECFDF5",
        }}
      >
        <Typography
          sx={{
            fontSize: 24,
            fontWeight: 800,
          }}
        >
          🌱 Eco Challenge
        </Typography>

        <Typography
          sx={{
            mt: 2,
            color: "#64748B",
            lineHeight: 1.8,
          }}
        >
          Save another <b>280 Litres</b> this month to unlock
          the Platinum Badge.
        </Typography>
      </Paper>

      <Paper
        elevation={0}
        sx={{
          p: 4,
          borderRadius: "24px",
          bgcolor: "#FFF7ED",
        }}
      >
        <Typography
          sx={{
            fontSize: 24,
            fontWeight: 800,
          }}
        >
          🏆 Reward Tip
        </Typography>

        <Typography
          sx={{
            mt: 2,
            color: "#64748B",
            lineHeight: 1.8,
          }}
        >
          Complete weekly water-saving goals and pay bills on time
          to earn bonus reward points.
        </Typography>
      </Paper>

    </Stack>
  </Grid>
</Grid>

{/* ========= PART 3 STARTS HERE ========= */}
{/* ================= RECENT ACHIEVEMENTS ================= */}

<Paper
  elevation={0}
  className="achievementSection"
>
  <Typography className="sectionHeading">
    🏅 Recent Achievements
  </Typography>

  <Grid container spacing={3} mt={2}>
    {[
      "Saved 500 Litres",
      "No Leak Alerts",
      "Paid Bills On Time",
      "Top 20 Resident",
    ].map((item) => (
      <Grid item xs={12} sm={6} md={3} key={item}>
        <motion.div whileHover={{ y: -8 }}>
          <Paper
            elevation={0}
            className="achievementCard"
          >
            <Avatar
              sx={{
                bgcolor: "#ECFDF5",
                color: "#43A047",
                width: 70,
                height: 70,
                mx: "auto",
                mb: 2,
              }}
            >
              <EmojiEventsRounded />
            </Avatar>

            <Typography className="achievementTitle">
              {item}
            </Typography>
          </Paper>
        </motion.div>
      </Grid>
    ))}
  </Grid>
</Paper>

{/* ================= MONTHLY PROGRESS ================= */}

<Paper
  elevation={0}
  className="monthlySection"
>
  <Typography className="sectionHeading">
    📈 Monthly Eco Progress
  </Typography>

  <Grid container spacing={3} mt={2}>
    {[
      {
        month: "April",
        value: "420 L",
        progress: "45%",
        color: "#42A5F5",
      },
      {
        month: "May",
        value: "510 L",
        progress: "60%",
        color: "#00ACC1",
      },
      {
        month: "June",
        value: "590 L",
        progress: "75%",
        color: "#43A047",
      },
      {
        month: "July",
        value: "720 L",
        progress: "90%",
        color: "#1976D2",
      },
    ].map((month) => (
      <Grid item xs={12} sm={6} md={3} key={month.month}>
        <Paper
          elevation={0}
          className="monthCard"
        >
          <Typography className="monthName">
            {month.month}
          </Typography>

          <Box
            sx={{
              mt: 3,
              height: 12,
              bgcolor: "#EEF2F7",
              borderRadius: 20,
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                width: month.progress,
                height: "100%",
                bgcolor: month.color,
              }}
            />
          </Box>

          <Typography
            sx={{
              mt: 2,
              fontWeight: 800,
              color: month.color,
            }}
          >
            {month.value}
          </Typography>
        </Paper>
      </Grid>
    ))}
  </Grid>
</Paper>

{/* ================= QUICK ACTIONS ================= */}

<Paper
  elevation={0}
  className="quickSection"
>
  <Typography className="sectionHeading">
    ⚡ Quick Actions
  </Typography>

  <Grid container spacing={3} mt={2}>

    <Grid item xs={12} md={4}>
      <Paper elevation={0} className="quickCard">
        <Typography fontSize={45}>🎁</Typography>

        <Typography className="quickTitle">
          Redeem Rewards
        </Typography>

        <Typography className="quickText">
          Exchange your reward points for exciting coupons.
        </Typography>

        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            borderRadius: 3,
          }}
        >
          Redeem
        </Button>
      </Paper>
    </Grid>

    <Grid item xs={12} md={4}>
      <Paper elevation={0} className="quickCard">
        <Typography fontSize={45}>🏆</Typography>

        <Typography className="quickTitle">
          Leaderboard
        </Typography>

        <Typography className="quickText">
          View your apartment ranking.
        </Typography>

        <Button
          fullWidth
          variant="outlined"
          sx={{
            mt: 3,
            borderRadius: 3,
          }}
        >
          View
        </Button>
      </Paper>
    </Grid>

    <Grid item xs={12} md={4}>
      <Paper elevation={0} className="quickCard">
        <Typography fontSize={45}>📜</Typography>

        <Typography className="quickTitle">
          Reward History
        </Typography>

        <Typography className="quickText">
          View previously redeemed rewards.
        </Typography>

        <Button
          fullWidth
          variant="outlined"
          sx={{
            mt: 3,
            borderRadius: 3,
          }}
        >
          History
        </Button>
      </Paper>
    </Grid>

  </Grid>
</Paper>

{/* ================= FOOTER ================= */}

<Paper
  elevation={0}
  sx={{
    p: 5,
    mt: 5,
    mb: 4,
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
    🌱 Keep Saving Water!
  </Typography>

  <Typography
    sx={{
      mt: 2,
      maxWidth: 700,
      mx: "auto",
      lineHeight: 1.8,
    }}
  >
    Every litre saved contributes to a sustainable future.
    Continue saving water to unlock more rewards,
    badges and exciting coupons.
  </Typography>

  <Button
    variant="contained"
    sx={{
      mt: 4,
      bgcolor: "#fff",
      color: "#1976D2",
      px: 5,
      py: 1.3,
      borderRadius: "14px",
      textTransform: "none",
      fontWeight: 700,
      "&:hover": {
        bgcolor: "#F4F8FF",
      },
    }}
  >
    Continue Saving
  </Button>
</Paper>

        </Container>
      </Box>
      <Dialog
  open={rewardDialog}
  onClose={closeRewardDialog}
  TransitionComponent={Zoom}
  maxWidth="xs"
  fullWidth
  PaperProps={{
    sx: {
      borderRadius: "24px",
      p: 2,
      textAlign: "center",
      overflow: "hidden",
    },
  }}
>
  <DialogContent sx={{ py: 4 }}>

    <CelebrationRoundedIcon
      sx={{
        fontSize: 80,
        color: "#FFC107",
        mb: 2,
      }}
    />

    <Typography
      variant="h4"
      fontWeight={800}
      color="#1976D2"
      gutterBottom
    >
      Reward Claimed!
    </Typography>

    <Typography
      sx={{
        color: "#555",
        fontSize: 17,
        mb: 1,
      }}
    >
      Congratulations 🎉
    </Typography>

    <Typography
      sx={{
        color: "#666",
        mb: 3,
      }}
    >
      Your <b>{selectedReward}</b> has been successfully claimed.
    </Typography>

    <Box
      sx={{
        bgcolor: "#E8F5E9",
        borderRadius: "16px",
        p: 2,
        mb: 3,
      }}
    >
      <Typography
        sx={{
          color: "#2E7D32",
          fontWeight: 700,
        }}
      >
        Your reward voucher will be available in your account shortly.
      </Typography>
    </Box>

    <Button
      variant="contained"
      onClick={closeRewardDialog}
      sx={{
        px: 5,
        py: 1.3,
        borderRadius: "14px",
        textTransform: "none",
        fontWeight: 700,
      }}
    >
      Awesome!
    </Button>

  </DialogContent>
</Dialog>
    </Box>
  );
}
