import Header from "../Header";
import { Divider, Grid, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import aluminumCover from "../../../assets/aluminumCover.jpg";
import aluminumCertified from "../../../assets/aluminum-certified.jpg";

export default function AluminumCertified() {
  return (
    <div className="serviceBackgroundColor">
      <Header />
      <img
        src={aluminumCover}
        alt="Aluminum Certified Cover"
        className="ImgFill"
      />
      <Grid container xs={12} className="highlight">
        <Grid item xs={5}>
          <Stack className="serviceContext">
            <Typography variant="h3" padding={1}>
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
          <img
            src={aluminumCertified}
            alt="Aluminum Certified"
            style={{ width: "90%" }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
