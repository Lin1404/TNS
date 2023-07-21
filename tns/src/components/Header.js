import tnsLogo from "../assets/tns.svg";
// import { Button } from "@mui/material";
import "./style.css";
// import { useState } from "react";
// import CallIcon from "@mui/icons-material/Call";
// import Modal from "@mui/material/Modal";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export default function Header() {
  // const [isShowModal, setIsShowModal] = useState(false);

  // const ContactButton = () => {
  //   return (
  //     <div className="img">
  //       <CallIcon className="buttonLetter" style={{ fontSize: "xxx-large" }} />
  //     </div>
  //   );
  // };
  return (
    <div className="header backgroundColor">
      <div className="headerGroup">
        <img
          src={tnsLogo}
          alt="illustration"
          style={{ width: "5rem", paddingRight: "1rem" }}
        />
        <div className="title">
          <h1 style={{ marginBottom: "5%", fontSize: "40px" }}>
            TNS Auto Collision
          </h1>
          <h6 style={{ marginTop: 0 }}>
            Top 1% Rank Auto Body Shop in United State
          </h6>
        </div>
      </div>
      {/* <div className="buttonContainer">
        <ContactButton />
      </div> */}
      <div className="itemContainer">
        <div className="headerIcons">
          <LocalPhoneOutlinedIcon className="callUsIcon" />
          (718) 259-0075
        </div>

        <div className="headerIcons">
          <EmailOutlinedIcon className="callUsIcon" />
          <a href="mailto:tnsautogroup@gmail.com">tnsautogroup@gmail.com</a>
        </div>
      </div>
    </div>
  );
}
