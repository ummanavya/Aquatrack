import React, { useEffect, useState } from "react";

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
} from "@mui/material";

import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

import ResidentSidebar from "../components/ResidentSidebar";
import ResidentTopbar from "../components/ResidentTopbar";
import RecentBills from "../components/RecentBills";

import api from "../services/api";

const summaryCards = [
  {
    title: "Outstanding Bill",
    value: "₹1,245",
    subtitle: "Due in 5 Days",
    color: "#E53935",
    bg: "#FDECEC",
    icon: <ReceiptLongRoundedIcon />,
  },
  {
    title: "Paid This Month",
    value: "₹980",
    subtitle: "July Payment",
    color: "#16A34A",
    bg: "#ECFDF5",
    icon: <PaymentsRoundedIcon />,
  },
  {
    title: "Next Due Date",
    value: "10 Aug",
    subtitle: "Billing Cycle",
    color: "#FB8C00",
    bg: "#FFF4E5",
    icon: <CalendarMonthRoundedIcon />,
  },
  {
    title: "Payment Status",
    value: "Pending",
    subtitle: "Awaiting Payment",
    color: "#1976D2",
    bg: "#EAF4FF",
    icon: <CheckCircleRoundedIcon />,
  },
];

export default function ResidentBills() {

  const [bills, setBills] = useState([]);

  useEffect(() => {
    fetchBills();
  }, []);

  const fetchBills = async () => {
    try {
      const response = await api.get("/billing-cycles");
      setBills(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (

    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        background:
          "linear-gradient(180deg,#EEF5FD 0%,#F8FBFF 100%)",
      }}
    >

      <ResidentSidebar />

      <Box
        sx={{
          flex: 1,
          ml: {
            lg: "260px",
          },
          width: "100%",
        }}
      >

        <ResidentTopbar />

        <Container
          maxWidth={false}
          disableGutters
          sx={{
            mt: "90px",
            px: {
              xs: 2,
              sm: 3,
              md: 4,
              lg: 4,
            },
            pb: 5,
          }}
        >
                    {/* ================= HERO ================= */}

          <Paper
            elevation={0}
            sx={{
              mb: 4,
              p: {
                xs: 3,
                md: 5,
              },
              borderRadius: "30px",
              overflow: "hidden",
              position: "relative",
              background:
                "linear-gradient(135deg,#1565C0 0%,#1976D2 45%,#42A5F5 100%)",
              color: "#FFFFFF",
              boxShadow: "0 20px 50px rgba(25,118,210,.20)",
            }}
          >

            <Box
              sx={{
                position: "absolute",
                width: 320,
                height: 320,
                borderRadius: "50%",
                bgcolor: "rgba(255,255,255,.08)",
                right: -70,
                top: -100,
              }}
            />

            <Typography
              sx={{
                fontSize: {
                  xs: 30,
                  md: 44,
                },
                fontWeight: 900,
              }}
            >
              💳 Bills & Payments
            </Typography>

            <Typography
              sx={{
                mt: 2,
                maxWidth: 700,
                fontSize: 18,
                lineHeight: 1.8,
                opacity: .95,
              }}
            >
              View current bills, payment history,
              download invoices and securely pay
              your monthly water bills.
            </Typography>

            <Stack
              direction="row"
              spacing={2}
              mt={4}
              flexWrap="wrap"
              useFlexGap
            >

              <Chip
                label="Secure Payment"
                sx={{
                  bgcolor: "rgba(255,255,255,.15)",
                  color: "#fff",
                  fontWeight: 700,
                }}
              />

              <Chip
                label="Invoice Download"
                sx={{
                  bgcolor: "rgba(255,255,255,.15)",
                  color: "#fff",
                  fontWeight: 700,
                }}
              />

              <Chip
                label="Payment History"
                sx={{
                  bgcolor: "rgba(255,255,255,.15)",
                  color: "#fff",
                  fontWeight: 700,
                }}
              />

            </Stack>

          </Paper>

          {/* ================= SUMMARY CARDS ================= */}

          <Grid
            container
            spacing={3}
            sx={{
              mb: 4,
            }}
          >

            {summaryCards.map((card) => (

              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={3}
                key={card.title}
              >

                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: 210,
                    borderRadius: "28px",
                    border: "1px solid #E8EEF5",
                    boxShadow:
                      "0 12px 35px rgba(15,23,42,.06)",

                    display: "flex",
                    alignItems: "center",

                    transition: ".3s",

                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow:
                        "0 18px 45px rgba(25,118,210,.15)",
                    },
                  }}
                >

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    width="100%"
                  >

                    <Box>

                      <Typography
                        sx={{
                          color: "#64748B",
                          fontWeight: 700,
                          fontSize: 16,
                        }}
                      >
                        {card.title}
                      </Typography>

                      <Typography
                        sx={{
                          mt: 1.5,
                          fontSize: {
                            xs: 34,
                            md: 42,
                          },
                          fontWeight: 900,
                          color: card.color,
                        }}
                      >
                        {card.value}
                      </Typography>

                      <Typography
                        sx={{
                          mt: 1,
                          color: "#64748B",
                        }}
                      >
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

                </Paper>

              </Grid>

            ))}

          </Grid>
                    {/* ================= CURRENT BILL ================= */}

          <Grid
            container
            spacing={3}
            sx={{
              mb: 4,
            }}
          >

            {/* Left */}

            <Grid
              item
              xs={12}
              md={6}
            >

              <Paper
                elevation={0}
                sx={{
                  p: 5,
                  minHeight: 430,
                  borderRadius: "28px",
                  border: "1px solid #E8EEF5",
                  boxShadow:
                    "0 15px 40px rgba(15,23,42,.06)",
                }}
              >

                <Typography
                  sx={{
                    fontSize: 32,
                    fontWeight: 900,
                    mb: 4,
                  }}
                >
                  Current Water Bill
                </Typography>

                <Grid
                  container
                  spacing={4}
                >

                  <Grid
                    item
                    xs={6}
                  >

                    <Typography color="text.secondary">
                      Billing Period
                    </Typography>

                    <Typography
                      fontWeight={800}
                      fontSize={22}
                      mt={1}
                    >
                      Jul 2026
                    </Typography>

                  </Grid>

                  <Grid
                    item
                    xs={6}
                  >

                    <Typography color="text.secondary">
                      Water Usage
                    </Typography>

                    <Typography
                      fontWeight={800}
                      fontSize={22}
                      mt={1}
                    >
                      12.45 KL
                    </Typography>

                  </Grid>

                  <Grid
                    item
                    xs={6}
                  >

                    <Typography color="text.secondary">
                      Bill Amount
                    </Typography>

                    <Typography
                      sx={{
                        mt: 1,
                        fontSize: 42,
                        fontWeight: 900,
                        color: "#1976D2",
                      }}
                    >
                      ₹1,245
                    </Typography>

                  </Grid>

                  <Grid
                    item
                    xs={6}
                  >

                    <Typography color="text.secondary">
                      Due Date
                    </Typography>

                    <Typography
                      sx={{
                        mt: 1,
                        fontSize: 26,
                        fontWeight: 800,
                        color: "#E53935",
                      }}
                    >
                      10 Aug 2026
                    </Typography>

                  </Grid>

                </Grid>

                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    mt: 6,
                    px: 5,
                    py: 1.6,
                    borderRadius: "14px",
                    textTransform: "none",
                    fontWeight: 800,
                  }}
                >
                  Pay Now
                </Button>

              </Paper>

            </Grid>

            {/* Right */}

            <Grid
              item
              xs={12}
              md={6}
            >

              <Paper
                elevation={0}
                sx={{
                  p: 5,
                  minHeight: 430,
                  borderRadius: "28px",
                  border: "1px solid #E8EEF5",
                  boxShadow:
                    "0 15px 40px rgba(15,23,42,.06)",
                }}
              >

                <Typography
                  sx={{
                    fontSize: 32,
                    fontWeight: 900,
                    mb: 4,
                  }}
                >
                  Payment Summary
                </Typography>

                <Stack spacing={3}>

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                  >

                    <Typography color="text.secondary">
                      Water Charges
                    </Typography>

                    <Typography fontWeight={700}>
                      ₹1,050
                    </Typography>

                  </Stack>

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                  >

                    <Typography color="text.secondary">
                      Service Charge
                    </Typography>

                    <Typography fontWeight={700}>
                      ₹120
                    </Typography>

                  </Stack>

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                  >

                    <Typography color="text.secondary">
                      Tax
                    </Typography>

                    <Typography fontWeight={700}>
                      ₹75
                    </Typography>

                  </Stack>

                  <Box
                    sx={{
                      borderTop: "1px solid #E5E7EB",
                      pt: 3,
                    }}
                  >

                    <Stack
                      direction="row"
                      justifyContent="space-between"
                    >

                      <Typography
                        fontWeight={900}
                        fontSize={22}
                      >
                        Total
                      </Typography>

                      <Typography
                        sx={{
                          fontWeight: 900,
                          fontSize: 34,
                          color: "#1976D2",
                        }}
                      >
                        ₹1,245
                      </Typography>

                    </Stack>

                  </Box>

                  <Chip
                    color="success"
                    label="Payment Pending"
                    sx={{
                      mt: 3,
                      width: "fit-content",
                      fontWeight: 700,
                    }}
                  />

                </Stack>

              </Paper>

            </Grid>

          </Grid>
                    {/* ================= BOTTOM SECTION ================= */}

          <Grid
            container
            spacing={3}
          >

            {/* Payment Methods */}

            <Grid
              item
              xs={12}
              md={6}
            >

              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: "28px",
                  border: "1px solid #E8EEF5",
                  boxShadow:
                    "0 15px 40px rgba(15,23,42,.06)",
                }}
              >

                <Typography
                  sx={{
                    fontSize: 28,
                    fontWeight: 900,
                    mb: 4,
                  }}
                >
                  Payment Methods
                </Typography>

                <Stack spacing={3}>

                  <Paper
                    variant="outlined"
                    sx={{
                      p: 3,
                      borderRadius: "18px",
                      borderColor: "#1976D2",
                      bgcolor: "#F8FBFF",
                    }}
                  >

                    <Typography fontWeight={800}>
                      💳 Credit / Debit Card
                    </Typography>

                    <Typography
                      color="text.secondary"
                      mt={1}
                    >
                      **** **** **** 4589
                    </Typography>

                  </Paper>

                  <Paper
                    variant="outlined"
                    sx={{
                      p: 3,
                      borderRadius: "18px",
                    }}
                  >

                    <Typography fontWeight={800}>
                      🏦 UPI
                    </Typography>

                    <Typography
                      color="text.secondary"
                      mt={1}
                    >
                      navya@oksbi
                    </Typography>

                  </Paper>

                </Stack>

              </Paper>

            </Grid>

            {/* Billing Statistics */}

            <Grid
              item
              xs={12}
              md={6}
            >

              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: "28px",
                  border: "1px solid #E8EEF5",
                  boxShadow:
                    "0 15px 40px rgba(15,23,42,.06)",
                }}
              >

                <Typography
                  sx={{
                    fontSize: 28,
                    fontWeight: 900,
                    mb: 4,
                  }}
                >
                  Billing Statistics
                </Typography>

                <Stack spacing={3}>

                  <Box>

                    <Typography color="text.secondary">
                      Total Bills Paid
                    </Typography>

                    <Typography
                      sx={{
                        mt: 1,
                        fontWeight: 900,
                        fontSize: 34,
                        color: "#1976D2",
                      }}
                    >
                      ₹12,460
                    </Typography>

                  </Box>

                  <Box>

                    <Typography color="text.secondary">
                      Average Monthly Bill
                    </Typography>

                    <Typography
                      sx={{
                        mt: 1,
                        fontWeight: 900,
                        fontSize: 34,
                        color: "#16A34A",
                      }}
                    >
                      ₹1,180
                    </Typography>

                  </Box>

                  <Box>

                    <Typography color="text.secondary">
                      Last Payment
                    </Typography>

                    <Typography
                      sx={{
                        mt: 1,
                        fontWeight: 700,
                        fontSize: 24,
                      }}
                    >
                      05 Jul 2026
                    </Typography>

                  </Box>

                  <Chip
                    color="success"
                    label="Excellent Payment Record"
                    sx={{
                      width: "fit-content",
                      fontWeight: 700,
                    }}
                  />

                </Stack>

              </Paper>

            </Grid>

          </Grid>
                    {/* ================= DOWNLOAD CENTER ================= */}

          <Grid
            container
            spacing={3}
            sx={{
              mt: 4,
            }}
          >

            {/* Download Center */}

            <Grid
              item
              xs={12}
              md={6}
            >

              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: "28px",
                  border: "1px solid #E8EEF5",
                  boxShadow:
                    "0 15px 40px rgba(15,23,42,.06)",
                }}
              >

                <Typography
                  sx={{
                    fontSize: 30,
                    fontWeight: 900,
                    mb: 3,
                  }}
                >
                  Download Center
                </Typography>

                <Typography
                  color="text.secondary"
                  mb={4}
                >
                  Download invoices and payment receipts
                  whenever you need them.
                </Typography>

                <Stack spacing={2}>

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      py: 1.5,
                      borderRadius: "14px",
                      textTransform: "none",
                      fontWeight: 700,
                    }}
                  >
                    Download Latest Invoice
                  </Button>

                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                      py: 1.5,
                      borderRadius: "14px",
                      textTransform: "none",
                    }}
                  >
                    Download Payment Receipt
                  </Button>

                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                      py: 1.5,
                      borderRadius: "14px",
                      textTransform: "none",
                    }}
                  >
                    View Billing History
                  </Button>

                </Stack>

              </Paper>

            </Grid>

            {/* AI Insights */}

            <Grid
              item
              xs={12}
              md={6}
            >

              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: "28px",
                  border: "1px solid #E8EEF5",
                  boxShadow:
                    "0 15px 40px rgba(15,23,42,.06)",
                }}
              >

                <Typography
                  sx={{
                    fontSize: 30,
                    fontWeight: 900,
                    mb: 3,
                  }}
                >
                  AI Billing Insights
                </Typography>

                <Stack spacing={3}>

                  <Paper
                    sx={{
                      p: 3,
                      bgcolor: "#EEF6FF",
                      borderRadius: "18px",
                    }}
                  >

                    <Typography
                      fontWeight={800}
                      color="primary"
                    >
                      Monthly Analysis
                    </Typography>

                    <Typography mt={1}>
                      Your bill is approximately
                      <strong> 12%</strong> lower than
                      last month.
                    </Typography>

                  </Paper>

                  <Paper
                    sx={{
                      p: 3,
                      bgcolor: "#ECFDF5",
                      borderRadius: "18px",
                    }}
                  >

                    <Typography
                      fontWeight={800}
                      color="success.main"
                    >
                      Estimated Savings
                    </Typography>

                    <Typography mt={1}>
                      Continue this usage pattern to save
                      nearly ₹2,500 per year.
                    </Typography>

                  </Paper>

                  <Paper
                    sx={{
                      p: 3,
                      bgcolor: "#FFF7ED",
                      borderRadius: "18px",
                    }}
                  >

                    <Typography
                      fontWeight={800}
                      sx={{
                        color: "#FB8C00",
                      }}
                    >
                      Recommendation
                    </Typography>

                    <Typography mt={1}>
                      Try to keep daily water usage
                      below 400 litres to maintain
                      lower billing slabs.
                    </Typography>

                  </Paper>

                </Stack>

              </Paper>

            </Grid>

          </Grid>

        </Container>

      </Box>

    </Box>

  );

}