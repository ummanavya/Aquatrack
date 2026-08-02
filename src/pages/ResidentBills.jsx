import React from "react";
import { motion } from "framer-motion";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Typography,
  Box,
  Button,
  Stack,
} from "@mui/material";

import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";

function RecentBills({ bills = [] }) {

  return (

    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: .6,
      }}
    >

      <Paper
        elevation={0}
        sx={{
          borderRadius: "30px",
          overflow: "hidden",
          border: "1px solid #E8EEF5",
          boxShadow:
            "0 18px 45px rgba(15,23,42,.08)",
        }}
      >

        {/* ================= Header ================= */}

        <Box
          sx={{
            p: {
              xs: 2.5,
              md: 4,
            },
            borderBottom: "1px solid #E8EEF5",
            bgcolor: "#FFFFFF",
          }}
        >

          <Stack
            direction={{
              xs: "column",
              md: "row",
            }}
            justifyContent="space-between"
            spacing={2}
            alignItems={{
              xs: "flex-start",
              md: "center",
            }}
          >

            <Box>

              <Stack
                direction="row"
                spacing={1.5}
                alignItems="center"
                mb={1}
              >

                <ReceiptLongRoundedIcon
                  sx={{
                    color: "#1976D2",
                    fontSize: 34,
                  }}
                />

                <Typography
                  sx={{
                    fontSize: {
                      xs: 24,
                      md: 30,
                    },
                    fontWeight: 900,
                    color: "#0F172A",
                  }}
                >
                  Recent Bills
                </Typography>

              </Stack>

              <Typography
                sx={{
                  color: "#64748B",
                }}
              >
                View and download your latest water bills.
              </Typography>

            </Box>

            <Button
              variant="contained"
              sx={{
                borderRadius: "14px",
                px: 3,
                py: 1.2,
                textTransform: "none",
                fontWeight: 700,
              }}
            >
              View All Bills
            </Button>

          </Stack>

        </Box>
                {/* ================= Table ================= */}

        <TableContainer
          sx={{
            overflowX: "auto",
          }}
        >

          <Table
            sx={{
              minWidth: 900,
            }}
          >

            <TableHead
              sx={{
                bgcolor: "#F8FBFF",
              }}
            >

              <TableRow>

                <TableCell sx={{ fontWeight: 800 }}>
                  House
                </TableCell>

                <TableCell sx={{ fontWeight: 800 }}>
                  Billing Period
                </TableCell>

                <TableCell
                  align="right"
                  sx={{ fontWeight: 800 }}
                >
                  Usage
                </TableCell>

                <TableCell
                  align="right"
                  sx={{ fontWeight: 800 }}
                >
                  Amount
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ fontWeight: 800 }}
                >
                  Status
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ fontWeight: 800 }}
                >
                  Invoice
                </TableCell>

              </TableRow>

            </TableHead>

            <TableBody>

              {bills.length === 0 ? (

                <TableRow>

                  <TableCell
                    colSpan={6}
                    align="center"
                    sx={{
                      py: 8,
                    }}
                  >

                    <Typography
                      sx={{
                        color: "#64748B",
                        fontSize: 16,
                      }}
                    >
                      No billing records available.
                    </Typography>

                  </TableCell>

                </TableRow>

              ) : (

                bills.slice(0, 8).map((bill) => (

                  <TableRow
                    key={bill.id}
                    hover
                    sx={{

                      transition: ".3s",

                      "&:hover": {

                        bgcolor: "#F8FBFF",

                      },
                    }}
                  >

                    <TableCell
                      sx={{
                        fontWeight: 700,
                      }}
                    >
                      {bill.household?.householdNumber || "-"}
                    </TableCell>

                    <TableCell>
                      {bill.cycleStartDate} – {bill.cycleEndDate}
                    </TableCell>

                    <TableCell align="right">
                      {bill.unitsConsumed} L
                    </TableCell>

                    <TableCell
                      align="right"
                      sx={{
                        fontWeight: 800,
                        color: "#1976D2",
                      }}
                    >
                      ₹{bill.totalAmount}
                    </TableCell>

                    <TableCell align="center">

                      <Chip
                        label={bill.status}
                        size="small"
                        sx={{
                          minWidth: 100,
                          fontWeight: 700,
                          color: "#FFFFFF",
                          bgcolor:
                            bill.status === "FINALIZED"
                              ? "#16A34A"
                              : "#F59E0B",
                        }}
                      />

                    </TableCell>

                    <TableCell align="center">

                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<DownloadRoundedIcon />}
                        sx={{
                          borderRadius: "12px",
                          textTransform: "none",
                          fontWeight: 700,

                          "&:hover": {
                            bgcolor: "#EEF6FF",
                          },
                        }}
                      >
                        Download
                      </Button>

                    </TableCell>

                  </TableRow>

                ))

              )}

            </TableBody>

          </Table>

        </TableContainer>

      </Paper>

    </motion.div>

  );

}

export default RecentBills;