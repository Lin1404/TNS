import { useEffect } from "react";
import Carousel from "../Carousel";
import compare1 from "../../assets/compare1.jpeg";
import compare2 from "../../assets/compare2.jpeg";
import BackToHomeButton from "./BackToHomeButton";
import { BackToHomeIcon } from "./BackToHomeButton";
const imgsToCompare = [compare1, compare2];

export default function Showcases() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="compareSections headerPadding">
      <BackToHomeButton />
      <div className="moduleContainer">
        <h2 className="sectionTitle">Case Show:</h2>
        <Carousel imgs={imgsToCompare} />
      </div>
      <BackToHomeIcon />
    </div>
  );
}
