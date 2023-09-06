import tnsLogo from "../../assets/tns.svg";
import "../style.css";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Modules from "../Modules";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header backgroundColor">
      <div className="headerGroup">
        <Link to={"/tnsauto"}>
          <img
            src={tnsLogo}
            alt="illustration"
            style={{ width: "5rem", paddingRight: "1rem" }}
          />
        </Link>
        <div className="title">
          <h1
            style={{ marginBottom: "5%", fontSize: "40px", color: "#1b73bc" }}
          >
            TNS Auto Collision
          </h1>
        </div>
      </div>
      <Modules />
    </div>
  );
}
