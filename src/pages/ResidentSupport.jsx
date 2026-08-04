import React from "react";

import {
  Box,
  Grid,
  Typography,
} from "@mui/material";

import ResidentSidebar from "../components/ResidentSidebar";
import ResidentTopbar from "../components/ResidentTopbar";

export default function ResidentSupport() {

  return (

    <Box
      sx={{
        display:"flex",
        bgcolor:"#F7FAFC",
        minHeight:"100vh",
      }}
    >

      <ResidentSidebar/>

      <Box
        sx={{
          flex:1,
          ml:"280px",
        }}
      >

        <ResidentTopbar/>

        <Box
          sx={{
            mt:"90px",
            p:4,
          }}
        >

          <Typography
            sx={{
              fontSize:34,
              fontWeight:800,
            }}
          >
            🛠 Support Center
          </Typography>

          <Typography
            color="text.secondary"
            mb={4}
          >
            Raise complaints, track requests and get assistance from the apartment management team.
          </Typography>

          <Grid
            container
            spacing={3}
          >
                        {/* ================= Raise Complaint ================= */}

            <Grid
              item
              xs={12}
              md={7}
            >

              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: "24px",
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 12px 35px rgba(15,23,42,.08)",
                }}
              >

                <Typography
                  sx={{
                    fontSize: 24,
                    fontWeight: 700,
                    mb: 3,
                  }}
                >
                  📝 Raise a Complaint
                </Typography>

                <TextField
                  fullWidth
                  label="Complaint Title"
                  sx={{ mb: 3 }}
                />

                <TextField
                  select
                  fullWidth
                  label="Category"
                  sx={{ mb: 3 }}
                  SelectProps={{ native: true }}
                >
                  <option>Water Leakage</option>
                  <option>Billing Issue</option>
                  <option>Meter Problem</option>
                  <option>Low Water Pressure</option>
                  <option>Pipeline Damage</option>
                  <option>Others</option>
                </TextField>

                <TextField
                  fullWidth
                  multiline
                  rows={5}
                  label="Describe the issue"
                  sx={{ mb: 3 }}
                />

                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    borderRadius: "14px",
                    py: 1.5,
                    textTransform: "none",
                    fontWeight: 700,
                  }}
                >
                  Submit Complaint
                </Button>

              </Paper>

            </Grid>

            {/* ================= Emergency Contacts ================= */}

            <Grid
              item
              xs={12}
              md={5}
            >

              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: "24px",
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 12px 35px rgba(15,23,42,.08)",
                }}
              >

                <Typography
                  sx={{
                    fontSize: 24,
                    fontWeight: 700,
                    mb: 3,
                  }}
                >
                  🚨 Emergency Contacts
                </Typography>

                <Stack spacing={2}>

                  <Chip
                    label="Apartment Office : +91 9876543210"
                    color="primary"
                  />

                  <Chip
                    label="Maintenance : +91 9123456780"
                    color="success"
                  />

                  <Chip
                    label="Plumber : +91 9988776655"
                    color="info"
                  />

                  <Chip
                    label="Water Tank Operator : +91 9012345678"
                    color="warning"
                  />

                </Stack>

              </Paper>

            </Grid>

            {/* ================= Complaint History ================= */}

            <Grid
              item
              xs={12}
            >

              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: "24px",
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 12px 35px rgba(15,23,42,.08)",
                }}
              >

                <Typography
                  sx={{
                    fontSize: 24,
                    fontWeight: 700,
                    mb: 3,
                  }}
                >
                  📋 Complaint History
                </Typography>

                <Table>

                  <TableHead>

                    <TableRow>

                      <TableCell><b>ID</b></TableCell>
                      <TableCell><b>Issue</b></TableCell>
                      <TableCell><b>Date</b></TableCell>
                      <TableCell><b>Status</b></TableCell>

                    </TableRow>

                  </TableHead>

                  <TableBody>

                    <TableRow hover>

                      <TableCell>#1025</TableCell>

                      <TableCell>Water Leakage</TableCell>

                      <TableCell>02 Aug 2026</TableCell>

                      <TableCell>

                        <Chip
                          label="In Progress"
                          color="warning"
                        />

                      </TableCell>

                    </TableRow>

                    <TableRow hover>

                      <TableCell>#1014</TableCell>

                      <TableCell>Billing Issue</TableCell>

                      <TableCell>20 Jul 2026</TableCell>

                      <TableCell>

                        <Chip
                          label="Resolved"
                          color="success"
                        />

                      </TableCell>

                    </TableRow>

                  </TableBody>

                </Table>

              </Paper>

            </Grid>

            {/* ================= FAQ ================= */}

            <Grid
              item
              xs={12}
              md={6}
            >

              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: "24px",
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 12px 35px rgba(15,23,42,.08)",
                  height: "100%",
                }}
              >

                <Typography
                  sx={{
                    fontSize: 24,
                    fontWeight: 700,
                    mb: 3,
                  }}
                >
                  ❓ Frequently Asked Questions
                </Typography>

                <Typography mb={2}>
                  • How is my water bill calculated?
                </Typography>

                <Typography mb={2}>
                  • How can I download invoices?
                </Typography>

                <Typography mb={2}>
                  • How do I report a leak?
                </Typography>

                <Typography>
                  • How do Eco Rewards work?
                </Typography>

              </Paper>

            </Grid>

            {/* ================= Feedback ================= */}

            <Grid
              item
              xs={12}
              md={6}
            >

              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: "24px",
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 12px 35px rgba(15,23,42,.08)",
                  height: "100%",
                }}
              >

                <Typography
                  sx={{
                    fontSize: 24,
                    fontWeight: 700,
                    mb: 3,
                  }}
                >
                  ⭐ Rate Our Support
                </Typography>

                <Typography
                  color="text.secondary"
                  mb={3}
                >
                  Help us improve AquaTrack by sharing your experience.
                </Typography>

                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  placeholder="Write your feedback..."
                />

                <Button
                  variant="contained"
                  sx={{
                    mt: 3,
                    borderRadius: "14px",
                    textTransform: "none",
                    fontWeight: 700,
                  }}
                >
                  Submit Feedback
                </Button>

              </Paper>

            </Grid>

          </Grid>

        </Box>

      </Box>

    </Box>

  );

}
