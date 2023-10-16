import Header from "../Header";
import { Divider, Grid, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import towingCover from "../../../assets/towingCover.jpg";
import towing from "../../../assets/towing.jpg";

export default function Towing() {
  return (
    <div className="serviceBackgroundColor">
      <Header />
      <img src={towingCover} alt="repair Img" className="ImgFill" />
      <Grid container xs={12} className="highlight">
        <Grid item xs={5}>
          <Stack className="serviceContext">
            <Typography variant="h3" padding={1}>
              Towing Services
            </Typography>
            <Divider variant="middle" />
            <Typography variant="subtitle1" padding={2}>
              Require towing to our repair facility? Rest assured, we offer
              professional towing services to transport your vehicle to TNS Auto
              Collision using advanced flatbed or wheel lift methods. Please
              contact us to coordinate towing for your non-drivable vehicle. Our
              team is ready to assist you promptly and professionally.
            </Typography>
            <Typography variant="subtitle1" padding={2}>
              Call us anytime for towing services: (719) 747 - 4749
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={5}>
          <img src={towing} alt="Aluminum Certified" style={{ width: "90%" }} />
        </Grid>
      </Grid>
    </div>
  );
}
