import { useEffect } from "react";
import Header from "./Header";
import { Typography } from "@mui/material";

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <div>
        <Typography>
          <h5>
            With 25+ years of experience in the automotive collision industry,
            consider us your repair expert for your vehicle all in one stop.
            Quality and safety is our priority. We partner with almost all major
            insurances and are certified Geico Auto Repair Express. From
            insurance claims to reparations, you can rely on our exceptional
            customer services and platinum I-CAR & ASE certified technicians to
            handle your damage vehicle.
          </h5>
        </Typography>
      </div>
    </div>
  );
}
