import { useEffect } from "react";
import drp from "../../assets/DRP.png";
import BackToHomeButton from "./BackToHomeButton";
import { BackToHomeIcon } from "./BackToHomeButton";
import Header from "./Header";

export default function DRP({ isOnHomePage = false }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {!isOnHomePage && <Header />}
      {!isOnHomePage && <div className="paddingTop" />}
      {!isOnHomePage && <BackToHomeButton />}
      <div className="moduleContainer">
        <h2 className="sectionTitle">DRP Partnerwith</h2>
        <div className="certificationsLogo">
          <img src={drp} alt="illustration" />
        </div>
        {!isOnHomePage && (
          <div style={{ padding: "10% 0 0 0" }}>
            <BackToHomeIcon />
          </div>
        )}
      </div>
    </>
  );
}
