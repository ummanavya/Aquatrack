import {
  Grid,
  Paper,
  Typography,
  Box,
  LinearProgress,
} from "@mui/material";

import {
  Apartment,
  WaterDrop,
  CurrencyRupee,
  WarningAmber,
  TrendingUp,
  TrendingDown,
} from "@mui/icons-material";

const cards = [
  {
    title: "Water Saved",
    value: "14,250 KL",
    icon: <WaterDrop />,
    progress: 92,
    color: "#2563eb",
    trend: "+12.5%",
    positive: true,
  },
  {
    title: "Revenue",
    value: "₹4,85,000",
    icon: <CurrencyRupee />,
    progress: 78,
    color: "#16a34a",
    trend: "+8.4%",
    positive: true,
  },
  {
    title: "Apartments",
    value: "126",
    icon: <Apartment />,
    progress: 84,
    color: "#7c3aed",
    trend: "+15",
    positive: true,
  },
  {
    title: "Leak Alerts",
    value: "5",
    icon: <WarningAmber />,
    progress: 22,
    color: "#ef4444",
    trend: "-20%",
    positive: false,
  },
];

export default function KPICards() {

  return (

    <Grid container spacing={3}>

      {cards.map((card,index)=>(

        <Grid
          item
          xs={12}
          sm={6}
          lg={3}
          key={index}
        >

          <Paper

            sx={{

              p:3,

              borderRadius:4,

              height:"100%",

              transition:".35s",

              cursor:"pointer",

              "&:hover":{

                transform:"translateY(-8px)",

                boxShadow:8

              }

            }}

          >

            <Box

              display="flex"

              justifyContent="space-between"

              alignItems="center"

            >

              <Box>

                <Typography

                  color="text.secondary"

                  fontSize={14}

                >

                  {card.title}

                </Typography>

                <Typography

                  fontSize={30}

                  fontWeight={800}

                  mt={1}

                >

                  {card.value}

                </Typography>

              </Box>

              <Box

                sx={{

                  width:65,

                  height:65,

                  borderRadius:3,

                  background:card.color,

                  color:"#fff",

                  display:"flex",

                  alignItems:"center",

                  justifyContent:"center",

                  fontSize:30

                }}

              >

                {card.icon}

              </Box>

            </Box>

            <Box mt={3}>

              <LinearProgress

                variant="determinate"

                value={card.progress}

                sx={{

                  height:9,

                  borderRadius:10

                }}

              />

            </Box>

            <Box

              display="flex"

              alignItems="center"

              mt={2}

              gap={1}

            >

              {card.positive ? (

                <TrendingUp

                  sx={{

                    color:"#16a34a"

                  }}

                />

              ) : (

                <TrendingDown

                  sx={{

                    color:"#ef4444"

                  }}

                />

              )}

              <Typography

                fontWeight={700}

                color={

                  card.positive

                  ? "#16a34a"

                  : "#ef4444"

                }

              >

                {card.trend}

              </Typography>

              <Typography

                color="text.secondary"

                fontSize={13}

              >

                this month

              </Typography>

            </Box>

          </Paper>

        </Grid>

      ))}

    </Grid>

  );

}