import Carousel from "../Carousel";
import checkSafety from "../../assets/checkSafety.jpeg";
import takeEveident from "../../assets/takeEveident.jpeg";
import callPolice from "../../assets/callPolice.jpeg";
import exchangeInfo1 from "../../assets/exchangeInfo1.jpeg";
import notAdmit from "../../assets/notAdmit.jpeg";

const accidentProcessImgs = [
  checkSafety,
  takeEveident,
  callPolice,
  exchangeInfo1,
  notAdmit,
];

export default function AccidentProcess() {
  return (
    <div>
      <h2 className="sectionTitle">5 Step To Handle Accident:</h2>
      <Carousel imgs={accidentProcessImgs} />
    </div>
  );
}
