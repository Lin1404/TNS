import Partnership from "./modules/DRP";
import Reviews from "./modules/Reviews";
import AccidentProcess from "./homePageComponents/AccidentProcess";
import tnsAnime from "../assets/tnsAnime.mp4";
import Header from "./modules/Header";
import { Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import RepairProcess from "./homePageComponents/RepairProcess";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function Home() {
  const [accidentModalOpen, setAccidentModalOpen] = useState(false);
  const [repairModalOpen, setRepairModalOpen] = useState(false);
  const handleAccidentModalOpen = () => setAccidentModalOpen(true);
  const handleAccidentModalClose = () => setAccidentModalOpen(false);
  const handleRepairModalOpen = () => setRepairModalOpen(true);
  const handleRepairModalClose = () => setRepairModalOpen(false);

  return (
    <>
      <Header />
      <videoAndModalsContainer className="paddingTop paddingBot videoAndModalsContainer">
        <videoContainer>
          <video
            className="VideoTag"
            autoPlay
            loop
            muted
            style={{ width: "100%" }}
          >
            <source src={tnsAnime} type="video/mp4" />
          </video>
        </videoContainer>
        <homePageModals className="homePageModalContainer">
          <accidentModalContainer>
            <Typography>
              <h2>Do you know what should do after Accident happen?</h2>
            </Typography>
            <Button
              onClick={handleAccidentModalOpen}
              style={{
                backgroundColor: "#1976c7",
                color: "white",
                borderRadius: "0",
                height: "25%",
                fontSize: "0.7rem",
              }}
            >
              HOW TO HANDLE ACCIDENT PROFESSIONALLY →
            </Button>
          </accidentModalContainer>
          <repairModalContainer>
            <Typography>
              <h2>Do you know our Pepair Process?</h2>
            </Typography>
            <Button
              onClick={handleRepairModalOpen}
              style={{
                backgroundColor: "#1976c7",
                color: "white",
                borderRadius: "0",
                height: "25%",
                fontSize: "0.7rem",
              }}
            >
              LEARN MORE ABOUT OUR REPAIR PROCESS →
            </Button>
          </repairModalContainer>
        </homePageModals>
      </videoAndModalsContainer>

      <Partnership isOnHomePage={true} />

      <Reviews />

      <Modal
        open={accidentModalOpen}
        onClose={handleAccidentModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
        <Box sx={style}>
          <div>
            <RepairProcess />
          </div>
        </Box>
      </Modal>
    </>
  );
}
