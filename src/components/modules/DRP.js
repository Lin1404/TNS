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
      <Box
        style={{ backgroundColor: "#709099", width: "100%", color: "cornsilk" }}
      >
        <Stack>
          <Typography
            variant="h4"
            fontWeight={600}
            style={{ color: "darkslategray" }}
            padding={5}
          >
            GEICO AUTO REPAIR XPRESS ®
          </Typography>
          <Divider
            variant="middle"
            style={{
              width: "60^",
              alignSelf: "center",
            }}
          />
          <Typography
            variant="body1"
            paddingTop={1}
            paddingLeft={10}
            paddingRight={10}
          >
            TNS Auto Collision proudly operates as a GEICO Pro Shop Auto Repair
            Xpress® facility, ensuring that any repairs conducted through GEICO
            are backed by their comprehensive guarantee for the entire duration
            of your vehicle's ownership.
          </Typography>
          <Grid container xs={12} padding={10}>
            <Grid item xs={7} style={{ textAlign: "justify", padding: "3%" }}>
              <Container padding={5}>
                <Stack>
                  <Typography variant="h4" style={{ color: "darkslategray" }}>
                    Keeping You Informed
                  </Typography>
                  <Typography variant="body1">
                    Entrusting your vehicle for collision repairs can sometimes
                    evoke apprehension. At TNS Auto Collision, we are committed
                    to alleviating any concerns by maintaining clear and
                    transparent communication throughout the entire repair
                    process. As a designated GEICO Pro Shop, your repairs will
                    commence promptly, and we are readily available to address
                    any inquiries or uncertainties you may have.
                  </Typography>
                </Stack>
              </Container>
            </Grid>
            <Grid item xs={5}>
              <img src={geico} alt="GEICO" style={{ width: "100%" }} />
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </>
  );
}
