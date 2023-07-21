import tnsCover from "../assets/tnsCover2.jpeg";
import Carousel from "./Carousel";
import ase from "../assets/ase.jpeg";
import icarLogo from "../assets/icarLogo.jpeg";
// import icar1 from "../assets/icar1.jpeg";
import icar2 from "../assets/icar2.jpeg";
import ppg1 from "../assets/ppg1.jpeg";
import ppg2 from "../assets/ppg2.jpeg";
import sp2 from "../assets/sp2.jpeg";
import geico from "../assets/geico.jpeg";
import statefarm from "../assets/statefarm.jpeg";
import compare1 from "../assets/compare1.jpeg";
import compare2 from "../assets/compare2.jpeg";

const reviews = [
  {
    review: (
      <p>
        "Excellent service and quality work with most competitive price around
        this area. I had my car's bumper and grille replaced here, and they did
        a quick and fantastic job. My car looks like new again. Highly
        recommend! Remember to ask Frank for help, he is really nice and
        professional."
      </p>
    ),
    customer: "Qingwu Zhou",
  },
  {
    review: (
      <p>
        TNS Auto Collision did phenomenal work after a truck hit my front right
        quarter panel, dinged my hood and broke the front right headlight. Look
        at my before & after pics, like new! Highly recommend this body shop if
        you want your vehicle looking like the day you drove it off the lot.
      </p>
    ),
    customer: "Matt JC - NYC",
  },
];

const imgsToCompare = [compare1, compare2];
function Partnership() {
  return (
    <div className="partnership">
      <h1 className="sectionTitle">Partnership</h1>
      <div className="certificationsLogo">
        <img src={geico} alt="illustration" />
        <img src={statefarm} alt="illustration" />
      </div>
    </div>
  );
}
export default function Cover() {
  return (
    <>
      <div className="paddingTop">
        <img src={tnsCover} alt="illustration" style={{ width: "100%" }} />
      </div>
      <div className="backgroundColor paddingTop">
        <div className="sectionTitle">Customer Review:</div>
        <Carousel content={reviews} />
      </div>
      <div className="certifications paddingBot">
        <div className="certificationsInfoContainer">
          <div className="certificationsInfo">
            <h2>I-Car</h2>
            <p>
              I-CAR® is a global non-profit organization focused on equipping
              individuals in the auto collision repair industry with the
              information, knowledge, and skills needed for safe and
              high-quality repairs. Annually, I-CAR acknowledges outstanding
              achievements in technical education and professionalism, honoring
              industry leaders who prioritize training and education for
              delivering safe and top-notch repairs that benefit consumers.
            </p>
            <img src={icarLogo} alt="illustration" style={{ width: "40%" }} />
          </div>
          <div className="certificationsInfo">
            <h2>PPG ENVIROBASE</h2>
            <div>
              <p>
                We proudly use PPG ENVIROBASE® paint with computer-controlled
                paint matching to assure the right match to your original
                finish.
              </p>
              <p>
                Initially introduced in 1999 to meet low VOC legislation, the
                Envirobase High Performance system is now the leading premium
                waterborne paint system in North America.
              </p>
            </div>

            <img src={ppg1} alt="illustration" style={{ width: "20%" }} />
          </div>
        </div>
        <h2 className="sectionTitle">Certifications</h2>
        <p>
          TNS Auto Group is your state of the art collision repair facility.
        </p>
        <p>
          We meet our goals by utilizing today's most advanced systems in the
          collision repair industry and combining them with our highly trained
          and certified repair technicians. This assures that your vehicle is
          repaired to factory specs and pre-accident condition.
        </p>
        <div className="paddingTop paddingBot">
          <div className="certificationsLogo">
            <img src={icar2} alt="illustration" />
            <img src={sp2} alt="illustration" style={{ height: "4rem" }} />
            <img
              src={ppg2}
              alt="illustration"
              style={{ height: "4rem", paddingRight: 0 }}
            />
            <img
              src={ase}
              alt="illustration"
              style={{ paddingLeft: 0, marginLeft: "-1rem" }}
            />
          </div>
        </div>
        <Partnership />
        <div className="compareSections paddingTop">
          <div className="sectionTitle">Case Show:</div>
          <Carousel imgs={imgsToCompare} />
        </div>
      </div>
    </>
  );
}
