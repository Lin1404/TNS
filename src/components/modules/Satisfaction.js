import Header from "./Header";
import satisfaction1 from "../../assets/satisfaction1.jpg";
import satisfaction3 from "../../assets/satisfaction3.png";
import { Button, Container } from "@mui/material";
import Reviews from "./Reviews";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Satisfaction() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <Container sx={{ paddingBottom: "3%" }}>
        <h2 className="sectionTitle">Customer Satisfaction:</h2>
        <img src={satisfaction1} alt="illustration" style={{ width: "100%" }} />
        <div> </div>
        <img
          src={satisfaction3}
          alt="illustration"
          style={{ width: "100%", paddingTop: "3%" }}
        />
      </Container>
      <Reviews />
      <Container sx={{ paddingBottom: "5%" }}>
        <Link to={"/tnsauto/contact"}>
          <Button variant="contained">We love to hear your feedback →</Button>
        </Link>
      </Container>
    </div>
  );
}
