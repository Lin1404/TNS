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
        <div className="moduleContainer">
          <h2 className="sectionTitle">Our Workshop:</h2>
          <Carousel imgs={workshop} />
        </div>
      </div>
    </div>
  );
}
