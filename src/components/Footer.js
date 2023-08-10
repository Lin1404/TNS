import tnsLogo from "../assets/tns.svg";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export default function Footer() {
  return (
    <div className="footerContainer backgroundColor">
      <div className="tnsTitle">
        <img
          src={tnsLogo}
          alt="illustration"
          // style={{ width: "5%", paddingRight: "0.5rem" }}
        />
        <h3>TNS Auto Collision</h3>
      </div>
      <div className="infoContainer">
        <div className="introduction">
          <h1>About Us</h1>
          <p>
            "With 25+ years of experience in the automotive collision industry,
            consider us your repair expert for your vehicle all in one stop.
            Quality and safety is our priority. We partner with almost all major
            insurances and are certified Geico Auto Repair Express. From
            insurance claims to reparations, you can rely on our exceptional
            customer services and platinum I-CAR & ASE certified technicians to
            handle your damage vehicle."
          </p>
        </div>
        <div>
          <div className="info">
            <h3>Contact us:</h3>
            <div className="infoDetail">
              <div style={{ display: "flex" }}>
                <LocalPhoneOutlinedIcon />
                <h4>(718) 259-0075</h4>
              </div>
              <div>
                <EmailOutlinedIcon />
                <a href="mailto:tnsautogroup@gmail.com">
                  tnsautogroup@gmail.com
                </a>
              </div>
            </div>
            <div className="infoDetail">
              <h4>Hour</h4>
              <div>Monday - Friday 7AM - 5PM</div>
              <div>Saturday 7AM - 3PM</div>
            </div>
          </div>
        </div>

        <div className="map">
          <div className="infoDetail">
            <h4>Our Location</h4>
            <div>TNS Auto Group</div>
            <div>1011 61st St</div>
            <div> Brooklyn, NY 11219</div>
          </div>
          <h3>Locate Us:</h3>
          <iframe
            title="Map"
            width="300"
            height="200"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=500&amp;height=400&amp;hl=en&amp;q=1011%2061st%20St%20Brooklyn+(TNS%20Auto%20Group)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
