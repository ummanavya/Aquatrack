import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Stack,
  Avatar,
  Button,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import {
  GroupsRounded,
  CampaignRounded,
  ForumRounded,
  EmojiEventsRounded,
  ArrowForwardRounded,
  ThumbUpRounded,
  ChatBubbleOutlineRounded,
  AddCircleRounded,
  EventRounded,
  PhoneRounded,
} from "@mui/icons-material";

import api from "../services/api";

import Swal from "sweetalert2";
import ResidentSidebar from "../components/ResidentSidebar";
import ResidentTopbar from "../components/ResidentTopbar";

import "../styles/community.css";

export default function Community() {

  const [posts, setPosts] = useState([]);

const [openPostDialog, setOpenPostDialog] = useState(false);

const [newPost, setNewPost] = useState({
  title: "",
  content: "",
  authorName: localStorage.getItem("username") || "Resident",
});
useEffect(() => {
  loadPosts();
}, []);

const loadPosts = async () => {
  try {
    const res = await api.get("/api/community/posts");
    setPosts(res.data);
  } catch (err) {
    console.error(err);
  }
};
const createPost = async () => {
  const likePost = async (id) => {

  try {

    await api.put(`/api/community/posts/${id}/like`);

    loadPosts();

  } catch (err) {

    console.error(err);

  }

};

  try {

    await api.post(
      "/api/community/posts",
      newPost
    );

    setOpenPostDialog(false);

    setNewPost({
      title: "",
      content: "",
      authorName:
        localStorage.getItem("username") || "Resident",
    });

    loadPosts();

  } catch (err) {

    console.error(err);

    alert("Unable to create post");

  }

};
const likePost = async (id) => {

  try {

    await api.put(`/api/community/posts/${id}/like`);

    loadPosts();

  } catch (err) {

    console.error(err);

  }

};


  const [mobileOpen, setMobileOpen] = useState(false);

  const summaryCards = [

    {
      title: "Residents",
      value: "248",
      subtitle: "Active Members",
      icon: <GroupsRounded />,
      color: "#1976D2",
      bg: "#EAF4FF",
    },

    {
      title: "Announcements",
      value: "18",
      subtitle: "This Month",
      icon: <CampaignRounded />,
      color: "#FB8C00",
      bg: "#FFF4E5",
    },

    {
      title: "Events",
      value: "06",
      subtitle: "Upcoming",
      icon: <EmojiEventsRounded />,
      color: "#43A047",
      bg: "#ECFDF5",
    },

    {
      title: "Discussions",
      value: "52",
      subtitle: "Active Topics",
      icon: <ForumRounded />,
      color: "#8E24AA",
      bg: "#F3E8FF",
    },

  ];
  
const joinCommunity = () => {

  Swal.fire({
    icon: "success",
    title: "🎉 Welcome!",
    text: "You have successfully joined the AquaTrack Community.",
    confirmButtonText: "Awesome!",
    confirmButtonColor: "#1976D2",
    background: "#ffffff",
    color: "#1e293b",
    timer: 2500,
    timerProgressBar: true,
    showClass: {
      popup: "animate__animated animate__zoomIn"
    },
    hideClass: {
      popup: "animate__animated animate__zoomOut"
    }
  });

};
  return (

    <Box className="community">

      <ResidentSidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={() =>
          setMobileOpen(!mobileOpen)
        }
      />

      <Box className="communityMain">

        <ResidentTopbar
          handleDrawerToggle={() =>
            setMobileOpen(!mobileOpen)
          }
        />

        <Container
          maxWidth={false}
          className="communityContainer"
        >

          {/* HERO */}

          <motion.div
            initial={{ opacity:0, y:30 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:.6 }}
          >

            <Paper
              elevation={0}
              className="hero"
            >

              <div className="circleOne"/>

              <div className="circleTwo"/>

              <Chip
                label="🏘 AquaTrack Community"
                className="heroChip"
              />

              <Typography className="heroTitle">

                Community Hub

              </Typography>

              <Typography className="heroSubtitle">

                Stay connected with your neighbours,
                receive apartment announcements,
                participate in discussions,
                attend community events and
                work together to build a greener,
                smarter AquaTrack community.

              </Typography>

              <Stack
                direction="row"
                spacing={2}
                mt={4}
                flexWrap="wrap"
                useFlexGap
              >

                <Chip label="👥 248 Residents"/>

                <Chip label="📢 18 Announcements"/>

                <Chip label="💬 52 Discussions"/>

                <Chip label="🌱 Green Community"/>

              </Stack>

              <Stack
                direction="row"
                spacing={2}
                mt={5}
              >

                <Button
                  variant="contained"
                  onClick={joinCommunity}
                  className="joinBtn"
                  endIcon={<ArrowForwardRounded/>}
                >

                  Join Community

                </Button>

               <Button
    variant="outlined"
    sx={{
        color: "#FFFFFF",
        borderColor: "#FFFFFF",
        px: 4,
        py: 1.5,
        borderRadius: "14px",
        fontWeight: 700,
        textTransform: "none",
        "&:hover": {
            borderColor: "#FFFFFF",
            backgroundColor: "rgba(255,255,255,0.15)",
        },
    }}
    onClick={() => {
        document
            .getElementById("discussionSection")
            ?.scrollIntoView({
                behavior: "smooth",
            });
    }}
>
    Explore Discussions
</Button>

              </Stack>

            </Paper>

          </motion.div>

          {/* SUMMARY */}

          <Grid
            container
            spacing={3}
            sx={{ mt:4 }}
          >
                        {summaryCards.map((card, index) => (

              <Grid
                item
                xs={12}
                sm={12}
                lg={12}
                key={index}
              >

                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  transition={{
                    duration: .25,
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

                        <Typography className="summaryTitle">
                          {card.title}
                        </Typography>

                        <Typography
                          sx={{
                            mt:1,
                            fontSize:42,
                            fontWeight:900,
                            color:card.color,
                          }}
                        >
                          {card.value}
                        </Typography>

                        <Typography className="summarySubtitle">
                          {card.subtitle}
                        </Typography>

                      </Box>

                      <Avatar
                        sx={{
                          width:72,
                          height:72,
                          bgcolor:card.bg,
                          color:card.color,
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

{/* =======================================================
      ANNOUNCEMENTS + SUMMARY
======================================================= */}

<Grid
  container
  spacing={3}
  sx={{
    mt: 1,
    mb: 4,
  }}
>

  <Grid
    item
    xs={12}
  >

    <Paper
      elevation={0}
      className="sectionCard"
    >

      <Grid
        container
        spacing={4}
      >

        {/* ================= LEFT ================= */}

        <Grid
          item
          xs={12}
          md={8}
        >

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mb={3}
          >

            <Typography className="sectionTitle">
              📢 Latest Announcements
            </Typography>

            <Chip
              label="3 New"
              color="primary"
            />

          </Stack>

          <Typography
            sx={{
              color: "#64748B",
              mb: 3,
            }}
          >
            Stay updated with the latest apartment announcements,
            maintenance schedules and community activities.
          </Typography>

        </Grid>

        
      </Grid>

      {/* ===== KEEP YOUR ANNOUNCEMENT CARDS HERE ===== */}

                <Paper
                  elevation={0}
                  className="announcement"
                >

                  <Typography className="announcementHeading">
                    Water Supply Maintenance
                  </Typography>

                  <Typography className="announcementDate">
                    Today • 09:00 AM
                  </Typography>

                  <Typography className="announcementText">
                    Water supply will be unavailable between
                    10:00 AM and 1:00 PM due to scheduled
                    maintenance work.
                  </Typography>

                </Paper>

                <Paper
                  elevation={0}
                  className="announcement"
                >

                  <Typography className="announcementHeading">
                    Independence Day Celebration
                  </Typography>

                  <Typography className="announcementDate">
                    15 Aug • 09:30 AM
                  </Typography>

                  <Typography className="announcementText">
                    Join the flag hoisting, cultural programmes,
                    plantation drive and community breakfast.
                  </Typography>

                </Paper>

                <Paper
                  elevation={0}
                  className="announcement"
                >

                  <Typography className="announcementHeading">
                    Monthly Residents Meeting
                  </Typography>

                  <Typography className="announcementDate">
                    18 Aug • 06:00 PM
                  </Typography>

                  <Typography className="announcementText">
                    Discuss water conservation, apartment
                    maintenance and upcoming community projects.
                  </Typography>

                </Paper>

              </Paper>

            </Grid>

            {/* RIGHT */}
<Grid
  item
  xs={12}
>

              <Paper
                elevation={0}
                className="sectionCard"
              >

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={3}
                >

                  <Typography className="sectionTitle">
                    💬 Community Discussions
                  </Typography>

                  <Chip
                    label="12 Active"
                    color="success"
                  />

                </Stack>
                                <Box
    id="discussionSection"
    sx={{ mt: 2 }}
>

    <Stack spacing={3}>

        {posts.map((post) => (

            <Paper
                key={post.id}
                elevation={0}
                className="discussionCard"
            >

                <Typography
                    variant="h6"
                    fontWeight={700}
                >
                    {post.title}
                </Typography>

                <Typography
                    sx={{
                        mt: 1,
                        color: "text.secondary",
                    }}
                >
                    {post.content}
                </Typography>

                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ mt: 3 }}
                >

                    <Typography>

                        Posted by

                        <strong>
                            {" "}
                            {post.authorName}
                        </strong>

                    </Typography>

                    <Button
                        variant="outlined"
                        onClick={() => likePost(post.id)}
                    >
                        ❤️ {post.likes}
                    </Button>

                </Stack>

            </Paper>

        ))}

    </Stack>

</Box>

                {/* ================= DISCUSSION 2 ================= */}

                <Paper
                  elevation={0}
                  className="discussionCard"
                >

                  <Stack direction="row" spacing={2}>

                    <Avatar
                      sx={{
                        bgcolor: "#8E24AA",
                        width: 56,
                        height: 56,
                        fontWeight: 700,
                      }}
                    >
                      L
                    </Avatar>

                    <Box flex={1}>

                      <Typography className="discussionName">
                        Lahari
                      </Typography>

                      <Typography className="discussionTopic">
                        Community Clean-Up Drive
                      </Typography>

                      <Typography className="discussionText">
                        Let's organize a monthly apartment clean-up
                        programme and encourage every resident to
                        participate in keeping our surroundings clean.
                      </Typography>

                      <Stack direction="row" spacing={2} mt={2}>

                        <Chip
                          icon={<ThumbUpRounded />}
                          label="43 Likes"
                          size="small"
                        />

                        <Chip
                          icon={<ChatBubbleOutlineRounded />}
                          label="15 Replies"
                          size="small"
                        />

                      </Stack>

                    </Box>

                  </Stack>

                </Paper>

                {/* ================= DISCUSSION 3 ================= */}

                <Paper
                  elevation={0}
                  className="discussionCard"
                >

                  <Stack direction="row" spacing={2}>

                    <Avatar
                      sx={{
                        bgcolor: "#43A047",
                        width: 56,
                        height: 56,
                        fontWeight: 700,
                      }}
                    >
                      U
                    </Avatar>

                    <Box flex={1}>

                      <Typography className="discussionName">
                        Umma
                      </Typography>

                      <Typography className="discussionTopic">
                        Smart Meter Awareness
                      </Typography>

                      <Typography className="discussionText">
                        Smart meters help us monitor daily
                        consumption, identify leaks early and
                        reduce unnecessary water wastage.
                      </Typography>

                      <Stack direction="row" spacing={2} mt={2}>

                        <Chip
                          icon={<ThumbUpRounded />}
                          label="35 Likes"
                          size="small"
                        />

                        <Chip
                          icon={<ChatBubbleOutlineRounded />}
                          label="12 Replies"
                          size="small"
                        />

                      </Stack>

                    </Box>

                  </Stack>

                </Paper>

                {/* ================= DISCUSSION 4 ================= */}

                <Paper
                  elevation={0}
                  className="discussionCard"
                >

                  <Stack direction="row" spacing={2}>

                    <Avatar
                      sx={{
                        bgcolor: "#FB8C00",
                        width: 56,
                        height: 56,
                        fontWeight: 700,
                      }}
                    >
                      P
                    </Avatar>

                    <Box flex={1}>

                      <Typography className="discussionName">
                        Priya
                      </Typography>

                      <Typography className="discussionTopic">
                        Weekend Plantation Drive
                      </Typography>

                      <Typography className="discussionText">
                        Planting more trees around our apartment
                        will improve greenery, reduce heat and
                        create a healthier environment for everyone.
                      </Typography>

                      <Stack direction="row" spacing={2} mt={2}>

                        <Chip
                          icon={<ThumbUpRounded />}
                          label="28 Likes"
                          size="small"
                        />

                        <Chip
                          icon={<ChatBubbleOutlineRounded />}
                          label="9 Replies"
                          size="small"
                        />

                      </Stack>

                    </Box>

                  </Stack>

                </Paper>

              </Paper>

            </Grid>

          </Grid>

          {/* ================= TOP CONTRIBUTORS ================= */}

          <Paper
            elevation={0}
            className="contributorsSection"
          >

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              mb={4}
            >

              <Typography className="sectionTitle">
                🏆 Top Contributors
              </Typography>

              <Chip
                label="August 2026"
                color="primary"
              />

            </Stack>

            <Grid
              container
              spacing={3}
            >
                          {/* ================= NAVYA ================= */}

            <Grid
  item
  xs={12}
  sm={12}
  md={12}
  sx={{
    flex: 1,
    maxWidth: "25%",
  }}
>

              <Paper
                elevation={0}
                className="contributorCard"
              >

                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    bgcolor: "#FFF8E1",
                    color: "#F9A825",
                    fontSize: 34,
                    fontWeight: 800,
                    mx: "auto",
                    mb: 2,
                  }}
                >
                  🥇
                </Avatar>

                <Typography className="contributorName">
                  Navya
                </Typography>

                <Typography className="contributorPoints">
                  1,250 Eco Points
                </Typography>

                <Chip
                  label="Community Champion"
                  color="warning"
                  sx={{ mt: 2 }}
                />

              </Paper>

            </Grid>

            {/* ================= LAHARI ================= */}

            <Grid
  item
  xs={12}
  sm={12}
  md={12}
  sx={{
    flex: 1,
    maxWidth: "25%",
  }}
>

              <Paper
                elevation={0}
                className="contributorCard"
              >

                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    bgcolor: "#ECEFF1",
                    color: "#546E7A",
                    fontSize: 34,
                    fontWeight: 800,
                    mx: "auto",
                    mb: 2,
                  }}
                >
                  🥈
                </Avatar>

                <Typography className="contributorName">
                  Lahari
                </Typography>

                <Typography className="contributorPoints">
                  1,180 Eco Points
                </Typography>

                <Chip
                  label="Water Saver"
                  color="primary"
                  sx={{ mt: 2 }}
                />

              </Paper>

            </Grid>

            {/* ================= UMMA ================= */}

            <Grid
  item
  xs={12}
  sm={12}
  md={12}
  sx={{
    flex: 1,
    maxWidth: "25%",
  }}
>

              <Paper
                elevation={0}
                className="contributorCard"
              >

                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    bgcolor: "#E8F5E9",
                    color: "#2E7D32",
                    fontSize: 34,
                    fontWeight: 800,
                    mx: "auto",
                    mb: 2,
                  }}
                >
                  🥉
                </Avatar>

                <Typography className="contributorName">
                  Umma
                </Typography>

                <Typography className="contributorPoints">
                  1,090 Eco Points
                </Typography>

                <Chip
                  label="Green Leader"
                  color="success"
                  sx={{ mt: 2 }}
                />

              </Paper>

            </Grid>

            {/* ================= ANU ================= */}

            <Grid
  item
  xs={12}
  sm={12}
  md={12}
  sx={{
    flex: 1,
    maxWidth: "25%",
  }}
>

              <Paper
                elevation={0}
                className="contributorCard"
              >

                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    bgcolor: "#E3F2FD",
                    color: "#1976D2",
                    fontSize: 34,
                    fontWeight: 800,
                    mx: "auto",
                    mb: 2,
                  }}
                >
                  ⭐
                </Avatar>

                <Typography className="contributorName">
                  Anu
                </Typography>

                <Typography className="contributorPoints">
                  980 Eco Points
                </Typography>

                <Chip
                  label="Rising Star"
                  color="secondary"
                  sx={{ mt: 2 }}
                />

              </Paper>

            </Grid>

          </Grid>

          {/* ================= COMMUNITY GOAL ================= */}

          <Paper
            elevation={0}
            className="communityGoal"
            sx={{ mt: 4 }}
          >

            <Typography className="goalTitle">
              🌱 Community Goal
            </Typography>

            <Typography className="goalText">
              Together, AquaTrack residents are working towards reducing
              apartment water consumption by <strong>10%</strong> this month.
              By participating in awareness campaigns, reporting leaks,
              practising responsible water usage and supporting community
              initiatives, every resident contributes to a cleaner,
              greener and more sustainable future.
            </Typography>

            <Box
              sx={{
                mt: 3,
                width: "100%",
                height: 12,
                bgcolor: "#DCEBFF",
                borderRadius: 20,
                overflow: "hidden",
              }}
            >

              <Box
                sx={{
                  width: "72%",
                  height: "100%",
                  bgcolor: "#1976D2",
                  borderRadius: 20,
                }}
              />

            </Box>

            <Stack
              direction="row"
              justifyContent="space-between"
              mt={2}
            >

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
                  color: "#1976D2",
                  fontWeight: 800,
                }}
              >
                72% Achieved
              </Typography>

            </Stack>

          </Paper>

        </Paper>

        {/* ================= QUICK ACTIONS ================= */}

        <Paper
          elevation={0}
          className="quickActionsSection"
        >

          <Typography className="sectionTitle">
            ⚡ Quick Actions
          </Typography>

          <Grid
  container
  spacing={3}
  wrap="nowrap"
  sx={{ mt: 2 }}
