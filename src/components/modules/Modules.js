import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const modulesRouting = [
  { path: "/tnsauto/drp", label: "DRP Partnerwith" },
  { path: "/tnsauto/beforeandafter", label: "Before and After Photos" },
  { path: "/tnsauto/team", label: "Our Team" },
  { path: "/tnsauto/certifications", label: "Certifications" },
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
                fontSize: "1.3rem",
                color: "#fff",
              }}
            >
              {item.label}
            </Button>
          </Link>
        </div>
      ))}
      <div className="moduleButtonContainer">
        <a href="https://www.tnsautoinc.com/">
          <Button
            className="moduleButton"
            style={{
              fontFamily: "inherit",
              fontSize: "1.3rem",
              color: "#fff",
            }}
          >
            Partner Shop
          </Button>
        </a>
      </div>
    </div>
  );
}
