import { useEffect, useState } from "react";
import Carousel from "../Carousel";
import Header from "./Header";
import compare1 from "../../assets/compare1.png";
import compare2 from "../../assets/compare2.png";
import compare3 from "../../assets/compare3.png";
import compare4 from "../../assets/compare4.png";
import compare5 from "../../assets/compare5.png";
// import compare6 from "../../assets/compare6.png";
import compare7 from "../../assets/compare7.png";
import { Button, Modal } from "@mui/material";

const imgsToCompare = [
  compare1,
  compare2,
  compare3,
  compare4,
  compare5,
  // compare6,
  compare7,
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "#cae4fd",
  boxShadow: 24,
  p: 4,
};
export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImgIdx, setSelectImgIdx] = useState(-1);
  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="compareSections">
      <Header />
      <div className="backgroundColorWhite" />
      <h2 className="sectionTitle">Before & After Photos:</h2>
      <div className="galleryContainer">
        {imgsToCompare.map((item, idx) => (
          <div key={item}>
            <Button
              onClick={() => {
                setIsOpen(true);
                setSelectImgIdx(idx);
              }}
            >
              <img
                src={item}
                alt="illustration"
                style={{
                  width: "100%",
                }}
              />
            </Button>
          </div>
        ))}
      </div>
      <div className="paddingBot" />

      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <div className="backgroundColorWhite galleryModal" style={style}>
            <div className="galleryModalButtonContainer">
              <button
                size="small"
                onClick={handleClose}
                className="galleryModalButton"
              >
                X
              </button>
            </div>
            <Carousel
              style={{
                width: "60%",
                marginLeft: "25%",
              }}
              imgs={imgsToCompare}
              settingProps={{
                initialSlide: selectedImgIdx,
                autoplay: false,
                // centerMode: true,
                centerPadding: "40px",
              }}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
