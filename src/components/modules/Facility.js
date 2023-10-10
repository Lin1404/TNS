import Header from "./Header";
import officeImg from "../../assets/Office.jpeg";
import office2 from "../../assets/Office2.png";
import facility1 from "../../assets/facility1.jpg";
import facility2 from "../../assets/facility2.jpg";
import facility3 from "../../assets/facility3.jpg";
import facility4 from "../../assets/facility4.jpg";
import facility5 from "../../assets/facility5.jpg";
import facility6 from "../../assets/facility6.jpg";
import facility7 from "../../assets/facility7.jpg";
import facility8 from "../../assets/facility8.jpg";
import { Grid } from "@mui/material";

const facilities = [
  facility3,
  facility2,
  facility8,
  facility1,
  facility6,
  facility5,
  facility7,
];

export default function Facility() {
  return (
    <div className="paddingBot">
      <Header />
      <h2 className="sectionTitle">Facility</h2>
      <img
        src={officeImg}
        alt="Office Img"
        style={{ width: "80%", paddingBottom: "1%" }}
      />
      <img
        src={office2}
        alt="Office Img"
        style={{ width: "80%", paddingBottom: "1%" }}
      />
      <img
        src={facility4}
        alt="Office Img"
        style={{ width: "80%", paddingBottom: "1%" }}
      />

      <Grid container sx={{ padding: "0 8%" }}>
        {facilities.map((item) => (
          <Grid xs={6}>
            <img
              src={item}
              alt="Facility Img"
              style={{ width: "90%", padding: "2%" }}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
