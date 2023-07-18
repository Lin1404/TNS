import tnsLogo from "../assets/tns.svg";
import { Button } from "@mui/material";
import "./style.css";
import { useState } from "react";

export default function Header() {
  const [isShowContect, setIsShowContect] = useState(false);
  const ReportButton = () => {
    return (
      <div className="report">
        <Button onClick={() => setIsShowContect(true)}>
          <p>Report a Claim</p>
        </Button>
      </div>
    );
  };
  return (
    <div className="headerBackground">
      {isShowContect && alert("show contect")}
      <div className="header">
        <div className="group">
          <img
            src={tnsLogo}
            alt="illustration"
            style={{ width: "10%", paddingRight: "0.5rem" }}
          />
          <div className="title">
            <h1>TNS Auto Collision</h1>
            <h4>Top 1% Auto Body Shop in United State</h4>
          </div>
        </div>
        <ReportButton />
      </div>
    </div>
  );
}
