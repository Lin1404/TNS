import tnsLogo from "../../assets/tns.svg";
import "../style.css";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Modules from "../Modules";

export default function Header() {
  return (
    <div className="header backgroundColor">
      <div className="headerGroup">
        <img
          src={tnsLogo}
          alt="illustration"
          style={{ width: "5rem", paddingRight: "1rem" }}
        />
        <div className="title">
          <h1
            style={{ marginBottom: "5%", fontSize: "40px", color: "#1b73bc" }}
          >
            TNS Auto Collision
          </h1>
        </div>
      </div>
      {/* <div className="itemContainer">
        <div className="headerIcons">
          <LocalPhoneOutlinedIcon className="callUsIcon" />
          (718) 259-0075
        </div>
        <div className="headerIcons">
          <EmailOutlinedIcon className="callUsIcon" />
          <a href="mailto:tnsautogroup@gmail.com">tnsautogroup@gmail.com</a>
        </div>
      </div> */}
      <Modules />
    </div>
  );
}
