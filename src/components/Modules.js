/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Drawer,
  List,
  ListItem,
  ListItemButton,
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
import CloseIcon from "@mui/icons-material/Close";

const modulesRouting = [
  { path: "/", label: "Home" },
  { path: "/aboutus", label: "About Us" },
  { path: "/services", label: "Services ▼" },
  { path: "/drp", label: "DRP" },
  { path: "/certifications", label: "Certifications" },
  { path: "/gallery", label: "Gallery ▼" },
  { path: "/community", label: "Communiy" },
  { path: "/tns1011portfolio", label: "Portfolio" },
  { path: "/contact", label: "Contact" },
  { path: "/career", label: "Career" },
];

const servicesDropDown = [
  { path: "/aluminum-certified", label: "Aluminum Certified" },
  { path: "/car-rentals", label: "Car Rentals" },
  { path: "/estimating", label: "Expert Estimating" },
  { path: "/paint", label: "Expert Paint Work" },
  { path: "/insurance-claim", label: "Insurance Claims" },
  { path: "/warranty", label: "Life Time Warranty" },
  { path: "/collision-repair", label: "Quality Collision Repair" },
  { path: "/towing", label: "Towing Services" },
  { path: "/detailing", label: "Vehicle Detailing" },
];

const galleryDropDown = [
  { path: "/before&after", label: "Before & After" },
  { path: "/satisfaction", label: "Customer Satisfaction" },
  { path: "/facility", label: "Facility" },
  { path: "/comingsoon", label: "Shows/Activity Events" },
];

