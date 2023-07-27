import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const modulesRouting = [
  { path: "/tns/showcases", label: "Show Cases" },
  { path: "/tns/workshop", label: "Our Workshop" },
  { path: "/tns/certifications", label: "Certifications" },
  { path: "/tns/partnership", label: "Partnership Support" },
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
    </div>
  );
}
