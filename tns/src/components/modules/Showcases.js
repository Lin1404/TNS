import { useEffect } from "react";
import Carousel from "../Carousel";
import compare1 from "../../assets/compare1.jpeg";
import compare2 from "../../assets/compare2.jpeg";
import BackToHomeButton from "./BackToHomeButton";

const imgsToCompare = [compare1, compare2];

export default function Showcases() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="compareSections headerPadding">
        <BackToHomeButton />
        <div className="sectionTitle">Case Show:</div>
        <Carousel imgs={imgsToCompare} />
      </div>
    </div>
  );
}
