import Header from "../Header";
import { Divider, Grid, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import rentalCar from "../../../assets/rentalCar.jpg";
import towingCover from "../../../assets/towingCover.jpg";
import towing4 from "../../../assets/towing4.jpg";

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
          <img
            src={towing4}
            alt="Aluminum Certified"
            style={{ width: "90%" }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