>
                        {/* ================= CREATE POST ================= */}

            <Grid
  item
  xs={12}
  lg={12}
>

              <Paper
                elevation={0}
                className="quickCard"
              >

                <Avatar
                  className="quickIcon"
                  sx={{
                    bgcolor: "#E3F2FD",
                    color: "#1976D2",
                  }}
                >
                  <AddCircleRounded />
                </Avatar>

                <Typography className="quickTitle">
                  Create Post
                </Typography>

                <Typography className="quickText">
                  Share apartment updates, water-saving ideas,
                  maintenance requests and suggestions with
                  your AquaTrack community.
                </Typography>

                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => setOpenPostDialog(true)}
                  sx={{
                    mt: 3,
                    py: 1.4,
                    borderRadius: "14px",
                    textTransform: "none",
                    fontWeight: 700,
                  }}
                >
                  Create Post
                </Button>
                

              </Paper>

            </Grid>

            {/* ================= VIEW EVENTS ================= */}

            <Grid
  item
  xs={12}
  lg={12}
>

              <Paper
                elevation={0}
                className="quickCard"
              >

                <Avatar
                  className="quickIcon"
                  sx={{
                    bgcolor: "#E8F5E9",
                    color: "#2E7D32",
                  }}
                >
                  <EventRounded />
                </Avatar>

                <Typography className="quickTitle">
                  View Events
                </Typography>

                <Typography className="quickText">
                  Explore apartment meetings,
                  awareness campaigns,
                  celebrations and community
                  programmes happening this month.
                </Typography>

                <Button
                  fullWidth
                  variant="outlined"
                  color="success"
                  sx={{
                    mt: 3,
                    py: 1.4,
                    borderRadius: "14px",
                    textTransform: "none",
                    fontWeight: 700,
                  }}
                >
                  View Events
                </Button>

              </Paper>

            </Grid>

            {/* ================= CONTACT ================= */}

            <Grid
  item
  xs={12}
  lg={12}
