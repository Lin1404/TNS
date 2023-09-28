import { Button, Typography } from "@mui/material";
import Header from "./modules/Header";
import { Link } from "react-router-dom";

export default function ComingSoon() {
  return (
    <>
      <Header />
      <div className="moduleContainer">
        <h2 className="sectionTitle">Coming Soon...</h2>
        <Link to={"/tnsauto"}>
          <Button>
            <Typography>Click here back to Home page.</Typography>
          </Button>
        </Link>
      </div>
    </>
  );
}
