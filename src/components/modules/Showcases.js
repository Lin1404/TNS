import { useEffect } from "react";
import Carousel from "../Carousel";
import compare3 from "../../assets/compare3.png";
import BackToHomeButton from "./BackToHomeButton";
import { BackToHomeIcon } from "./BackToHomeButton";
const imgsToCompare = [compare3];

export default function Showcases() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="compareSections headerPadding">
      <BackToHomeButton />
      <div className="moduleContainer">
        <h2 className="sectionTitle">Case Show:</h2>
        <div className="showcaseContainer">
          <Carousel imgs={imgsToCompare} />
        </div>
        <BackToHomeIcon />
      </div>
    </div>
  );
}
