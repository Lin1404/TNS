import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const modulesRouting = [
  { path: "/showcases", label: "Show Cases" },
  { path: "/workshop", label: "Our Workshop" },
  { path: "/certifications", label: "Certifications" },
  { path: "/partnership", label: "Partnership Support" },
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
