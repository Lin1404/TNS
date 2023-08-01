import { useEffect } from "react";
import Carousel from "../Carousel";
import compare3 from "../../assets/compare3.png";
import compare5 from "../../assets/compare5.png";
import BackToHomeButton from "./BackToHomeButton";
import { BackToHomeIcon } from "./BackToHomeButton";
const imgsToCompare = [compare3, compare5];

export default function BeforeAndAfter() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="compareSections headerPadding">
      <BackToHomeButton />
      <h2 className="sectionTitle">Before & After Photos:</h2>
      <Carousel imgs={imgsToCompare} />
      <BackToHomeIcon />
      <div className="paddingBot" />
    </div>
  );
}
