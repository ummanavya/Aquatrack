import React, { useEffect, useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import WaterDropRoundedIcon from "@mui/icons-material/WaterDropRounded";

import { Link as RouterLink } from "react-router-dom";

const BLUE = "#1976D2";
const LIGHT = "#42A5F5";
const DARK = "#0F172A";

export default function LandingNavbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = [
    { name: "Home", id: "home" },
    { name: "Features", id: "features" },
    { name: "Dashboard", id: "dashboard" },
    { name: "Testimonials", id: "testimonials" },
    { name: "FAQ", id: "faq" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const navbarHeight = 90;

      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }

    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled
            ? "rgba(255,255,255,.96)"
            : "rgba(255,255,255,.85)",

          backdropFilter: "blur(18px)",

          transition: ".35s",

          borderBottom: scrolled
            ? "1px solid rgba(25,118,210,.12)"
            : "none",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              justifyContent: "space-between",

              minHeight: scrolled ? 72 : 82,

              transition: ".35s",
            }}
          >
                        {/* ================= Logo ================= */}

            <Box
              display="flex"
              alignItems="center"
              gap={1.5}
              sx={{
                cursor: "pointer",
              }}
              onClick={() => scrollToSection("home")}
            >
              <WaterDropRoundedIcon
                sx={{
                  color: BLUE,
                  fontSize: 36,
                }}
              />

              <Typography
                sx={{
                  fontWeight: 900,
                  fontSize: 28,
                  color: DARK,
                  letterSpacing: 0.5,
                }}
              >
                AquaTrack
              </Typography>
            </Box>

            {/* ================= Desktop Menu ================= */}

            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
                alignItems: "center",
                gap: 4,
              }}
            >
              {menu.map((item) => (
                <Typography
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    cursor: "pointer",
                    color: DARK,
                    fontWeight: 600,
                    position: "relative",
                    transition: "0.3s",

                    "&:hover": {
                      color: BLUE,
                    },

                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      bottom: -6,
                      width: 0,
                      height: 2,
                      background: BLUE,
                      transition: "0.3s",
                    },

                    "&:hover::after": {
                      width: "100%",
                    },
                  }}
                >
                  {item.name}
                </Typography>
              ))}

              <Button
                component={RouterLink}
                to="/login"
                variant="contained"
                sx={{
                  px: 3,
                  py: 1,
                  borderRadius: "12px",
                  textTransform: "none",
                  fontWeight: 700,
                  background:
                    "linear-gradient(135deg,#1976D2,#42A5F5)",

                  "&:hover": {
                    background:
                      "linear-gradient(135deg,#1565C0,#2196F3)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Login
              </Button>
            </Box>

            {/* ================= Mobile Menu Button ================= */}

            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },
                color: BLUE,
              }}
            >
              <MenuIcon />
            </IconButton>

          </Toolbar>
        </Container>
      </AppBar>
            {/* ================= Mobile Drawer ================= */}

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{
            width: 280,
            height: "100%",
            p: 3,
            bgcolor: "#ffffff",
          }}
        >
          {/* Logo */}

          <Box
            display="flex"
            alignItems="center"
            gap={1}
            mb={4}
          >
            <WaterDropRoundedIcon
              sx={{
                color: BLUE,
                fontSize: 34,
              }}
            />

            <Typography
              sx={{
                fontWeight: 800,
                fontSize: 26,
                color: DARK,
              }}
            >
              AquaTrack
            </Typography>
          </Box>

          {/* Mobile Menu */}

          <List>

            {menu.map((item) => (

              <ListItem
                key={item.name}
                disablePadding
              >

                <ListItemButton
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    borderRadius: "12px",
                    mb: 1,

                    "&:hover": {
                      bgcolor: "#E3F2FD",
                    },
                  }}
                >
                  <ListItemText
                    primary={item.name}
                    primaryTypographyProps={{
                      fontWeight: 600,
                      color: DARK,
                    }}
                  />
                </ListItemButton>

              </ListItem>

            ))}

          </List>

          {/* Login Button */}

          <Button
            component={RouterLink}
            to="/login"
            fullWidth
            variant="contained"
            sx={{
              mt: 4,
              py: 1.2,
              borderRadius: "12px",
              textTransform: "none",
              fontWeight: 700,
              background:
                "linear-gradient(135deg,#1976D2,#42A5F5)",

              "&:hover": {
                background:
                  "linear-gradient(135deg,#1565C0,#2196F3)",
              },
            }}
          >
            Login
          </Button>
        </Box>
      </Drawer>
    </>
  );
}