>

              <Paper
                elevation={0}
                className="quickCard"
              >

                <Avatar
                  className="quickIcon"
                  sx={{
                    bgcolor: "#FFF3E0",
                    color: "#EF6C00",
                  }}
                >
                  <PhoneRounded />
                </Avatar>

                <Typography className="quickTitle">
                  Contact Association
                </Typography>

                <Typography
  sx={{
    mt: 2,
    mb: 4,
    color: "rgba(255,255,255,.9)",
    fontSize: 18,
  }}
>
  Connect with your neighbours, participate in community
  events, share ideas and work together to build a smarter,
  greener and more sustainable AquaTrack community.
</Typography>

                <Button
                  fullWidth
                  variant="outlined"
                  color="warning"
                  sx={{
                    mt: 3,
                    py: 1.4,
                    borderRadius: "14px",
                    textTransform: "none",
                    fontWeight: 700,
                  }}
                >
                  Contact Now
                </Button>

              </Paper>

            </Grid>

          </Grid>

        </Paper>

        {/* ================= PREMIUM COMMUNITY BANNER ================= */}

        <Paper
  elevation={0}
  sx={{
    mt: 5,
    p: 6,
    borderRadius: "30px",
    textAlign: "center",
    background: "linear-gradient(135deg,#1565C0 0%,#42A5F5 100%)",
    color: "#fff",
    boxShadow: "0 20px 45px rgba(25,118,210,.25)",
  }}
