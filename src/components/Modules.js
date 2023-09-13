import { Button, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import yelpLogo from "../assets/yelpLogo.svg";
import facebookLogo from "../assets/facebookLogo.svg";
import instegramLogo from "../assets/instagramLogo.svg";
import { useState } from "react";

const modulesRouting = [
  { path: "/tnsauto", label: "Home" },
  { path: "/tnsauto/aboutus", label: "About Us" },
  { path: "/tnsauto/service", label: "Service" },
  { path: "/tnsauto/drp", label: "DRP" },
  { path: "/tnsauto/certifications", label: "Certifications" },
  { path: "/tnsauto/gallery", label: "Gallery" },
  { path: "/tnsauto/contact", label: "Contact" },
];

export default function Modules({ isButton = false }) {
  const [mouseOnModule, setmouseOnModule] = useState(-1);
  const [isMouseOnOhterLocationModule, setIsMouseOnOhterLocationModule] =
    useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
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
          </div>
        ))}
        <div className="moduleButtonContainer" key={"otherlocation"}>
          <Button
            className="moduleButton"
            onMouseEnter={() => setIsMouseOnOhterLocationModule(true)}
            onMouseLeave={() => setIsMouseOnOhterLocationModule(false)}
            style={{
              fontFamily: "inherit",
              fontSize: "smaller",
              color: isMouseOnOhterLocationModule ? "#e3d515" : "white",
            }}
            aria-controls={openMenu ? "modulesMenu" : undefined}
            aria-haspopup="true"
            aria-expanded={openMenu ? "true" : undefined}
            onClick={handleClick}
          >
            Other Location
          </Button>
        </div>

        <Menu
          id="modulesMenu"
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleMenuClose}
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
            2065 Forest Avenue, Staten Island, NY, 10303
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <a
              href="https://www.tnsautoinc.com/"
              target="blank"
              style={{ textDecoration: "none", color: "black" }}
            >
              SEE WEBSITE →
            </a>
          </MenuItem>
        </Menu>
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
      </div>
    </div>
  ) : (
    <div>
      <Button
        className="modulesbutton"
        aria-controls={openMenu ? "modulesMenu" : undefined}
        aria-haspopup="true"
        aria-expanded={openMenu ? "true" : undefined}
        onClick={handleClick}
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
        <a
          href="https://www.tnsautoinc.com/"
          target="blank"
          style={{ textDecoration: "none" }}
        >
          <MenuItem onClick={handleMenuClose}>Other Location</MenuItem>
        </a>
      </Menu>
    </div>
  );
}
