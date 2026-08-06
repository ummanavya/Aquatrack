import React from "react";
import {
  Box,
  Container,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

import ResidentSidebar from "../components/ResidentSidebar";
import ResidentTopbar from "../components/ResidentTopbar";

import ProfileOverview from "../components/ProfileOverview";
import ProfileTable from "../components/ProfileTable";
import AccountCard from "../components/AccountCard";
import SecurityCard from "../components/SecurityCard";

export default function ResidentProfile() {
  const [openEdit, setOpenEdit] = React.useState(false);

const [profileData, setProfileData] = React.useState({
  username: "Navya",
  email: "navya@gmail.com",
  phone: "+91 9876543210",
});
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
          <ProfileOverview
  onEditProfile={() => setOpenEdit(true)}
/>

          <Grid container spacing={3} alignItems="stretch">
            <Grid item xs={12} lg={7}>
              <ProfileTable
  onEditProfile={() => setOpenEdit(true)}
/>
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
      <Dialog
  open={openEdit}
  onClose={() => setOpenEdit(false)}
  maxWidth="sm"
  fullWidth
>
  <DialogTitle>Edit Profile</DialogTitle>

  <DialogContent>

    <TextField
  fullWidth
  margin="normal"
  label="Name"
  value={profileData.username}
  onChange={(e) =>
    setProfileData({
      ...profileData,
      username: e.target.value,
    })
  }
  InputLabelProps={{
    sx: {
      color: "#666",
      "&.Mui-focused": {
        color: "#1976D2",
      },
    },
  }}
  sx={{
    "& .MuiInputBase-input": {
      color: "#000 !important",
      WebkitTextFillColor: "#000 !important",
    },
    "& .MuiOutlinedInput-root": {
      color: "#000 !important",
    },
  }}
/>

    <TextField
  fullWidth
  margin="normal"
  label="Email"
  value={profileData.email}
  onChange={(e) =>
    setProfileData({
      ...profileData,
      email: e.target.value,
    })
  }
  InputLabelProps={{
    sx: {
      color: "#666",
      "&.Mui-focused": {
        color: "#1976D2",
      },
    },
  }}
  sx={{
    "& .MuiInputBase-input": {
      color: "#000 !important",
      WebkitTextFillColor: "#000 !important",
    },
    "& .MuiOutlinedInput-root": {
      color: "#000 !important",
    },
  }}
/>

    <TextField
  fullWidth
  margin="normal"
  label="Phone"
  value={profileData.phone}
  onChange={(e) =>
    setProfileData({
      ...profileData,
      phone: e.target.value,
    })
  }
  InputLabelProps={{
    sx: {
      color: "#666",
      "&.Mui-focused": {
        color: "#1976D2",
      },
    },
  }}
  sx={{
    "& .MuiInputBase-input": {
      color: "#000 !important",
      WebkitTextFillColor: "#000 !important",
    },
    "& .MuiOutlinedInput-root": {
      color: "#000 !important",
    },
  }}
/>

  </DialogContent>

  <DialogActions>

    <Button onClick={() => setOpenEdit(false)}>
      Cancel
    </Button>

    <Button
      variant="contained"
      onClick={() => {
        alert("Profile Updated Successfully!");
        setOpenEdit(false);
      }}
    >
      Save
    </Button>

  </DialogActions>

</Dialog>
    </Box>
  );
}