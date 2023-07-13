import tnsLogo from "../assets/tns.svg";
import "./style.css";

export default function MainPage() {
  return (
    <div className="whiteBackground">
      <div className="header">
        <group className="group">
          <img
            src={tnsLogo}
            alt="illustration"
            style={{ width: "10%", paddingRight: "0.5rem" }}
          />
          <p className="title">
            <h1>TNS Auto Collision</h1>
            <h4>Top 1% Auto Body Shop in United State</h4>
          </p>
        </group>
        <report className="report">
          <background>Report a Claim</background>
        </report>
      </div>
    </div>
  );
}
