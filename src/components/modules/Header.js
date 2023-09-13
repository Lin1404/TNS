import tnsLogo from "../../assets/tns.svg";
import "../style.css";
import Modules from "../Modules";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export default function Header() {
  const { height, width } = useWindowDimensions();
  return width > 700 ? (
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
  ) : (
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
      <Modules isButton={true} />
    </div>
  );
}
