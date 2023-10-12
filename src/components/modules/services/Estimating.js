import Header from "../Header";
import { Divider, Grid, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import estimateCover from "../../../assets/estimateCover.jpg";
import estimate from "../../../assets/estimate.jpg";

export default function Estimating() {
  return (
    <div className="serviceBackgroundColor">
      <Header />
      <img src={estimateCover} alt="repair Img" className="ImgFill" />
      <Grid container xs={12} className="highlight">
        <Grid item xs={5}>
          <Stack className="serviceContext">
            <Typography variant="h3" padding={1}>
              EXPERT ESTIMATING
            </Typography>
            <Divider variant="middle" />
            <Typography variant="subtitle1" padding={2}>
              At TNS Auto Collision, our experienced estimators conduct a
              meticulous assessment of your vehicle's damage, providing you with
              a comprehensive report. Our process begins with a thorough visual
              inspection to compile a detailed list of necessary repairs, aiming
              to restore your vehicle to its pre-loss condition. Utilizing our
              advanced computerized estimating system, we research the correct
              parts, labor, and safety procedures tailored to your specific
              vehicle.
            </Typography>
            <Typography variant="subtitle1" padding={2}>
              If you are filing an insurance claim, we collaborate closely with
              both you and your insurance company. We schedule appointments at
              our shop, facilitating full disassembly of impacted areas. This
              approach enables our team and the insurance adjuster to assess
              required parts accurately, eliminating any delays in the repair
              process.
            </Typography>
            <Typography variant="subtitle1" padding={2}>
              It's essential to remember that you have the right to choose any
              licensed repair shop for your vehicle's inspection and repair. At
              TNS Auto Collision, our dedicated staff is committed to
              simplifying the estimating and repair process for our valued
              customers. Your satisfaction and convenience are our priorities.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={5}>
          <img
            src={estimate}
            alt="Aluminum Certified"
            style={{ width: "90%" }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
