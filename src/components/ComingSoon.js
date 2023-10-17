import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function ComingSoon() {
  return (
    <>
      <div className="moduleContainer">
        <h2 style={{ fontFamily: "cursive" }}>Coming Soon...</h2>
        <Link to={""}>
          <Button>
            <Typography>Click here back to Home page.</Typography>
          </Button>
        </Link>
      </div>
    </>
  );
}
