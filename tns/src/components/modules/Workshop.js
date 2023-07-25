import { useEffect } from "react";
import Carousel from "../Carousel";
import BackToHomeButton from "./BackToHomeButton";

const workshop = [];

export default function Workshop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="compareSections headerPadding">
        <BackToHomeButton />
        <div className="sectionTitle">Our Workshop:</div>
        <Carousel imgs={workshop} />
      </div>
    </div>
  );
}
