import Carousel from "./Carousel";
import CarRepairs from "../assets/CarRepairs.jpg";

const repairProcessImgs = [CarRepairs];

export default function RepairProcess() {
  return (
    <div>
      <div className="compareSections">
        <div className="moduleContainer">
          <h2 className="sectionTitle">Do you know the Repair Process?</h2>
          <Carousel imgs={repairProcessImgs} />
        </div>
      </div>
    </div>
  );
}
