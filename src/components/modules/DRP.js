import { useEffect } from "react";
import drp from "../../assets/DRP.png";
import BackToHomeButton from "./BackToHomeButton";
import { BackToHomeIcon } from "./BackToHomeButton";

export default function DRP({ isHideGoBackButton = false }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {!isHideGoBackButton && <div className="paddingTop" />}
      {!isHideGoBackButton && <BackToHomeButton />}
      <div className="moduleContainer">
        <h2 className="sectionTitle">DRP Partnerwith</h2>
        <div className="certificationsLogo">
          <img src={drp} alt="illustration" />
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
