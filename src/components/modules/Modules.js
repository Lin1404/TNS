import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const modulesRouting = [
  { path: "/tns/showcases", label: "Show Cases" },
  { path: "/tns/workshop", label: "Our Workshop" },
  { path: "/tns/certifications", label: "Certifications" },
  { path: "/tns/drp", label: "DRP Partnerwith" },
];
// https://www.tnsautoinc.com/
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
