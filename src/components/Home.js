import Partnership from "./modules/DRP";
import Reviews from "./modules/Reviews";
import AccidentProcess from "./homePageComponents/AccidentProcess";
import tnsAnime from "../assets/tnsAnime.mp4";
import Header from "./modules/Header";
import { Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import Box from "@mui/material/Box";
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
      <div className="paddingTop">
        <video
          className="VideoTag"
          autoPlay
          loop
          muted
          style={{ width: "70%" }}
        >
          <source src={tnsAnime} type="video/mp4" />
        </video>
      </div>

      <Button onClick={handleAccidentModalOpen}>
        CLICK HERE TO LEARN MORE →
      </Button>
      <Button onClick={handleRepairModalOpen}>
        CLICK HERE TO LEARN MORE ABOUT OUR REPAIR PROCESS→
      </Button>

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
