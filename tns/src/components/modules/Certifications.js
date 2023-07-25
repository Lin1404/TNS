import { useEffect } from "react";
import BackToHomeButton from "./BackToHomeButton";
import ase from "../../assets/ase.jpeg";
import icarLogo from "../../assets/icarLogo.jpeg";
// import icar1 from "../../assets/icar1.jpeg";
import icar2 from "../../assets/icar2.jpeg";
import ppg1 from "../../assets/ppg1.jpeg";
import ppg2 from "../../assets/ppg2.jpeg";
import sp2 from "../../assets/sp2.jpeg";
import geico from "../../assets/geico.jpeg";
import statefarm from "../../assets/statefarm.jpeg";
import Partnership from "./Partnership";

export default function Certifications() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="headerPadding">
      <BackToHomeButton />
      <div className="moduleContainer">
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
        <div className="certificationsLogo">
          <img src={icar2} alt="illustration" />
          <img src={sp2} alt="illustration" style={{ height: "4rem" }} />
          <img
            src={ppg2}
            alt="illustration"
            style={{ height: "4rem", paddingRight: 0 }}
          />
          <img
            src={ase}
            alt="illustration"
            style={{ paddingLeft: 0, marginLeft: "-1rem" }}
          />
        </div>
        <Partnership />
      </div>
    </div>
  );
}
