import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import yelpLogo from "../assets/yelpLogo.svg";
import facebookLogo from "../assets/facebookLogo.svg";
import instegramLogo from "../assets/instagramLogo.svg";
import { useState } from "react";

const modulesRouting = [
  { path: "/tnsauto", label: "Home" },
  { path: "/tnsauto/aboutus", label: "About Us" },
  { path: "/tnsauto/drp", label: "DRP" },
  { path: "/tnsauto/certifications", label: "Certifications" },
  { path: "/tnsauto/gallery", label: "Gallery" },
];

export default function Modules() {
  const [mouseOnModule, setmouseOnModule] = useState(-1);
  const [isMouseOnOhterLocationModule, setIsMouseOnOhterLocationModule] =
    useState(false);

  return (
    <div className="modulesContainer">
      <div className="modulesSection">
        {modulesRouting.map((item, idx) => (
          <div className="moduleButtonContainer" key={item.label}>
            <Link to={`${item.path}`}>
              <Button
                onMouseEnter={() => setmouseOnModule(idx)}
                onMouseLeave={() => setmouseOnModule(-1)}
                className="moduleButton"
                style={{
                  fontFamily: "inherit",
                  fontSize: "smaller",
                  color:
                    mouseOnModule === idx ||
                    window.location.pathname === item.path
                      ? "#e3d515"
                      : "white",
                }}
              >
                {item.label}
              </Button>
            </Link>
          </div>
        ))}
        <div className="moduleButtonContainer" key={"otherlocation"}>
          <a href="https://www.tnsautoinc.com/" target="blank">
            <Button
              className="moduleButton"
              onMouseEnter={() => setIsMouseOnOhterLocationModule(true)}
              onMouseLeave={() => setIsMouseOnOhterLocationModule(false)}
              style={{
                fontFamily: "inherit",
                fontSize: "smaller",
                color: isMouseOnOhterLocationModule ? "#e3d515" : "white",
              }}
            >
              Other Location
            </Button>
          </a>
        </div>
      </div>
      <div className="socialMediaIconsOnModules">
        <a href="https://www.facebook.com/TNSAutoGroup/" target="blank">
          <img src={facebookLogo} alt="illustration" />
        </a>
        <a href="https://www.instagram.com/tnsautogroup/" target="blank">
          <img src={instegramLogo} alt="illustration" />
        </a>
        <a
          href="https://www.yelp.com/biz/tns-auto-group-brooklyn"
          target="blank"
        >
          <img src={yelpLogo} alt="illustration" />
        </a>
      </div>
    </div>
  );
}
