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
  const [isMouseOnAccidentButton, setIsMouseOnAccidentButton] = useState(false);
  const [isMouseOnRepairButton, setIsMouseOnRepairButton] = useState(false);
  const handleAccidentModalOpen = () => setAccidentModalOpen(true);
  const handleAccidentModalClose = () => setAccidentModalOpen(false);
  const handleRepairModalOpen = () => setRepairModalOpen(true);
  const handleRepairModalClose = () => setRepairModalOpen(false);

  return (
    <>
      <Header />
      <div className="videoAndModalsContainer">
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
        <div className="homePageModalContainer">
          <div>
            <Typography>
              <h2>Do you know what to do after</h2>{" "}
              <div className="accidentModalTitle">
                <h1>Accident</h1> <h2>happen?</h2>
              </div>
            </Typography>
            <Button
              onClick={handleAccidentModalOpen}
              onMouseEnter={() => setIsMouseOnAccidentButton(true)}
              onMouseLeave={() => setIsMouseOnAccidentButton(false)}
              style={{
                backgroundColor: "#1976c7",
                color: isMouseOnAccidentButton ? "#3b3bb3" : "white",
                borderRadius: "0",
                fontSize: "0.7rem",
              }}
            >
              HOW TO HANDLE ACCIDENT PROFESSIONALLY →
            </Button>
          </div>
          <div>
            <Typography>
              <h2>Do you know our Pepair Process?</h2>
            </Typography>
            <Button
              onClick={handleRepairModalOpen}
              onMouseEnter={() => setIsMouseOnRepairButton(true)}
              onMouseLeave={() => setIsMouseOnRepairButton(false)}
              style={{
                backgroundColor: "#1976c7",
                color: isMouseOnRepairButton ? "#3b3bb3" : "white",
                borderRadius: "0",
                fontSize: "0.7rem",
              }}
            >
              LEARN MORE ABOUT OUR REPAIR PROCESS →
            </Button>
          </div>
        </div>
      </div>

      <Reviews />

      <Modal open={accidentModalOpen} onClose={handleAccidentModalClose}>
        <Box sx={style}>
          <div className="homeModalButtonContainer">
            <button size="small" onClick={handleAccidentModalClose}>
              X
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
              X
            </button>
          </div>
          <Box sx={style}>
            <div className="homeModalButtonContainer">
              <button size="small" onClick={handleAccidentModalClose}>
                X
              </button>
            </div>
            <div>
              <RepairProcess />
            </div>
          </Box>
        </div>
      </Modal>
    </>
  );
}
