import geico from "../../assets/geico.jpeg";
import statefarm from "../../assets/statefarm.jpeg";
import CountryWide from "../../assets/CountryWide.png";
import Erie from "../../assets/Erie.png";
import Farmers from "../../assets/Farmers.jpeg";
import Hanover from "../../assets/Hanover.png";
import Kemper from "../../assets/Kemper.jpeg";
import Liberty from "../../assets/Liberty.png";
import MetLife from "../../assets/MetLife.png";
import Nationwide from "../../assets/Nationwide.png";

export default function Partnership() {
  return (
    <div className="partnership">
      <h1 className="sectionTitle">Partnership</h1>
      <div className="certificationsLogo" style={{ display: "block" }}>
        <img src={geico} alt="illustration" />
        <img src={statefarm} alt="illustration" />
        <img src={Erie} alt="illustration" />
        <img src={Kemper} alt="illustration" />
        <img src={Farmers} alt="illustration" />
        <img src={Hanover} alt="illustration" />
        <img src={Liberty} alt="illustration" />
        <img src={MetLife} alt="illustration" />
        <img src={Nationwide} alt="illustration" />
        <img src={CountryWide} alt="illustration" />
      </div>
    </div>
  );
}
