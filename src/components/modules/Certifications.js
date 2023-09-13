import { useEffect } from "react";
import certifications from "../../assets/certifications.png";
import Header from "./Header";

export default function Certifications() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <div className="backgroundColorWhite" />
      <div className="moduleContainer">
        <h2 className="sectionTitle">Certifications</h2>
        <p>
          TNS Auto Collision is your state of the art collision repair facility.
        </p>
        <p>
          We meet our goals by utilizing today's most advanced systems in the
          collision repair industry and combining them with our highly trained
          and certified repair technicians. This assures that your vehicle is
          repaired to factory specs and pre-accident condition.
        </p>
        <div className="certificationsLogo">
          <img src={certifications} alt="illustration" />
        </div>
        <div className="certificationsExpand">
          <h2>
            I-CAR :<div>Inter-Industry Conference on Auto Collision Repair</div>
          </h2>
          <p>
            I-CAR is an industry-leading organization focused on providing
            training and education for professionals in the auto collision
            repair industry. It offers various certification programs and
            courses designed to enhance the skills and knowledge of technicians,
            estimators, and other professionals involved in vehicle repair,
            ensuring they stay up-to-date with the latest advancements in
            automotive technology and repair techniques.
          </p>
          <h2>
            S/P2 :<div>Safety and Pollution Prevention</div>
          </h2>
          <p>
            S/P2 is an online training platform designed to educate automotive
            professionals, including technicians, service advisors, and
            managers, on safety and environmental best practices. It helps
            automotive businesses comply with safety regulations and promotes
            environmentally responsible practices, ensuring a safer and greener
            work environment.
          </p>

          <h2>
            ASE :<div>National Institute for Automotive Service Excellence</div>
          </h2>
          <p>
            ASE certification is a widely recognized standard for automotive
            service professionals in the United States. The National Institute
            for Automotive Service Excellence conducts rigorous testing and
            evaluates the skills and knowledge of automotive technicians across
            various specialties. ASE-certified technicians demonstrate
            competence in their respective areas, giving customers confidence in
            the quality of service they receive.
          </p>
        </div>
      </div>
    </div>
  );
}
