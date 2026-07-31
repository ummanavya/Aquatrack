import {
  Box,
  Chip,
  Typography,
  Stack,
} from "@mui/material";

import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

function getSeverityColor(type) {

  switch ((type || "").toUpperCase()) {

    case "LEAK":
      return "error";

    case "HIGH_USAGE":
      return "warning";

    case "HIGH_BILL":
      return "info";

    default:
      return "default";
  }

}

function getIcon(type) {

  switch ((type || "").toUpperCase()) {

    case "LEAK":
      return <ErrorOutlineOutlinedIcon color="error" />;

    case "HIGH_USAGE":
      return <WaterDropIcon color="warning" />;

    case "HIGH_BILL":
      return <WarningAmberIcon color="info" />;

    default:
      return <NotificationsActiveIcon color="action" />;
  }

}

function ActiveAlerts({ alerts = [] }) {

  if (alerts.length === 0) {

    return (

      <Box
        sx={{
          textAlign: "center",
          py: 6,
        }}
      >

        <NotificationsActiveIcon
          sx={{
            fontSize: 55,
            color: "#90A4AE",
          }}
        />

        <Typography
          mt={2}
          color="text.secondary"
        >

          No active alerts.

        </Typography>

      </Box>

    );

  }

  return (

    <Stack spacing={2}>

      {alerts.slice(0, 6).map((alert) => (

        <Box
          key={alert.id}
          sx={{
            border: "1px solid #ECEFF1",
            borderRadius: 3,
            p: 2,
            transition: ".3s",
            "&:hover": {
              boxShadow: 3,
            },
          }}
        >

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >

            <Stack
              direction="row"
              spacing={1.5}
              alignItems="center"
            >

              {getIcon(alert.alertType)}

              <Typography
                fontWeight={600}
              >

                {alert.alertType || "Alert"}

              </Typography>

            </Stack>

            <Chip
              size="small"
              label={alert.status || "OPEN"}
              color={getSeverityColor(alert.alertType)}
            />

          </Stack>

          <Typography
            mt={1.5}
            color="text.secondary"
          >

            {alert.message}

          </Typography>

          <Typography
            mt={1}
            fontSize={12}
            color="text.disabled"
          >

            {alert.createdAt || "Recently"}

          </Typography>

        </Box>

      ))}

    </Stack>

  );

}

export default ActiveAlerts;