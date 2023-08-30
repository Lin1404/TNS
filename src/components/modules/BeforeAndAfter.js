import { useEffect } from "react";
import Carousel from "../Carousel";
import compare1 from "../../assets/compare1.png";
import compare2 from "../../assets/compare2.png";
import compare3 from "../../assets/compare3.png";
import compare4 from "../../assets/compare4.png";
import compare5 from "../../assets/compare5.png";
import compare6 from "../../assets/compare6.png";
import compare7 from "../../assets/compare7.png";
import BackToHomeButton from "./BackToHomeButton";
import { BackToHomeIcon } from "./BackToHomeButton";
const imgsToCompare = [
  compare1,
  compare2,
  compare3,
  compare4,
  compare5,
  compare6,
  compare7,
];

export default function BeforeAndAfter() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="compareSections">
      <div className="backgroundColorWhite paddingTop" />
      <BackToHomeButton />
      <h2 className="sectionTitle">Before & After Photos:</h2>
      <Carousel imgs={imgsToCompare} />
      <BackToHomeIcon />
      <div className="paddingBot" />
    </div>
  );
}
