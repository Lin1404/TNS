import tnsLogo from "../assets/tns.svg";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="title">
        <img
          src={tnsLogo}
          alt="illustration"
          style={{ width: "5%", paddingRight: "0.5rem" }}
        />
        <h3>TNS Auto Collision</h3>
      </div>
      <div className="infoContainer">
        <div className="map">
          <h3>Location:</h3>
          <iframe
            title="Map"
            width="400"
            height="300"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=500&amp;height=400&amp;hl=en&amp;q=1011%2061st%20St%20Brooklyn+(TNS%20Auto%20Group)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>

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
          <div className="info">
            <h3>Contact us:</h3>
            <h4>Phone: (718) 259-0075</h4>
            <h4>E-mail: tnsautogroup@gmail.com</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
