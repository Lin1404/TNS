import tnsLogo from "../assets/tns.svg";
import { Button } from "@mui/material";
import "./style.css";
import { useState } from "react";
import CallIcon from "@mui/icons-material/Call";
import Modal from "@mui/material/Modal";

export default function Header() {
  const [isShowModal, setIsShowModal] = useState(false);

  const ContactButton = () => {
    return (
      <div className="img">
        <CallIcon className="buttonLetter" style={{ fontSize: "xxx-large" }} />
      </div>
    );
  };
  return (
    <div className="header backgroundColor">
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
      <div className="buttonContainer">
        <ContactButton />
      </div>
    </div>
  );
}
