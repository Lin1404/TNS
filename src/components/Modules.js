import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const modulesRouting = [
  { path: "/tnsauto", label: "Home" },
  { path: "/tnsauto/aboutus", label: "About Us" },
  { path: "/tnsauto/drp", label: "DRP" },
  { path: "/tnsauto/certifications", label: "Certifications" },
  { path: "/tnsauto/team", label: "Our Team" },
  { path: "/tnsauto/beforeandafter", label: "Gallery" },
];

export default function Modules() {
  return (
    <div className="modulesSection">
      {modulesRouting.map((item) => (
        <div className="moduleButtonContainer">
          <Link to={`${item.path}`}>
            <Button
              className="moduleButton"
              style={{
                fontFamily: "inherit",
                fontSize: "smaller",
                color: "white",
              }}
            >
              {item.label}
            </Button>
          </Link>
        </div>
      ))}
      <div className="moduleButtonContainer">
        <a href="https://www.tnsautoinc.com/" target="blank">
          <Button
            className="moduleButton"
            style={{
              fontFamily: "inherit",
              fontSize: "smaller",
              color: "white",
            }}
          >
            Other Location
          </Button>
        </a>
      </div>
    </div>
  );
}
