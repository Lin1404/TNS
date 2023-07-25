import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Modules() {
  return (
    <div className="ModulesSection">
      <Link to={`/showcases`}>
        <Button>Show Cases</Button>
      </Link>
      <Link to={`/workshop`}>
        <Button>Our Workshop</Button>
      </Link>
      <Link to={`/certifications`}>
        <Button>Certifications & Partnership Support</Button>
      </Link>
    </div>
  );
}
