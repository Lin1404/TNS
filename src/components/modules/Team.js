import { useEffect } from "react";
import Carousel from "../Carousel";
import BackToHomeButton from "./BackToHomeButton";
import office from "../../assets/Office.jpeg";
import ecoFriendly from "../../assets/ecoFriendly.png";
import ppg2 from "../../assets/ppg2.jpeg";
import { BackToHomeIcon } from "./BackToHomeButton";

const team = [office];

export default function Team() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="compareSections ">
        <div className="backgroundColorWhite paddingTop " />
        <BackToHomeButton />
        <h2 className="sectionTitle">Our Team:</h2>
        <Carousel imgs={team} />
      </div>
      <div className="ppgAnnouncementContainer">
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
      </div>
      <BackToHomeIcon />
      <div className="paddingBot" />
    </div>
  );
}
