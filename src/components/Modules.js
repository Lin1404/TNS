/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
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
  { path: "/tnsauto/tns1011portfolio", label: "Portfolio" },
  { path: "/tnsauto/contact", label: "Contact" },
  { path: "/tnsauto/career", label: "Career" },
];

export default function Modules({ isButton = false }) {
  const [mouseOnModule, setmouseOnModule] = useState(-1);
  const [anchorElGallery, setAnchorElGallery] = useState(null);
  const [anchorElServices, setAnchorElServices] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [partnerCode, setPartnerCode] = useState("");
  const [isPartnerCodeOnsubmit, setIsPartnerCodeOnsubmit] = useState();

  const openGalleryMenu = Boolean(anchorElGallery);
  const openServicesMenu = Boolean(anchorElServices);
  const handleMouseEnterGallery = (event) => {
    setAnchorElGallery(event.currentTarget);
  };
  const handleGalleryMenuClose = () => {
    setAnchorElGallery(null);
  };

  const handleMouseEnterServices = (event) => {
    setAnchorElServices(event.currentTarget);
  };
  const handleServicesMenuClose = () => {
    setAnchorElServices(null);
  };
  const handleDialogOnsubmit = () => {
    setIsPartnerCodeOnsubmit(true);
    partnerCode === "TNS1011" ? (
      (window.location = "/tnsauto/tns1011portfolio")
    ) : (
      <></>
    );
  };
  console.log(anchorElGallery);
  return !isButton ? (
    <div className="modulesContainer">
      <div className="modulesSection">
        {modulesRouting.map((item, idx) => (
          <div className="moduleButtonContainer" key={item.label}>
            {item.label === "Gallery" ? (
              <div id="galleryModuleManu">
                <Button
                  className="moduleButton"
                  // onMouseOver={handleMouseEnterGallery}
                  onClick={handleMouseEnterGallery}
                  style={{
                    fontFamily: "inherit",
                    fontSize: "smaller",
                    color: openGalleryMenu ? "#e3d515" : "white",
                  }}
                >
                  Gallery
                </Button>

                <Menu
                  id="galleryModulesMenu"
                  anchorEl={anchorElGallery}
                  open={openGalleryMenu}
                  onClose={handleGalleryMenuClose}
                  MenuListProps={{ onMouseLeave: handleGalleryMenuClose }}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "buttom",
                    horizontal: "left",
                  }}
                >
                  <MenuItem onClick={handleGalleryMenuClose}>
                    <Link
                      to={"/tnsauto/before&after"}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Typography>Before & After</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleGalleryMenuClose}>
                    <Link
                      to={"/tnsauto/satisfaction"}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Typography>Customer Satisfaction</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleGalleryMenuClose}>
                    <Link
                      to={"/tnsauto/facility"}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Typography>Facility</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleGalleryMenuClose}>
                    <Link
                      to={"/tnsauto/comingsoon"}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Typography>Shows/Activity Events</Typography>
                    </Link>
                  </MenuItem>
                </Menu>
              </div>
            ) : item.label === "Services" ? (
              <div id="servicesModuleManu">
                <Button
                  className="servicesModuleButton"
                  // onMouseOver={handleMouseEnterGallery}
                  onClick={handleMouseEnterServices}
                  style={{
                    fontFamily: "inherit",
                    fontSize: "smaller",
                    color: openServicesMenu ? "#e3d515" : "white",
                  }}
                >
                  Services
                </Button>

                <Menu
                  id="servicesModulesMenu"
                  anchorEl={anchorElServices}
                  open={openServicesMenu}
                  onClose={handleServicesMenuClose}
                  MenuListProps={{ onMouseLeave: handleServicesMenuClose }}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "buttom",
                    horizontal: "left",
                  }}
                >
                  <MenuItem onClick={handleServicesMenuClose}>
                    <Link
                      to={"/tnsauto/services"}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Typography>services</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleServicesMenuClose}>
                    <Link
                      to={"/tnsauto/satisfaction"}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Typography>Customer Satisfaction</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleServicesMenuClose}>
                    <Link
                      to={"/tnsauto/facility"}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Typography>Facility</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleServicesMenuClose}>
                    <Link
                      to={"/tnsauto/comingsoon"}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Typography>Shows/Activity Events</Typography>
                    </Link>
                  </MenuItem>
                </Menu>
              </div>
            ) : item.label === "Portfolio" ? (
              <Button
                className="moduleButton"
                onMouseEnter={() => setmouseOnModule(idx)}
                onMouseLeave={() => setmouseOnModule(-1)}
                disabled={window.location.pathname === item.path}
                style={{
                  fontFamily: "inherit",
                  fontSize: "smaller",
                  color:
                    mouseOnModule === idx ||
                    window.location.pathname === item.path
                      ? "#e3d515"
                      : "white",
                }}
                onClick={() => setIsDialogOpen(true)}
              >
                Portfolio
              </Button>
            ) : (
              <Link to={`${item.path}`}>
                <Button
                  onMouseEnter={() => setmouseOnModule(idx)}
                  onMouseLeave={() => setmouseOnModule(-1)}
                  className="moduleButton"
                  disabled={window.location.pathname === item.path}
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
        <Dialog
          open={isDialogOpen}
          onClose={() => {
            setIsPartnerCodeOnsubmit(false);
            setIsDialogOpen(false);
          }}
        >
          <DialogTitle>Please Enter Partner Code:</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To See the TNS Portfolio, please enter the partner code.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="code"
              label="Enter Partner Code"
              type="coode"
              fullWidth
              variant="standard"
              onChange={(e) => setPartnerCode(e.target.value)}
              error={isPartnerCodeOnsubmit && partnerCode !== "TNS1011"}
              helperText="Please Enter valid Partner Code."
            />
            <DialogActions>
              <Button
                onClick={() => {
                  setIsPartnerCodeOnsubmit(false);
                  setIsDialogOpen(false);
                }}
              >
                Cancel
              </Button>
              <Button onClick={() => handleDialogOnsubmit()}>Submit</Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
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
        aria-controls={openGalleryMenu ? "modulesMenu" : undefined}
        aria-haspopup="true"
        aria-expanded={openGalleryMenu ? "true" : undefined}
        onClick={handleMouseEnterGallery}
      >
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </Button>
      <Menu
        id="modulesMenu"
        anchorElGallery={anchorElGallery}
        open={openGalleryMenu}
        onClose={handleGalleryMenuClose}
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
            <MenuItem onClick={handleGalleryMenuClose}>{item.label}</MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  );
}
