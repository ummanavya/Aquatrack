import React from "react";
import { Box, Container, Grid } from "@mui/material";

import ResidentSidebar from "../components/ResidentSidebar";
import ResidentTopbar from "../components/ResidentTopbar";

import ProfileOverview from "../components/ProfileOverview";
import ProfileTable from "../components/ProfileTable";
import AccountCard from "../components/AccountCard";
import SecurityCard from "../components/SecurityCard";

export default function ResidentProfile() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        background:
          "linear-gradient(180deg,#EEF5FF 0%,#F8FBFF 45%,#FFFFFF 100%)",
      }}
    >
      <ResidentSidebar />

      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          ml: {
            lg: "260px",
          },
        }}
      >
        <ResidentTopbar />

        <Container
          maxWidth={false}
          sx={{
            mt: "90px",
            px: {
              xs: 2,
              sm: 3,
              md: 4,
              lg: 5,
            },
            pb: 5,
          }}
        >
          <ProfileOverview />

          <Grid container spacing={3} alignItems="stretch">
            <Grid item xs={12} lg={7}>
              <ProfileTable />
            </Grid>

            <Grid item xs={12} lg={5}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={5}>
                  <AccountCard />
                </Grid>

                <Grid item xs={12} md={7}>
                  <SecurityCard />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}