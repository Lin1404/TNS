import step1 from "../../assets/step1.png";
import step2 from "../../assets/step2.png";
import step3 from "../../assets/step3.png";
import Carousel from "../Carousel";

const stepImgs = [step1, step2, step3];

export default function RepairProcess() {
  return (
    <div>
      <h2 className="sectionTitle">3 Steps Fix Your Car Easily:</h2>
      <Carousel imgs={stepImgs} />
    </div>
  );
}
