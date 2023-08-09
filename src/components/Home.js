import ase from "../assets/ase.jpeg";
import icar2 from "../assets/icar2.jpeg";
import ecoFriendly from "../assets/ecoFriendly.png";
import ppg2 from "../assets/ppg2.jpeg";
import sp2 from "../assets/sp2.jpeg";
import Partnership from "./modules/DRP";
import Modules from "./modules/Modules";
import Reviews from "./modules/Reviews";
import AccidentProcess from "./AccidentProcess";
import RepairProcess from "./RepairProcess";
import tnsAnime from "../assets/tnsAnime.mp4";

export default function Home() {
  return (
    <>
      <div className="paddingTop">
        <video
          className="VideoTag"
          autoPlay
          loop
          muted
          style={{ width: "fill-available" }}
        >
          <source src={tnsAnime} type="video/mp4" />
        </video>
      </div>
      <AccidentProcess />
      <RepairProcess />
      <Partnership isHideGoBackButton={true} />
      <div className="certifications paddingBot">
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
          alt="illustration"
          style={{ width: "20%", paddingBottom: "5%" }}
        />
        <h2 className="sectionTitle">Certifications</h2>
        <p>
          TNS Auto Group is your state of the art collision repair facility.
        </p>
        <p>
          We meet our goals by utilizing today's most advanced systems in the
          collision repair industry and combining them with our highly trained
          and certified repair technicians. This assures that your vehicle is
          repaired to factory specs and pre-accident condition.
        </p>
        <div className="certificationModulePadding paddingBot">
          <div className="certificationsLogo">
            <img src={icar2} alt="illustration" />
            <img
              src={sp2}
              alt="illustration"
              style={{ height: "4rem", paddingRight: 0 }}
            />
            <img
              src={ase}
              alt="illustration"
              style={{ paddingLeft: 0, marginLeft: "-1rem" }}
            />
          </div>
        </div>
      </div>

      <Reviews />
      <Modules />
    </>
  );
}
