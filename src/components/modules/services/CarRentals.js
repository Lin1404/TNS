import Header from "../Header";
import { Divider, Grid, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import rentalCover from "../../../assets/rentalCover.jpg";
import rentalCar from "../../../assets/rentalCar.jpg";
import enterprise from "../../../assets/enterprise.jpg";

export default function CarRentals() {
  return (
    <div className="serviceBackgroundColor">
      <Header />
      <img src={rentalCover} alt="repair Img" className="ImgFill" />
      <Grid container xs={12} className="highlight">
        <Grid item xs={5}>
          <Stack className="serviceContext">
            <Typography variant="h3" padding={1}>
              CAR RENTAL
            </Typography>
            <Divider variant="middle" />
            <Typography variant="subtitle1" padding={2}>
              Require a rental vehicle while your car is under repair? We offer
              on-site rental vehicles in partnership with our local Enterprise
              Rental Car branch, ensuring a seamless experience. At TNS Auto
              Collision, we provide a convenient one-stop solution: drop off
              your vehicle, pick up your rental, and upon completion of repairs,
              return your rental to us. For any inquiries, please feel free to
              contact us. Your satisfaction is our priority.
            </Typography>
            <img
              src={enterprise}
              alt="Enterprise Logo"
              style={{ width: "50%", alignSelf: "center" }}
            />
          </Stack>
        </Grid>
        <Grid item xs={5}>
          <img
            src={rentalCar}
            alt="Aluminum Certified"
            style={{ width: "90%" }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
