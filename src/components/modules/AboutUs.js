import { useEffect } from "react";
import tnsShop from "../../assets/tnsShop.png";
import Header from "./Header";
import { Grid, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import team from "../../assets/team.png";

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <div>
        <div className="backgroundColorWhite" />
        <h2 className="sectionTitle">About Us:</h2>
        <img
          src={tnsShop}
          alt="shop"
          style={{
            width: "70%",
            paddingBottom: "5%",
          }}
        />
      </div>
      <div className="aboutUsContainer">
        <img
          src={team}
          alt="our team"
          style={{
            width: "90%",
            justifySelf: "center",
            alignSelf: "center",
          }}
        />
        <div className="aboutUsText">
          <Typography>
            With{" "}
            <span style={{ fontSize: "xx-large", color: "#1b73bc" }}>25+</span>{" "}
            years of automotive collision experience, we are your one-stop
            repair expert. We prioritize quality and safety, partnering with
            major insurance companies and holding Geico Auto Repair Express
            certification. Trust our platinum I-CAR & ASE certified technicians
            for your vehicle's insurance claims and repairs.
          </Typography>
          <Typography
            variant="h4"
            style={{ fontFamily: "cursive", fontWeight: "600" }}
          >
            We are serving the community since{" "}
            <span style={{ color: "#1b73bc" }}>1995</span>.
          </Typography>
          <Grid container xs={12}>
            <Grid item className="aboutUsSectionsContainer" xs={6}>
              <div className="aboutUsSections">
                <CheckIcon />
                <span>State of the Art Equipment</span>
              </div>
              <div className="aboutUsSections">
                <CheckIcon />
                <span>I-CAR Gold Class Facility</span>
              </div>
              <div className="aboutUsSections">
                <CheckIcon />
                <span>I-CAR Platinum Technicians</span>
              </div>
              <div className="aboutUsSections">
                <CheckIcon />
                <span>Lifetime Warranty</span>
              </div>
            </Grid>
            <Grid item className="aboutUsSectionsContainer" xs={6}>
              <div className="aboutUsSections">
                <CheckIcon />
                <span>Walk-in AnyTime</span>
              </div>
              <div className="aboutUsSections">
                <CheckIcon />
                <span>Partner with Major Insurances</span>
              </div>
              <div className="aboutUsSections">
                <CheckIcon />
                <span>Prioritize Customer Satisfaction</span>
              </div>
              <div className="aboutUsSections">
                <CheckIcon />
                <span>One Stop Repair Your Car</span>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>

      <div className="paddingBot" />
    </div>
  );
}
