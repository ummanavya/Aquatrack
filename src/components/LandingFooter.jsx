import React from "react";

import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  TextField,
  Button,
} from "@mui/material";

import WaterDropRoundedIcon from "@mui/icons-material/WaterDropRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

export default function LandingFooter() {
  return (
    <Box
      id="contact"
      component="footer"
      sx={{
        position: "relative",
        bgcolor: "#0F172A",
        color: "#fff",
        pt: 4,
        pb: 2,
        overflow: "visible",
      }}
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <Box
        sx={{
          position: "absolute",
          top: -120,
          right: -120,
          width: 250,
          height: 250,
          borderRadius: "50%",
          background: "#1976D230",
          filter: "blur(90px)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: -120,
          left: -120,
          width: 220,
          height: 220,
          borderRadius: "50%",
          background: "#42A5F520",
          filter: "blur(80px)",
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <Grid
          container
          spacing={3}
        >
          {/* ================= BRAND ================= */}

          <Grid
            item
            xs={12}
            md={4}
          >
            <Box
              display="flex"
              alignItems="center"
              gap={1}
              mb={2}
            >
              <WaterDropRoundedIcon
                sx={{
                  fontSize: 30,
                  color: "#42A5F5",
                }}
              />

              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: 28,
                }}
              >
                AquaTrack
              </Typography>
            </Box>

            <Typography
              sx={{
                color: "#CBD5E1",
                fontSize: 14,
                lineHeight: 1.8,
                maxWidth: 340,
                mb: 2,
              }}
            >
              Smart water monitoring,
              automated billing and leak
              detection for apartments.
            </Typography>

            <Box
              display="flex"
              gap={1}
            >
              {[
                <FacebookRoundedIcon />,
                <LinkedInIcon />,
                <GitHubIcon />,
                <TwitterIcon />,
              ].map((icon, index) => (
                <IconButton
                  key={index}
                  sx={{
                    width: 40,
                    height: 40,
                    color: "#fff",
                    background:
                      "rgba(255,255,255,.08)",

                    "&:hover": {
                      background: "#1976D2",
                      transform:
                        "translateY(-3px)",
                    },
                  }}
                >
                  {icon}
                </IconButton>
              ))}
            </Box>

          </Grid>
                    {/* ================= COMPANY ================= */}

          <Grid
            item
            xs={6}
            md={2}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: 18,
                mb: 2,
              }}
            >
              Company
            </Typography>

            {[
              "Home",
              "Features",
              "Dashboard",
              "Testimonials",
              "FAQ",
            ].map((item) => (
              <Typography
                key={item}
                sx={{
                  color: "#CBD5E1",
                  fontSize: 14,
                  mb: 1.2,
                  cursor: "pointer",
                  transition: ".3s",

                  "&:hover": {
                    color: "#42A5F5",
                    pl: 1,
                  },
                }}
              >
                {item}
              </Typography>
            ))}

          </Grid>

          {/* ================= CONTACT ================= */}

          <Grid
            item
            xs={6}
            md={3}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: 18,
                mb: 2,
              }}
            >
              Contact
            </Typography>

            <Box
              display="flex"
              alignItems="center"
              mb={1.5}
            >
              <EmailRoundedIcon
                sx={{
                  color: "#42A5F5",
                  mr: 1,
                  fontSize: 20,
                }}
              />

              <Typography
                sx={{
                  color: "#CBD5E1",
                  fontSize: 14,
                }}
              >
                support@aquatrack.com
              </Typography>
            </Box>

            <Box
              display="flex"
              alignItems="center"
              mb={1.5}
            >
              <PhoneRoundedIcon
                sx={{
                  color: "#42A5F5",
                  mr: 1,
                  fontSize: 20,
                }}
              />

              <Typography
                sx={{
                  color: "#CBD5E1",
                  fontSize: 14,
                }}
              >
                +91 98765 43210
              </Typography>
            </Box>

            <Box
              display="flex"
              alignItems="center"
            >
              <LocationOnRoundedIcon
                sx={{
                  color: "#42A5F5",
                  mr: 1,
                  fontSize: 20,
                }}
              />

              <Typography
                sx={{
                  color: "#CBD5E1",
                  fontSize: 14,
                }}
              >
                Vijayawada, Andhra Pradesh
              </Typography>
            </Box>

          </Grid>

          {/* ================= NEWSLETTER ================= */}

          <Grid
            item
            xs={12}
            md={3}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: 18,
                mb: 2,
              }}
            >
              Newsletter
            </Typography>

            <Typography
              sx={{
                color: "#CBD5E1",
                fontSize: 14,
                mb: 2,
              }}
            >
              Subscribe to receive product updates.
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 1,
              }}
            >
              <TextField
                size="small"
                fullWidth
                placeholder="Email address"
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: 42,
                    borderRadius: "10px",
                    bgcolor: "rgba(255,255,255,.08)",

                    "& fieldset": {
                      borderColor:
                        "rgba(255,255,255,.15)",
                    },

                    "&:hover fieldset": {
                      borderColor: "#42A5F5",
                    },

                    "&.Mui-focused fieldset": {
                      borderColor: "#42A5F5",
                    },
                  },

                  "& input": {
                    color: "#fff",
                  },

                  "& input::placeholder": {
                    color: "#CBD5E1",
                    opacity: 1,
                  },
                }}
              />

              <Button
                variant="contained"
                sx={{
                  px: 3,
                  borderRadius: "10px",
                  textTransform: "none",
                  fontWeight: 700,
                  background:
                    "linear-gradient(90deg,#1976D2,#42A5F5)",

                  "&:hover": {
                    background:
                      "linear-gradient(90deg,#1565C0,#2196F3)",
                  },
                }}
              >
                Join
              </Button>

            </Box>

          </Grid>

        </Grid>
                {/* ================= FOOTER BOTTOM ================= */}

        <Box
          sx={{
            mt: 4,
            pt: 2,
            borderTop: "1px solid rgba(255,255,255,.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              color: "#94A3B8",
              fontSize: 14,
            }}
          >
            © 2026 AquaTrack. All Rights Reserved.
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 3,
              flexWrap: "wrap",
            }}
          >
            {[
              "Privacy Policy",
              "Terms",
              "Support",
            ].map((item) => (
              <Typography
                key={item}
                sx={{
                  color: "#94A3B8",
                  fontSize: 14,
                  cursor: "pointer",
                  transition: ".3s",

                  "&:hover": {
                    color: "#42A5F5",
                  },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Box>

      </Container>

      {/* ================= BACK TO TOP ================= */}

      <IconButton
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        sx={{
          position: "fixed",
          right: 24,
          bottom: 24,
          width: 52,
          height: 52,
          bgcolor: "#1976D2",
          color: "#fff",
          zIndex: 1200,
          boxShadow:
            "0 12px 30px rgba(25,118,210,.35)",

          "&:hover": {
            bgcolor: "#1565C0",
            transform: "translateY(-3px)",
          },
        }}
      >
        <KeyboardArrowUpRoundedIcon />
      </IconButton>

    </Box>
  );
}