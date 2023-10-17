import tnsLogo from "../assets/tns.svg";
import yelpLogo from "../assets/yelpLogo.svg";
import facebookLogo from "../assets/facebookLogo.svg";
import instegramLogo from "../assets/instagramLogo.svg";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import google from "../assets/googleIcon.png";
import youtubeLogo from "../assets/youtubeLogo.png";
import { Stack } from "@mui/material";

export default function Footer() {
  return (
    <div className="footerContainer backgroundColor ">
      <div className="tnsTitle">
        <img src={tnsLogo} alt="TNS Logo" />
        <h1>TNS Auto Collision</h1>
      </div>
      <div className="infoContainer">
        <Stack className="footerLinks">
          <h3 style={{ textAlign: "left", padding: "0 15%" }}>
            BROWSE OUR WEBSITE
          </h3>
          <a href="/#/aboutus">About Us</a>
          <a href="/#/services">Services</a>
          <a href="/#/before&after">Befor & After</a>
          <a href="/#/career">Career</a>
          <a href="https://www.tnsautoinc.com/">TNS Staten Island</a>
        </Stack>
        <div>
          <div className="info">
            <h3>CONTACT US:</h3>
            <div className="socialMediaIcons">
              <a href="https://www.facebook.com/TNSAutoGroup/" target="blank">
                <img src={facebookLogo} alt="Facebook Logo" />
              </a>
              <a href="https://www.instagram.com/tnsautogroup/" target="blank">
                <img src={instegramLogo} alt="Instegram Logo" />
              </a>
              <a
                href="https://www.yelp.com/biz/tns-auto-group-brooklyn"
                target="blank"
              >
                <img src={yelpLogo} alt="Yelp Logo" />
              </a>
              <a
                target="blank"
                href="https://www.google.com/search?q=tns+auto+group&oq=tns&gs_lcrp=EgZjaHJvbWUqBggBEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOzIGCAMQRRhAMgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgzMTE2ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x89c24524a9cc1fb9:0x14d0637150a89e4f,1,,,,"
              >
                <img src={google} alt="google" className="reviewImgs" />
              </a>
              <a
              // href="https://www.yelp.com/biz/tns-auto-group-brooklyn"
              // target="blank"
              >
                <img src={youtubeLogo} alt="youtubeLogo" />
              </a>
            </div>
            <div className="infoDetail">
              <div style={{ display: "flex" }}>
                <LocalPhoneOutlinedIcon />
                <h4>(718) 259-0075</h4>
              </div>
              <div>
                <EmailOutlinedIcon />
                <a
                  href="mailto:tnsautogroup@gmail.com"
                  style={{ textDecoration: "none" }}
                >
                  tnsautogroup@gmail.com
                </a>
              </div>
            </div>
            <div className="infoDetail">
              <h3>HOUR</h3>
              <div>Monday - Saturday 7AM - 5PM</div>
              <div>Sunday Closed</div>
            </div>
          </div>
        </div>

        <div className="map">
          <h3>LOCATE US:</h3>
          <iframe
            title="Map"
            width="500"
            height="275"
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
