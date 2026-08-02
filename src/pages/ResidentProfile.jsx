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
      {/* Sidebar */}

      <ResidentSidebar />

      {/* Main Content */}

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
        {/* Topbar */}

        <ResidentTopbar />

        {/* Page */}

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
          {/* Hero */}

          <ProfileOverview />

          {/* Main Layout */}

          <Grid
            container
            spacing={3}
            alignItems="stretch"
          >
            {/* LEFT */}

            <Grid
              item
              xs={12}
              lg={7}
            >
              <ProfileTable />
            </Grid>

            {/* RIGHT */}

            <Grid
              item
              xs={12}
              lg={5}
            >
              <Grid
                container
                spacing={3}
              >
                {/* Summary */}

                <Grid
                  item
                  xs={12}
                  md={5}
                >
                  <AccountCard />
                </Grid>

                {/* Security */}

                <Grid
                  item
                  xs={12}
                  md={7}
                >
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