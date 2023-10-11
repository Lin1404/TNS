import Header from "../Header";
import detailingCover from "../../../assets/detailingCover.jpg";
import detailing from "../../../assets/detailing.jpg";
import { Divider, Grid, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Detailing() {
  return (
    <div className="serviceBackgroundColor">
      <Header />
      <img src={detailingCover} alt="repair Img" className="ImgFill" />
      <Grid container xs={12} className="highlight">
        <Grid item xs={5}>
          <Stack className="serviceContext">
            <Typography variant="h3" padding={1}>
              QUALITY COLLISION REPAIR
            </Typography>
            <Divider variant="middle" />
            <Typography variant="subtitle1" padding={2}>
              Welcome to TNS Auto Collision, where we treat every vehicle with
              expert care, as if it were our own. Our skilled technicians
              meticulously inspect and polish repaired areas, ensuring they look
              flawless leaving no trace of the incident.
            </Typography>
            <Typography variant="subtitle1" padding={2}>
              When you arrive to collect your vehicle, you will find it
              impeccably washed and meticulously wiped down, delivering an
              experience akin to driving away in a showroom-condition, brand-new
              car. At TNS Auto Collision, expect nothing less than perfection in
              every detail.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={5}>
          <img
            src={detailing}
            alt="Aluminum Certified"
            style={{ width: "90%" }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
