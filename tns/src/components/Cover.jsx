// import { useEffect } from "react";
import tnsCover from "../assets/tnsCover.jpeg";
import "./cover.css";
import Carousel from "./Carousal";


export default function Cover() {
  return (
    <>
      <div>
        <img src={tnsCover} alt="illustration" style={{ width: "100%" }} />
      </div>
      <Carousel />
    </>
  );
}
