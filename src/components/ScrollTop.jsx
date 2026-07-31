import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import useScrollTrigger from "@mui/material/useScrollTrigger";

export default function ScrollTop() {
  const trigger = useScrollTrigger({
    threshold: 250,
  });

  return (
    <Zoom in={trigger}>
      <Fab
        color="primary"
        size="medium"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        sx={{
          position: "fixed",
          right: 24,
          bottom: 24,
          zIndex: 2000,
        }}
      >
        <KeyboardArrowUpRoundedIcon />
      </Fab>
    </Zoom>
  );
}