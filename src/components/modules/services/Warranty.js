import Header from "../Header";
import { Divider, Grid, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import rentalCar from "../../../assets/rentalCar.jpg";
import warrantyCover from "../../../assets/warrantyCover.png";
import warranty from "../../../assets/warranty.png";

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
            {/* <Typography variant="subtitle1" padding={2}>
              Require a rental vehicle while your car is under repair? We offer
              on-site rental vehicles in partnership with our local Enterprise
              Rental Car branch, ensuring a seamless experience. At TNS Auto
              Collision, we provide a convenient one-stop solution: drop off
              your vehicle, pick up your rental, and upon completion of repairs,
              return your rental to us. For any inquiries, please feel free to
              contact us. Your satisfaction is our priority.
            </Typography> */}
            <Typography variant="subtitle1" padding={2}>
              Your repair is guaranteed for as long as you own your car. Our
              warranty covers the mechanics, paint, parts and collision work
              associated with your claim. Other warranties may apply.
            </Typography>
            <Typography variant="subtitle1" padding={2}>
              * Make sure keep the invoice for Lifetime Warranty, labor not
              included
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={5}>
          <img
            src={warranty}
            alt="Aluminum Certified"
            style={{ width: "90%" }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
