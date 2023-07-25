import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function BackToHomeButton() {
  return (
    <Link to={"/"}>
      <Button style={{ display: "block" }}>Back to Home Page</Button>
    </Link>
  );
}
