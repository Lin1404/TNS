import tnsCover from "../assets/tnsCover2.jpeg";
import Carousel from "./Carousel";
import ase from "../assets/ase.jpeg";
import icarLogo from "../assets/icarLogo.jpeg";
import icar1 from "../assets/icar1.jpeg";
import icar2 from "../assets/icar2.jpeg";
import ppg1 from "../assets/ppg1.jpeg";
import ppg2 from "../assets/ppg2.jpeg";
import sp2 from "../assets/sp2.jpeg";

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

export default function Cover() {
  return (
    <>
      <div className="paddingBot">
        <img src={tnsCover} alt="illustration" style={{ width: "100%" }} />
      </div>
      <Carousel content={reviews} />
      <div className="certifications paddingBot">
        <h2>Certifications</h2>
        <p>
          TNS Auto Group is your state of the art collision repair facility.
        </p>
        <p>
          We meet our goals by utilizing today's most advanced systems in the
          collision repair industry and combining them with our highly trained
          and certified repair technicians. This assures that your vehicle is
          repaired to factory specs and pre-accident condition.
        </p>
        <div className="certificationsInfo paddingTop">
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
      </div>
    </>
  );
}
