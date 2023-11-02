import AccidentProcess from "./homePageComponents/AccidentProcess";
import tnsAnime from "../assets/tnsAnime.mp4";
import Header from "./modules/Header";
import { Button, Container, Grid, Stack } from "@mui/material";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import RepairProcess from "./homePageComponents/RepairProcess";
// import useWindowDimensions from "./useWindowDimensions";
// import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import CloseIcon from "@mui/icons-material/Close";
import TabsModules from "./modules/TabsModules";
import homePageCar from "../assets/homepagecar.png";
import Carousel from "./Carousel";
import { imgsToCompare } from "./modules/BeforeAndAfter";

export default function Home() {
  // const { width } = useWindowDimensions();
  const [accidentModalOpen, setAccidentModalOpen] = useState(false);
  const [repairModalOpen, setRepairModalOpen] = useState(false);
  const handleAccidentModalOpen = () => setAccidentModalOpen(true);
  const handleAccidentModalClose = () => setAccidentModalOpen(false);
  const handleRepairModalOpen = () => setRepairModalOpen(true);
  const handleRepairModalClose = () => setRepairModalOpen(false);

  return (
    <div>
      <Header />
      <video
        className="VideoTag"
        autoPlay
        loop
        muted
        style={{
          width: "75%",
          padding: "3% 10%",
        }}
      >
        <source src={tnsAnime} type="video/mp4" />
      </video>
      {/* <div className="videoAndModalsContainer">
        <div>
          <video
            className="VideoTag"
            autoPlay
            loop
            muted
            style={{
              width: "94%",
              padding: "3%",
            }}
          >
            <source src={tnsAnime} type="video/mp4" />
          </video>
        </div>
        <Container className="homePageModalContainer">
          <Typography variant="h3" sx={{ color: "navy" }}>
            Choose TNS
          </Typography>
          <Typography variant="h4">Choose High Quality Service</Typography>
          <Box className="modalText">
            <Typography>- Accept All Major Insurance Carries</Typography>
            <Typography>- No Appointment, Walk-In Any Time</Typography>
            <Typography>- Free Professional Estimate</Typography>
            <Typography>
              - 24 Hours Towing Service{" "}
              <LocalPhoneOutlinedIcon sx={{ verticalAlign: "text-bottom" }} />
              (718) 747 - 4749
            </Typography>
          </Box>
          <Grid container>
            <Grid item xs={6}>
              <Button
                className="moduelButton"
                variant="contained"
                onClick={handleRepairModalOpen}
              >
                3 STEP FIX YOUR CAR →
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                className="moduelButton"
                onClick={handleAccidentModalOpen}
                variant="contained"
              >
                HANDLE ACCIDENT SITUATION →
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div> */}

      <Grid container style={{ padding: "2%" }}>
        <Grid item xs={6}>
          <Button
            className="moduelButton"
            variant="contained"
            onClick={handleRepairModalOpen}
          >
            3 STEP FIX YOUR CAR →
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            className="moduelButton"
            onClick={handleAccidentModalOpen}
            variant="contained"
          >
            HANDLE ACCIDENT SITUATION →
          </Button>
        </Grid>
      </Grid>
      <Typography
        variant="h3"
        color={"navy"}
        fontSize={"50px"}
        fontWeight={"600"}
        paddingTop={"3%"}
      >
        No Appointment, Walk-in Anytime
      </Typography>
      <Typography
        variant="h3"
        color={"navy"}
        fontSize={"50px"}
        fontWeight={"600"}
        paddingBottom={"3%"}
      >
        Repair Your Vehicle In One-Stop
      </Typography>
      <Container>
        <Carousel
          imgs={imgsToCompare}
          settingProps={{
            slidesToShow: 2,
            slidesToScroll: 2,
            imgsWidth: "95%",
          }}
        />
      </Container>

      <Grid xs={12} className="highlight" paddingTop={0}>
        <Stack>
          <Typography variant="h6" paddingLeft={25} paddingRight={25}>
            At TNS Auto Collision, we believe in more than just repairing
            vehicles; we restore peace of mind. With a legacy of unparalleled
            craftsmanship spanning decades, we stand as a beacon of excellence
            in the automotive repair industry.
          </Typography>
          <Container className="homeTabs">
            <TabsModules />
          </Container>
          <Typography variant="h6" paddingLeft={25} paddingRight={25}>
            Thank you for considering TNS Auto Collision for your automotive
            needs. Explore our website to discover our services in detail, and
            feel free to contact us with any inquiries. We look forward to
            serving you and restoring your vehicle to its former glory.
          </Typography>
        </Stack>
      </Grid>
      {/* <Typography
        variant="h3"
        color={"navy"}
        fontSize={"50px"}
        fontWeight={"600"}
        padding={"3%"}
      >
        We are recognized by all major insurance companies
      </Typography> */}

      <Modal open={accidentModalOpen} onClose={handleAccidentModalClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "40%",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <div className="homeModalButtonContainer">
            <button
              type="button"
              size="small"
              onClick={handleAccidentModalClose}
            >
              <CloseIcon />
            </button>
          </div>
          <div>
            <AccidentProcess />
          </div>
        </Box>
      </Modal>
      <Modal
        open={repairModalOpen}
        onClose={handleRepairModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <div className="homeModalButtonContainer">
            <button
              size="small"
              onClick={handleRepairModalClose}
              className="galleryModalButton"
            >
              <CloseIcon />
            </button>
          </div>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "40%",
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
            }}
          >
            <div className="homeModalButtonContainer">
              <button size="small" onClick={handleRepairModalClose}>
                <CloseIcon />
              </button>
            </div>
            <div>
              <RepairProcess />
            </div>
          </Box>
        </div>
      </Modal>
    </div>
  );
}
