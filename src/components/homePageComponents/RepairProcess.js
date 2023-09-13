import process from "../../assets/process.png";

export default function RepairProcess() {
  return (
    <div>
      <div>
        <div className="moduleContainer">
          <h2 className="sectionTitle">Do you know the Repair Process?</h2>
          <img
            src={process}
            alt="Repair Process"
            style={{
              width: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
}
