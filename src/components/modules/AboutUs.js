import { useEffect } from "react";
import Carousel from "../Carousel";
import office from "../../assets/Office.jpeg";
import tnsShop from "../../assets/tnsShop.png";
import ecoFriendly from "../../assets/ecoFriendly.png";
import ppg2 from "../../assets/ppg2.jpeg";
import Header from "./Header";
import { Grid, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <div className="compareSections ">
        <div className="backgroundColorWhite" />
        <h2 className="sectionTitle">About Us:</h2>
        <img
          src={tnsShop}
          alt="illustration"
          style={{
            width: "70%",
            paddingBottom: "5%",
          }}
        />
      </div>
      <div className="aboutUsContainer">
        <img
          src={office}
          alt="illustration"
          style={{
            width: "90%",
            justifySelf: "center",
            alignSelf: "center",
          }}
        />
        <div className="aboutUsText">
          <Typography variant="h5">WHO WE ARE</Typography>
          <Typography>We are serving the community since 1995.</Typography>
          <div className="aboutUsTextContext">
            With{" "}
            <span style={{ fontSize: "xx-large", color: "#1b73bc" }}>25+</span>{" "}
            years of automotive collision experience, we are your one-stop
            repair expert. We prioritize quality and safety, partnering with
            major insurance companies and holding Geico Auto Repair Express
            certification. Trust our platinum I-CAR & ASE certified technicians
            for your vehicle's insurance claims and repairs.
          </div>
          <div className="aboutUsSectionsContainer">
            <div className="aboutUsSections">
              <CheckIcon />
              <span>25+ Years Of Experience</span>
            </div>
            <div className="aboutUsSections">
              <CheckIcon />
              <span>Manufacturer Certified Facility</span>
            </div>
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
          </div>
        </div>
      </div>
      {/* <div className="ppgAnnouncementContainer">
        <img src={ecoFriendly} alt="illustration" style={{ width: "40%" }} />
        <div className="ppgAnnouncement">
          <h2>
            Make the eco-friendly choice for your vehicle and the planet.
            Contact us today and let's GO Green together!
          </h2>
          <div>
            <p>
              We proudly use PPG ENVIROBASE® paint with computer-controlled
              paint matching to assure the right match to your original finish.
            </p>
            <p>
              Initially introduced in 1999 to meet low VOC legislation, the
              Envirobase High Performance system is now the leading premium
              waterborne paint system in North America.
            </p>
          </div>
        </div>
      </div>
      <img
        src={ppg2}
        alt="illustration"
        style={{ width: "20%", paddingBottom: "5%" }}
      />
      <div className="greenAnnouncementContainer">
        <div>
          <h2>Embrace Eco-Friendly Solutions:</h2>
          <p>
            At our auto body shop, we are committed to making a positive impact
            on the environment. That's why we proudly utilize PPG waterborne
            paint, a cutting-edge eco-friendly paint solution. By choosing us,
            you're not only getting top-notch auto body services but also
            actively participating in saving our planet.
          </p>
        </div>

        <div>
          <h2>Why PPG Waterborne Paint?</h2>
          <p>
            PPG waterborne paint is a revolutionary product designed to reduce
            volatile organic compounds (VOCs) emitted during the painting
            process. This helps minimize harmful environmental effects and air
            pollution. Our dedication to using environmentally responsible paint
            demonstrates our commitment to sustainability and the well-being of
            our community.
          </p>
        </div>

        <div>
          <h2>Uncompromising Quality:</h2>
          <p>
            Our passion for the environment doesn't mean we compromise on
            quality. With PPG waterborne paint, your vehicle receives a superior
            paint finish that is both vibrant and long-lasting. You can trust
            our skilled technicians to bring out the best in your car while
            being mindful of its impact on our planet.
          </p>
        </div>

        <div>
          <h2>Join Us in the Green Movement:</h2>
          <p>
            By choosing our auto body shop and PPG waterborne paint, you're
            taking an active step towards a greener future. Together, we can
            make a difference and protect the environment for generations to
            come.
          </p>
        </div>
      </div> */}
      <div className="paddingBot" />
    </div>
  );
}
