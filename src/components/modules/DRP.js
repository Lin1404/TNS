import { useEffect } from "react";
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
import Unica from "../../assets/Unica.jpeg";
import Cei from "../../assets/Cei.jpeg";
import Chubb from "../../assets/Chubb.jpeg";
import BackToHomeButton from "./BackToHomeButton";
import { BackToHomeIcon } from "./BackToHomeButton";

export default function DRP({ isHideGoBackButton = false }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {!isHideGoBackButton && <div className="headerPadding" />}
      {!isHideGoBackButton && <BackToHomeButton />}
      <div className="moduleContainer">
        <h2 className="sectionTitle">DRP Partnerwith</h2>
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
          <img src={Unica} alt="illustration" />
          <img src={Cei} alt="illustration" />
          <img src={Chubb} alt="illustration" />
        </div>
        {!isHideGoBackButton && (
          <div style={{ padding: "10% 0 0 0" }}>
            <BackToHomeIcon />
          </div>
        )}
      </div>
    </>
  );
}
