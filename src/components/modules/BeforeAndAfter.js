import { useEffect, useState } from "react";
import Carousel from "../Carousel";
import Header from "./Header";
import compare1 from "../../assets/compare1.png";
import compare2 from "../../assets/compare2.png";
import compare3 from "../../assets/compare3.png";
import compare4 from "../../assets/compare4.png";
import compare5 from "../../assets/compare5.png";
import compare6 from "../../assets/compare6.png";
import compare7 from "../../assets/compare7.png";
import compare8 from "../../assets/compare8.png";
import compare9 from "../../assets/compare9.png";
import compare10 from "../../assets/compare10.png";
import compare11 from "../../assets/compare11.png";
import compare12 from "../../assets/compare12.png";
import compare13 from "../../assets/compare13.png";
import { Button, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const imgsToCompare = [
  compare1,
  compare2,
  compare3,
  compare4,
  compare5,
  compare6,
  compare7,
  compare8,
  compare9,
  compare10,
  compare11,
  compare12,
  compare13,
];

export default function BeforeAndAfter() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImgIdx, setSelectImgIdx] = useState(-1);
  const handleClose = () => setIsOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    bgcolor: "#cae4fd",
    boxShadow: 24,
    p: 4,
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <div className="backgroundColorWhite" />
      <h2 className="sectionTitle">Before & After Photos</h2>
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
                alt="Before & After"
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
                <CloseIcon />
              </button>
            </div>
            <Carousel
              style={{
                width: "40%",
                marginLeft: "25%",
              }}
              imgs={imgsToCompare}
              settingProps={{
                initialSlide: selectedImgIdx,
                autoplay: false,
                centerPadding: "40px",
              }}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
