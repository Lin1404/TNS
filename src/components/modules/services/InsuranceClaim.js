import Header from "../Header";
import { Divider, Grid, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import insuranceCover from "../../../assets/insurance-claim.jpg";
import insurance from "../../../assets/insurance.jpg";

export default function InsuranceClaim() {
  return (
    <div className="serviceBackgroundColor">
      <Header />
      <img src={insuranceCover} alt="repair Img" className="ImgFill" />
      <Grid container xs={12} className="highlight">
        <Grid item xs={5}>
          <Stack className="serviceContext">
            <Typography variant="h3" padding={1}>
              INSURANCE CLAIMS
            </Typography>
            <Divider variant="middle" />
            <Typography variant="subtitle1" padding={2}>
              Welcome to TNS Auto Collision, where we recognize the overwhelming
              stress that follows an accident. We are dedicated to simplifying
              your experience during this challenging time. If you have been
              involved in an accident, contact us as your first step. Our
              experienced team will expertly guide you through the necessary
              procedures, ensuring a seamless process to swiftly return you to
              the road.
            </Typography>
            <Typography variant="subtitle1" padding={2}>
              We assist you in filing your insurance claim, whether with your
              insurance provider or a third party. Our professionals collaborate
              with the insurance company to schedule a comprehensive inspection
              at our facility and can also facilitate a rental car reservation
              if required. Throughout the entire process, our knowledgeable
              staff provides unwavering support and assistance.
            </Typography>
            <Typography variant="subtitle1" padding={2}>
              Should you have any questions or concerns, please don't hesitate
              to reach out to our office at (718) 259-0075. Your peace of mind
              and prompt return to normalcy are our utmost priorities.{" "}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={5}>
          <img
            src={insurance}
            alt="Aluminum Certified"
            style={{ width: "90%" }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
