import Carousel from "../Carousel";
import process from "../../assets/process.png";

const repairProcessImgs = [process];

export default function RepairProcess() {
  return (
    <div>
      <div className="compareSections">
        <div className="moduleContainer">
          <h2 className="sectionTitle">Do you know the Repair Process?</h2>
          <img
            src={repairProcessImgs}
            alt="illustration"
            style={{
              width: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
}
