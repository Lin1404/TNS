import Header from "../Header";
import { Button, Container, Divider, Grid, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import aluminumCertifiedCover from "../../../assets/aluminum-certified-cover.jpg";
import aluminumCertified from "../../../assets/aluminum-certified.jpg";

export default function AluminumCertified() {
  return (
    <>
      <Header />
      <img src={aluminumCertifiedCover} alt="test" style={{ width: "100%" }} />
      <Grid container xs={12} columnGap={15} className="highlight">
        <Grid item xs={5}>
          <Stack>
            <Typography variant="h4" padding={1}>
              ALUMINUM CERTIFIED
            </Typography>
            <Divider variant="middle" />
            <Typography variant="subtitle1" padding={2}>
              Discover precision at TNS Auto Collision, where our certified
              technicians excel in cutting-edge vehicle repair techniques,
              specializing in aluminum repairs. Trust our expertise to ensure
              your vehicle receives the meticulous care it deserves. Visit us to
              learn more about our specialized procedures and unmatched quality.
            </Typography>
            <Typography variant="subtitle1" padding={2}>
              Differentiating between steel and aluminum is crucial, as each
              material demands specific repair methods. Incorrect procedures
              could lead to irreversible damage. Rest assured, our experts
              comprehend the nuances of these materials. Visit us to learn more
              about our specialized repair procedures and how we can ensure your
              vehicle receives the meticulous care it deserves.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={5}>
          <img src={aluminumCertified} alt="test" style={{ width: "100%" }} />
        </Grid>
      </Grid>
    </>
  );
}
