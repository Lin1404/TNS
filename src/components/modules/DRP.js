import { useEffect } from "react";
import drp from "../../assets/DRP.png";
import Header from "./Header";
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import geico from "../../assets/geico.png";

export default function DRP() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className="moduleContainer">
        <h2 className="sectionTitle">DRP Partner With</h2>
        <div className="certificationsLogo">
          <img src={drp} alt="DRP" />
        </div>
      </div>
    </>
  );
}
