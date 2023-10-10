import Header from "../Header";
import repairCover from "../../../assets/repairCover.jpg";
import repair from "../../../assets/repair.jpg";
import { Divider, Grid, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function CollisionRepair() {
  return (
    <>
      <Header />
      <img src={repairCover} alt="repair Img" />
      <Grid container xs={12} columnGap={15} className="highlight">
        <Grid item xs={5}>
          <Stack>
            <Typography variant="h4" padding={1}>
              QUALITY COLLISION REPAIR
            </Typography>
            <Divider variant="middle" />
            <Typography variant="subtitle1" padding={2}>
              Welcome to TNS Auto Collision, your premium destination for
              comprehensive auto collision repairs. Committed to excellence, our
              full-service center guarantees top-notch repair work on every
              vehicle we service. Our highly skilled technicians are proficient
              in utilizing our state-of-the-art equipment, including a
              computerized laser frame measuring system for precise frame work,
              advanced welding equipment, specialized tools for aluminum repair,
              and high-quality paint equipment.
            </Typography>
            <Typography variant="subtitle1" padding={2}>
              Each vehicle entrusted to us undergoes a meticulous assessment,
              enabling us to create a customized work plan aimed at restoring
              your vehicle to its pre-loss condition. Experience unparalleled
              expertise and attention to detail at TNS Auto Collision.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={5}>
          <img src={repair} alt="Aluminum Certified" style={{ width: "90%" }} />
        </Grid>
      </Grid>
    </>
  );
}
