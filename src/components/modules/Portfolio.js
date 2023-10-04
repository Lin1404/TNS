import { useEffect } from "react";
import Header from "./Header";
import ComingSoon from "../ComingSoon";

export default function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className="moduleContainer">
        <h2 className="sectionTitle">Portfolio</h2>
        <ComingSoon />
      </div>
    </>
  );
}