export default function Modules({ isButton = false }) {
  const [mouseOnModule, setmouseOnModule] = useState(-1);
  const [anchorElGallery, setAnchorElGallery] = useState(null);
  const [anchorElServices, setAnchorElServices] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [partnerCode, setPartnerCode] = useState("");
  const [isPartnerCodeOnsubmit, setIsPartnerCodeOnsubmit] = useState();
  const [isDrawerExpanded, setIsDrawerExpanded] = useState(false);
  const [isGalleryInDrawerExpanded, setIsGalleryInDrawerExpanded] =
    useState(false);
  const [isServicesInDrawerExpanded, setIsServicesInDrawerExpanded] =
    useState(false);

  const openGalleryMenu = Boolean(anchorElGallery);
  const openServicesMenu = Boolean(anchorElServices);

  const handleMouseEnterGallery = (event) => {
    setmouseOnModule(5);
    setAnchorElGallery(event.currentTarget);
  };
  const handleGalleryMenuClose = () => {
    setmouseOnModule(-1);
    setAnchorElGallery(null);
  };

  const handleMouseEnterServices = (event) => {
    setmouseOnModule(2);
    setAnchorElServices(event.currentTarget);
  };
  const handleServicesMenuClose = () => {
    setmouseOnModule(-1);
    setAnchorElServices(null);
  };
  const handleDialogOnsubmit = () => {
    setIsPartnerCodeOnsubmit(true);
    partnerCode === "TNS1011" ? (
      (window.location = "/#/tns1011portfolio")
    ) : (
      <></>
    );
  };

  return !isButton ? (
    <div className="modulesContainer">
      <div className="modulesSection">
        {modulesRouting.map((item, idx) => (
          <div className="moduleButtonContainer" key={item.label}>
            {item.label === modulesRouting[5].label ? (
              <div id="galleryModuleManu">
                <Button
                  className="moduleButton"
                  onClick={handleMouseEnterGallery}
                  style={{
                    fontFamily: "inherit",
                    fontSize: "smaller",
                    color:
                      mouseOnModule === idx || openGalleryMenu
                        ? "#e3d515"
                        : "white",
                  }}
                >
                  {modulesRouting[5].label}
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
                  {galleryDropDown.map((item) => (
                    <MenuItem
                      onClick={handleGalleryMenuClose}
                      className="dropDownMenu"
                    >
                      <Link to={item.path}>
                        <Typography>{item.label}</Typography>
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            ) : item.label === modulesRouting[2].label ? (
              <div id="servicesModuleManu">
                <Button
                  className="servicesModuleButton"
                  onClick={handleMouseEnterServices}
                  style={{
                    fontFamily: "inherit",
                    fontSize: "smaller",
                    color:
                      mouseOnModule === idx || openServicesMenu
                        ? "#e3d515"
                        : "white",
                  }}
                >
                  {modulesRouting[2].label}
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
                  {servicesDropDown.map((item) => (
                    <MenuItem
                      onClick={handleServicesMenuClose}
                      className="dropDownMenu"
                    >
                      <Link to={item.path}>
                        <Typography>{item.label}</Typography>
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            ) : item.label === "Portfolio" ? (
              <Button
                className="moduleButton"
                onMouseEnter={() => setmouseOnModule(idx)}
                onMouseLeave={() => setmouseOnModule(-1)}
                disabled={window.location.hash === "#" + item.path}
                style={{
                  fontFamily: "inherit",
                  fontSize: "smaller",
                  color:
                    mouseOnModule === idx ||
                    window.location.hash === "#" + item.path
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
                  disabled={window.location.hash === "#" + item.path}
                  style={{
                    fontFamily: "inherit",
                    fontSize: "smaller",
                    color:
                      mouseOnModule === idx ||
                      window.location.hash === "#" + item.path
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
    <div style={{ justifySelf: "center" }}>
      {isDrawerExpanded ? (
        <Button
          // className="modulesbutton"
          onClick={() => setIsDrawerExpanded(false)}
        >
          <CloseIcon />
        </Button>
      ) : (
        <Button
          className="modulesbutton"
          onClick={() => setIsDrawerExpanded(true)}
        >
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </Button>
      )}
      {isDrawerExpanded && (
        <Drawer
          anchor={"right"}
          open={isDrawerExpanded}
          onClose={() => setIsDrawerExpanded(false)}
        >
          <Box
            sx={{ width: 150 }}
            role="presentation"
            // onClick={() => setIsDrawerExpanded(false)}
            onKeyDown={() => setIsDrawerExpanded(false)}
          >
            <List>
              <ListItem key="close" disablePadding className="dropDownMenu">
                <ListItemButton onClick={() => setIsDrawerExpanded(false)}>
                  <CloseIcon />
                </ListItemButton>
              </ListItem>
              {modulesRouting.map((item) =>
                item.path === "/services" ? (
                  <>
                    <ListItem
                      key={item.label}
                      disablePadding
                      className="dropDownMenu"
                    >
                      <ListItemButton
                        onClick={() =>
                          setIsServicesInDrawerExpanded(
                            !isServicesInDrawerExpanded
                          )
                        }
                      >
                        <Typography style={{ color: "navy" }}>
                          {item.label}
                        </Typography>
                      </ListItemButton>
                    </ListItem>
                    {isServicesInDrawerExpanded &&
                      servicesDropDown.map((ser) => (
                        <ListItem
                          key={ser.label}
                          disablePadding
                          className="dropDownMenu"
                        >
                          <Link to={`${ser.path}`}>
                            <ListItemButton>
                              <Typography style={{ marginLeft: "2rem" }}>
                                {ser.label}
                              </Typography>
                            </ListItemButton>
                          </Link>
                        </ListItem>
                      ))}
                  </>
                ) : item.path === "/gallery" ? (
                  <>
                    <ListItem
                      key={item.label}
                      disablePadding
                      className="dropDownMenu"
                    >
                      <ListItemButton
                        onClick={() =>
                          setIsGalleryInDrawerExpanded(
                            !isGalleryInDrawerExpanded
                          )
                        }
                      >
                        <Typography style={{ color: "navy" }}>
                          {item.label}
                        </Typography>
                      </ListItemButton>
                    </ListItem>
                    {isGalleryInDrawerExpanded &&
                      galleryDropDown.map((gallery) => (
                        <ListItem
                          key={gallery.label}
                          disablePadding
                          className="dropDownMenu"
                        >
                          <Link to={`${gallery.path}`}>
                            <ListItemButton>
                              <Typography style={{ marginLeft: "2rem" }}>
                                {gallery.label}
                              </Typography>
                            </ListItemButton>
                          </Link>
                        </ListItem>
                      ))}
                  </>
                ) : (
                  <ListItem
                    key={item.label}
                    disablePadding
                    className="dropDownMenu"
                  >
                    <Link to={`${item.path}`}>
                      <ListItemButton>
                        <Typography>{item.label}</Typography>
                      </ListItemButton>
                    </Link>
                  </ListItem>
                )
              )}
            </List>
          </Box>
        </Drawer>
      )}
    </div>
  );
}
