import Header from "./Header";
import officeImg from "../../assets/office.jpeg";
import office2 from "../../assets/office2.png";
import shop1 from "../../assets/shop1.jpg";
import shop2 from "../../assets/shop2.jpg";
import shop3 from "../../assets/shop3.jpg";
import shop4 from "../../assets/shop4.jpg";
import shop5 from "../../assets/shop5.jpg";
import shop6 from "../../assets/shop6.jpg";
import shop7 from "../../assets/shop7.jpg";
import office3 from "../../assets/office3.jpg";
import office4 from "../../assets/office4.jpg";
import office5 from "../../assets/office5.jpg";
import office6 from "../../assets/office6.jpg";
import office7 from "../../assets/office7.jpg";
import { Grid } from "@mui/material";

const facilities = [
  office3,
  office7,
  office4,
  office5,
  office6,
  shop1,
  shop2,
  shop3,
  shop4,
  shop5,
  shop6,
  shop7,
];

export default function Facility() {
  return (
    <div className="paddingBot">
      <Header />
      <h2 className="sectionTitle">Facility</h2>
      <img
        src={office2}
        alt="Office Img"
        style={{ width: "80%", paddingBottom: "1%" }}
      />
      <img
        src={officeImg}
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
