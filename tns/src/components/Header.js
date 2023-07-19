import tnsLogo from "../assets/tns.svg";
import { Button } from "@mui/material";
import "./style.css";
import { useState } from "react";
import CallIcon from "@mui/icons-material/Call";
export default function Header() {
  const [isShowContect, setIsShowContect] = useState(false);
  const ReportButton = () => {
    return (
      // <div className="report clickButton">
      <div className="clickButton">
        {/* <Button onClick={() => setIsShowContect(true)}> */}
        {/* <div className="buttonLetter">Report a Claim</div> */}
        <img
          src={tnsLogo}
          alt="illustration"
          className="buttonLetter"
          style={{ width: "60px", paddingRight: "0.5rem" }}
        >
          {/* <Button onClick={() => setIsShowContect(true)}></Button> */}
        </img>
        {/* </Button> */}
      </div>
    );
  };

  const ContactButton = () => {
    return (
      <div className="img">
        {/* <img src={callus} alt="illustration" className="buttonLetter" /> */}
        <CallIcon className="buttonLetter" style={{ fontSize: "xxx-large" }} />
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
        <ContactButton />
        {/* <div className="clickButton">
          <TaxiAlertIcon color="secondary" className="contactButton" />
        </div> */}
      </div>
    </div>
  );
}
