import {
  Box,
  Button,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ContactSupportRoundedIcon from "@mui/icons-material/ContactSupportRounded";

export default function CTASection() {
  return (
    <Box
      sx={{
        py: 14,
        background:
          "linear-gradient(135deg,#1565C0 0%,#42A5F5 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Circles */}

      <Box
        sx={{
          position: "absolute",
          width: 320,
          height: 320,
          borderRadius: "50%",
          bgcolor: "rgba(255,255,255,.08)",
          top: -120,
          right: -80,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: 240,
          height: 240,
          borderRadius: "50%",
          bgcolor: "rgba(255,255,255,.05)",
          bottom: -80,
          left: -60,
        }}
      />

      <Container maxWidth="md">

        <Stack
          spacing={4}
          alignItems="center"
          textAlign="center"
          sx={{ position: "relative", zIndex: 1 }}
        >

          <Chip
            label="GET STARTED TODAY"
            sx={{
              bgcolor: "rgba(255,255,255,.18)",
              color: "#fff",
              fontWeight: 700,
              px: 2,
            }}
          />

          <Typography
            sx={{
              color: "#fff",
              fontWeight: 800,
              fontSize: {
                xs: 36,
                md: 54,
              },
              lineHeight: 1.2,
            }}
          >
            Ready to Transform
            <br />
            Your Water Management?
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,.88)",
              maxWidth: 760,
              fontSize: 19,
              lineHeight: 1.9,
            }}
          >
            Join apartment communities that are simplifying
            water monitoring, automated billing, analytics,
            leak detection and resident management with
            AquaTrack.
          </Typography>

          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
            spacing={3}
          >

            <Button
              variant="contained"
              color="inherit"
              size="large"
              endIcon={<ArrowForwardRoundedIcon />}
              sx={{
                px: 5,
                py: 1.7,
                borderRadius: "40px",
                textTransform: "none",
                fontWeight: 700,
                fontSize: 16,
                color: "#1565C0",

                "&:hover": {
                  bgcolor: "#F5F5F5",
                },
              }}
            >
              Get Started
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<ContactSupportRoundedIcon />}
              sx={{
                px: 5,
                py: 1.7,
                borderRadius: "40px",
                textTransform: "none",
                fontWeight: 700,
                fontSize: 16,
                borderColor: "#fff",
                color: "#fff",

                "&:hover": {
                  borderColor: "#fff",
                  bgcolor: "rgba(255,255,255,.08)",
                },
              }}
            >
              Contact Us
            </Button>

          </Stack>

        </Stack>

      </Container>
    </Box>
  );
}