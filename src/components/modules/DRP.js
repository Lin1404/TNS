import { useEffect } from "react";
import drp from "../../assets/DRP.png";
import Header from "./Header";

export default function DRP({ isOnHomePage = false }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {!isOnHomePage && <Header />}
      {!isOnHomePage && <div className="paddingTop" />}
      <div className="moduleContainer">
        <h2 className="sectionTitle">DRP Partner With</h2>
        <div className="certificationsLogo">
          <img src={drp} alt="illustration" />
        </div>
      </div>
    </>
  );
}
