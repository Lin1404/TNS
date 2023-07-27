import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Tooltip from "@mui/material/Tooltip";

export default function BackToHomeButton() {
  return (
    <Link to={"/tns"}>
      <Tooltip title="Back to Home page">
        <Button style={{ display: "block" }}>Back to Home Page</Button>
      </Tooltip>
    </Link>
  );
}

export function BackToHomeIcon() {
  return (
    <div>
      <div className="backToHomeIconButton">
        <Link to={"/tns"}>
          <Tooltip title="Back to Home page">
            <Button style={{ display: "block" }}>
              <ArrowBackIcon variant="contained" style={{ color: "white" }} />
            </Button>
          </Tooltip>
        </Link>
      </div>
    </div>
  );
}