import ecoFriendly from "../assets/ecoFriendly.png";
import ppg2 from "../assets/ppg2.jpeg";
import certifications from "../assets/certifications.png";
import Partnership from "./modules/DRP";
import Modules from "./Modules";
import Reviews from "./modules/Reviews";
import AccidentProcess from "./AccidentProcess";
import RepairProcess from "./RepairProcess";
import tnsAnime from "../assets/tnsAnime.mp4";
import Header from "./modules/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="paddingTop">
        <video
          className="VideoTag"
          autoPlay
          loop
          muted
          style={{ width: "70%" }}
        >
          <source src={tnsAnime} type="video/mp4" />
        </video>
      </div>
      <AccidentProcess />
      <RepairProcess />
      <Partnership isHideGoBackButton={true} />
      <Reviews />
    </>
  );
}
