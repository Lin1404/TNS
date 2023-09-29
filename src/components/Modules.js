import { Button, Menu, MenuItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import yelpLogo from "../assets/yelpLogo.svg";
import facebookLogo from "../assets/facebookLogo.svg";
import instegramLogo from "../assets/instagramLogo.svg";
import youtubeLogo from "../assets/youtubeLogo.png";
import google from "../assets/googleIcon.png";
import { useState } from "react";

const modulesRouting = [
  { path: "/tnsauto", label: "Home" },
  { path: "/tnsauto/aboutus", label: "About Us" },
  { path: "/tnsauto/services", label: "Services" },
  { path: "/tnsauto/drp", label: "DRP" },
  { path: "/tnsauto/certifications", label: "Certifications" },
  { path: "/tnsauto/gallery", label: "Gallery" },
  { path: "/tnsauto/contact", label: "Contact" },
  { path: "/tnsauto/careers", label: "Careers" },
];

export default function Modules({ isButton = false }) {
  const [mouseOnModule, setmouseOnModule] = useState(-1);
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return !isButton ? (
    <div className="modulesContainer">
      <div className="modulesSection">
        {modulesRouting.map((item, idx) => (
          <div className="moduleButtonContainer" key={item.label}>
            {item.label === "Gallery" ? (
              <div id="moduleManu">
                <Button
                  className="moduleButton"
                  onMouseOver={handleMouseEnter}
                  style={{
                    fontFamily: "inherit",
                    fontSize: "smaller",
                    color: openMenu ? "#e3d515" : "white",
                  }}
                  aria-controls={openMenu ? "modulesMenu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openMenu ? "true" : undefined}
                >
                  Gallery
                </Button>

                <Menu
                  id="modulesMenu"
                  anchorEl={anchorEl}
                  open={openMenu}
                  onClose={handleMenuClose}
                  MenuListProps={{ onMouseLeave: handleMenuClose }}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "buttom",
                    horizontal: "left",
                  }}
                >
                  <MenuItem onClick={handleMenuClose}>
                    <Link
                      to={"/tnsauto/gallery"}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Typography>Before & After</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <Link
                      to={"/tnsauto/satisfaction"}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Typography>Customer Satisfaction</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <Link
                      to={"/tnsauto/comingsoon"}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Typography>Facility</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <Link
                      to={"/tnsauto/comingsoon"}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Typography>Shows/Activity Events</Typography>
                    </Link>
                  </MenuItem>
                </Menu>
              </div>
            ) : (
              <Link to={`${item.path}`}>
                <Button
                  onMouseEnter={() => setmouseOnModule(idx)}
                  onMouseLeave={() => setmouseOnModule(-1)}
                  className="moduleButton"
                  style={{
                    fontFamily: "inherit",
                    fontSize: "smaller",
                    color:
                      mouseOnModule === idx ||
                      window.location.pathname === item.path
                        ? "#e3d515"
                        : "white",
                  }}
                >
                  {item.label}
                </Button>
              </Link>
            )}
          </div>
        ))}
      </div>
      <div className="socialMediaIconsOnModules">
        <a href="https://www.facebook.com/TNSAutoGroup/" target="blank">
          <img src={facebookLogo} alt="facebookLogo" />
        </a>
        <a href="https://www.instagram.com/tnsautogroup/" target="blank">
          <img src={instegramLogo} alt="instegramLogo" />
        </a>
        <a
          href="https://www.yelp.com/biz/tns-auto-group-brooklyn"
          target="blank"
        >
          <img src={yelpLogo} alt="yelpLogo" />
        </a>
        <a
          target="blank"
          href="https://www.google.com/search?q=tns+auto+group&oq=tns&gs_lcrp=EgZjaHJvbWUqBggBEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYOzIGCAMQRRhAMgYIBBBFGDwyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgzMTE2ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x89c24524a9cc1fb9:0x14d0637150a89e4f,1,,,,"
        >
          <img src={google} alt="google" className="reviewImgs" />
        </a>
        <a>
          <img src={youtubeLogo} alt="youtubeLogo" />
        </a>
      </div>
    </div>
  ) : (
    <div>
      <Button
        className="modulesbutton"
        aria-controls={openMenu ? "modulesMenu" : undefined}
        aria-haspopup="true"
        aria-expanded={openMenu ? "true" : undefined}
        onClick={handleMouseEnter}
      >
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </Button>
      <Menu
        id="modulesMenu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {modulesRouting.map((item, idx) => (
          <Link to={`${item.path}`} style={{ textDecoration: "none" }}>
            <MenuItem onClick={handleMenuClose}>{item.label}</MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  );
}
