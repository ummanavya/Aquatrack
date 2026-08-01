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
import { motion } from "framer-motion";

<motion.div

  initial={{ opacity: 0, y: 40 }}

  whileInView={{ opacity: 1, y: 0 }}

  viewport={{ once: true }}

  transition={{ duration: 0.7 }}

>

  <FeaturesSection />

</motion.div>
export default function Footer() {
  return (
    <Box
  sx={{
    background: "#0F172A",
    color: "#fff",
    pt: 6,
    pb: 3,
    position: "relative",
    overflow: "hidden",
  }}
>
  <Box
  sx={{
    position: "absolute",
    top: -120,
    right: -120,
    width: 260,
    height: 260,
    borderRadius: "50%",
    background: "#1976D230",
    filter: "blur(90px)",
  }}
/>

<Box
  sx={{
    position: "absolute",
    bottom: -100,
    left: -100,
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
  spacing={4}
>
  <Grid
  item
  xs={12}
  md={4}
>

<Box
display="flex"
alignItems="center"
mb={2}
>

<WaterDropRoundedIcon
sx={{
fontSize:34,
color:"#42A5F5",
mr:1
}}
/>

<Typography
sx={{
fontSize:34,
fontWeight:900
}}
>

AquaTrack

</Typography>

</Box>

<Typography
sx={{
color:"#CBD5E1",
fontSize:15,
lineHeight:1.8,
maxWidth:380,
mb:2
}}
>

Smart apartment water management platform for monitoring water usage, automatic billing and leak detection.

</Typography>

<Box
display="flex"
gap={1.5}
>

{[
<FacebookRoundedIcon/>,
<LinkedInRoundedIcon/>,
<GitHubIcon/>,
<XIcon/>
].map((icon,index)=>(

<IconButton

key={index}

sx={{

width:42,

height:42,

color:"#fff",

background:"rgba(255,255,255,.08)",

transition:".3s",

"&:hover":{

background:"#1976D2",

transform:"translateY(-4px)"

}

}}

>

{icon}

</IconButton>

))}

</Box>

</Grid>
{/* ================= COMPANY ================= */}

<Grid item xs={6} md={2}>

<Typography
sx={{
fontWeight:800,
fontSize:18,
mb:2.5
}}
>
Company
</Typography>

{[
"Home",
"Features",
"Dashboard",
"Testimonials",
"FAQ"
].map((item,index)=>(

<Typography

key={index}

sx={{

mb:1.3,

fontSize:15,

color:"#CBD5E1",

cursor:"pointer",

transition:".3s",

"&:hover":{

color:"#42A5F5",

pl:1

}

}}

>

{item}

</Typography>

))}

</Grid>

{/* ================= CONTACT ================= */}

<Grid item xs={6} md={3}>

<Typography
sx={{
fontWeight:800,
fontSize:18,
mb:2.5
}}
>
Contact
</Typography>

<Box
display="flex"
alignItems="center"
mb={2}
>

<EmailRoundedIcon
sx={{
fontSize:20,
mr:1.5,
color:"#42A5F5"
}}
/>

<Typography
fontSize={15}
color="#CBD5E1"
>
support@aquatrack.com
</Typography>

</Box>

<Box
display="flex"
alignItems="center"
mb={2}
>

<PhoneRoundedIcon
sx={{
fontSize:20,
mr:1.5,
color:"#42A5F5"
}}
/>

<Typography
fontSize={15}
color="#CBD5E1"
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
fontSize:20,
mr:1.5,
color:"#42A5F5"
}}
/>

<Typography
fontSize={15}
color="#CBD5E1"
>
Vijayawada, Andhra Pradesh
</Typography>

</Box>

</Grid>

{/* ================= NEWSLETTER ================= */}

<Grid item xs={12} md={3}>

<Typography
sx={{
fontWeight:800,
fontSize:18,
mb:2
}}
>
Newsletter
</Typography>

<Typography
sx={{
fontSize:14,
color:"#CBD5E1",
mb:2,
lineHeight:1.7
}}
>
Get product updates directly in your inbox.
</Typography>

<TextField

fullWidth

size="small"

placeholder="Enter your email"

variant="outlined"

sx={{

mb:2,

"& .MuiOutlinedInput-root":{

borderRadius:"14px",

background:"rgba(255,255,255,.08)",

color:"#fff",

height:46,

"& fieldset":{

borderColor:"rgba(255,255,255,.12)"

},

"&:hover fieldset":{

borderColor:"#42A5F5"

},

"&.Mui-focused fieldset":{

borderColor:"#42A5F5"

}

},

"& input":{

color:"#fff"

},

"& input::placeholder":{

color:"#CBD5E1",

opacity:1

}

}}

/>

<Button

fullWidth

variant="contained"

sx={{

height:46,

borderRadius:"14px",

fontWeight:700,

textTransform:"none",

fontSize:15,

background:
"linear-gradient(90deg,#1976D2,#42A5F5)",

boxShadow:"none",

"&:hover":{

background:
"linear-gradient(90deg,#1565C0,#2196F3)",

transform:"translateY(-2px)",

boxShadow:
"0 10px 25px rgba(25,118,210,.35)"

}

}}

>

Subscribe

</Button>

</Grid>
      </Grid>

      {/* ================= Divider ================= */}

      <Box
        sx={{
          mt: 5,
          mb: 3,
          borderTop: "1px solid rgba(255,255,255,.08)",
        }}
      />

      {/* ================= Bottom Footer ================= */}

      <Box
        sx={{
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

    {/* ================= Back To Top ================= */}

    <IconButton
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      sx={{
        position: "absolute",
        bottom: 25,
        right: 25,
        width: 48,
        height: 48,
        bgcolor: "#1976D2",
        color: "#fff",
        boxShadow: "0 12px 30px rgba(25,118,210,.35)",

        "&:hover": {
          bgcolor: "#1565C0",
          transform: "translateY(-3px)",
        },
      }}
    >
      ↑
    </IconButton>

</Box>

);
}