import Header from "../Header";
import { Divider, Grid, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import warrantyCover from "../../../assets/warrantyCover.png";
import warranty2 from "../../../assets/warranty2.jpg";
import warranty3 from "../../../assets/warranty3.jpg";

export default function Warranty() {
  return (
    <div className="serviceBackgroundColor">
      <Header />
      <img src={warrantyCover} alt="repair Img" className="ImgFill" />
      <Grid container xs={12} className="highlight">
        <Grid item xs={5}>
          <Stack className="serviceContext">
            <Typography variant="h3" padding={1}>
              Lifetime Warranty
            </Typography>
            <Divider variant="middle" />
            <Typography variant="subtitle1" padding={2}>
              Your repair is guaranteed for as long as you own your car. Our
              warranty covers the mechanics, paint, parts and collision work
              associated with your claim. Other warranties may apply.
            </Typography>
            <Typography variant="subtitle1" padding={2}>
              * Make sure keep the invoice for Lifetime Warranty, labor not
              included
            </Typography>
            <img
              src={warranty3}
              alt="warranty logos"
              style={{ width: "100%", paddingTop: "5%" }}
            />
          </Stack>
        </Grid>
        <Grid item xs={5}>
          <img src={warranty2} alt="warranty logo" style={{ width: "90%" }} />
        </Grid>
      </Grid>
    </div>
  );
}
