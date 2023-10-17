import ecoFriendly from "../../assets/ecoFriendly.png";
import ppg2 from "../../assets/ppg2.jpeg";
import Header from "./Header";
import serviceIcon1 from "../../assets/serviceIcon1.png";
import serviceIcon2 from "../../assets/serviceIcon2.png";
import serviceIcon3 from "../../assets/serviceIcon3.png";
import serviceIcon4 from "../../assets/serviceIcon4.png";
import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <>
      <Header />
      <div>
        <div>
          <h2 className="sectionTitle">Our Quality Services</h2>
          <div className="serviceContextGrid">
            <img src={serviceIcon1} alt="illustration" />
            <div className="serviceContextContainer">
              <div>Computerized Estimate</div>
              <div>Computerized Frame and Unibody</div>
              <div>Expert Computerized Color Matching</div>
            </div>
            <img src={serviceIcon2} alt="illustration" />
            <div className="serviceContextContainer">
              <div>Insurance Claim Specialist with Licence</div>
              <div>Free Claim Consultation</div>
              <div>All Staff are Certified</div>
            </div>
            <img src={serviceIcon3} alt="illustration" />
            <div className="serviceContextContainer">
              <div>Body Work and Frame Damage Fix</div>
              <div>Part Replacement</div>
              <div>Pick-Up/Delivery Service</div>
            </div>
            <img src={serviceIcon4} alt="illustration" />
            <div className="serviceContextContainer">
              <div>Towing / Flatbed</div>
              <div>24-hour Emergency Service</div>
              <div>Life Time Warranty</div>
            </div>
          </div>
        </div>
        {/* <Container sx={{ paddingBottom: "5%" }}>
          <Link to={"/satisfaction"}>
            <Button
              className="moduleButton"
              variant="contained"
              style={{
                fontFamily: "inherit",
                fontSize: "large",
                width: "30%",
              }}
            >
              Customer Satisfaction →
            </Button>
          </Link>
        </Container> */}
        <h2 className="sectionTitle">Our Best Color Result:</h2>
        <div className="ppgAnnouncementContainer">
          <img src={ecoFriendly} alt="illustration" style={{ width: "25%" }} />
          <div className="ppgAnnouncement">
            <h2>
              Make the eco-friendly choice for your vehicle and the planet.
              Contact us today and let's GO Green together!
            </h2>
            <div>
              <p>
                We proudly use PPG ENVIROBASE® paint with computer-controlled
                paint matching to assure the right match to your original
                finish.
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
          alt="ppg"
          style={{ width: "20%", paddingBottom: "5%" }}
        />
        <div className="greenAnnouncementContainer">
          <div>
            <h2>Embrace Eco-Friendly Solutions:</h2>
            <p>
              At our auto body shop, we are committed to making a positive
              impact on the environment. That's why we proudly utilize PPG
              waterborne paint, a cutting-edge eco-friendly paint solution. By
              choosing us, you're not only getting top-notch auto body services
              but also actively participating in saving our planet.
            </p>
          </div>

          <div>
            <h2>Why PPG Waterborne Paint?</h2>
            <p>
              PPG waterborne paint is a revolutionary product designed to reduce
              volatile organic compounds (VOCs) emitted during the painting
              process. This helps minimize harmful environmental effects and air
              pollution. Our dedication to using environmentally responsible
              paint demonstrates our commitment to sustainability and the
              well-being of our community.
            </p>
          </div>

          <div>
            <h2>Uncompromising Quality:</h2>
            <p>
              Our passion for the environment doesn't mean we compromise on
              quality. With PPG waterborne paint, your vehicle receives a
              superior paint finish that is both vibrant and long-lasting. You
              can trust our skilled technicians to bring out the best in your
              car while being mindful of its impact on our planet.
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
        </div>
      </div>
    </>
  );
}
