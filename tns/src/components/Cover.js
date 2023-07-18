import tnsCover from "../assets/tnsCover.jpeg";
import Carousel from "./Carousel";
import testC1 from "../assets/testC1.jpg";
import testC2 from "../assets/testC2.jpg";

const certifications = [
  <img
    src={testC1}
    alt="illustration"
    style={{ width: "100%", height: "15rem" }}
  />,
  <img
    src={testC2}
    alt="illustration"
    style={{ width: "100%", height: "15rem" }}
  />,
];
export default function Cover() {
  return (
    <>
      <div>
        <img src={tnsCover} alt="illustration" style={{ width: "100%" }} />
      </div>
      <Carousel content={certifications} />
    </>
  );
}