>

          <div className="bannerCircleOne"></div>

          <div className="bannerCircleTwo"></div>

          <Typography className="bannerTitle">
            🤝 Together We Build a Better Community
          </Typography>

          <Typography className="bannerText">

            AquaTrack is more than a water management platform.
            It is a connected community where every resident
            contributes to smarter water usage, sustainability,
            and a better quality of life. By sharing ideas,
            participating in discussions, joining community
            initiatives and supporting one another, we create
            a cleaner, greener and more sustainable future for
            everyone living in our apartment.

          </Typography>

          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            mt={4}
            flexWrap="wrap"
            useFlexGap
          >

            <Button
              variant="contained"
               onClick={joinCommunity}
              className="joinBtn"
            >
              Join Community
            </Button>

            <Button
              variant="outlined"
              className="exploreBtn"
            >
              Learn More
            </Button>

          </Stack>

        </Paper>
        <Dialog
    open={openPostDialog}
    onClose={() => setOpenPostDialog(false)}
    fullWidth
    maxWidth="sm"
>

    <DialogTitle>
        Create Community Post
    </DialogTitle>

    <DialogContent>

        <Stack spacing={2} sx={{ mt: 1 }}>

            <TextField
  label="Title"
  fullWidth
  value={newPost.title}
  onChange={(e) =>
    setNewPost({
      ...newPost,
      title: e.target.value,
    })
  }
  InputProps={{
  sx: {
    color: "#000000",

    "& input": {
      color: "#000000",
      WebkitTextFillColor: "#000000",
    },
  },
}}
/>

            <TextField
  label="Content"
  multiline
  rows={6}
  fullWidth
  value={newPost.content}
  onChange={(e) =>
    setNewPost({
      ...newPost,
      content: e.target.value,
    })
  }
  InputProps={{
  sx: {
    color: "#000000",

    "& textarea": {
      color: "#000000",
      WebkitTextFillColor: "#000000",
    },
  },
}}
/>

        </Stack>

    </DialogContent>

    <DialogActions>

        <Button
            onClick={() => setOpenPostDialog(false)}
        >
            Cancel
        </Button>

        <Button
            variant="contained"
            onClick={createPost}
        >
            Post
        </Button>

    </DialogActions>

</Dialog>

      </Container>

    </Box>

  </Box>

);
}