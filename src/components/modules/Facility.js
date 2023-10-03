import Header from "./Header";
import officeImg from "../../assets/Office.jpeg";

export default function Facility() {
  return (
    <div>
      <Header />
      <h2 className="sectionTitle">Facility:</h2>
      <img src={officeImg} alt="Office Img" style={{ width: "80%" }} />
    </div>
  );
}
