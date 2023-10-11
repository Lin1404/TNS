import Header from "../Header";
import ppg2 from "../../../assets/ppg2.jpeg";
import { Divider, Grid, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import paintCover from "../../../assets/paintCover.jpg";
import paint from "../../../assets/paint.jpg";
import ecoFriendly from "../../../assets/ecoFriendly.png";

export default function Paint() {
  return (
    <>
      <Header />
      <div className="serviceBackgroundColor">
        <img src={paintCover} alt="repair Img" className="ImgFill" />
        <Grid container xs={12} className="highlight">
          <Grid item xs={5}>
            <Stack className="serviceContext">
              <Typography variant="h3" padding={1}>
                EXPERT ESTIMATING
              </Typography>
              <Divider variant="middle" />
              <Typography variant="subtitle1" padding={2}>
                At TNS Auto Collision, our experienced estimators conduct a
                meticulous assessment of your vehicle's damage, providing you
                with a comprehensive report. Our process begins with a thorough
                visual inspection to compile a detailed list of necessary
                repairs, aiming to restore your vehicle to its pre-loss
                condition. Utilizing our advanced computerized estimating
                system, we research the correct parts, labor, and safety
                procedures tailored to your specific vehicle.
              </Typography>
              <Typography variant="subtitle1" padding={2}>
                If you are filing an insurance claim, we collaborate closely
                with both you and your insurance company. We schedule
                appointments at our shop, facilitating full disassembly of
                impacted areas. This approach enables our team and the insurance
                adjuster to assess required parts accurately, eliminating any
                delays in the repair process.
              </Typography>
              <Typography variant="subtitle1" padding={2}>
                It's essential to remember that you have the right to choose any
                licensed repair shop for your vehicle's inspection and repair.
                At TNS Auto Collision, our dedicated staff is committed to
                simplifying the estimating and repair process for our valued
                customers. Your satisfaction and convenience are our priorities.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={5}>
            <img
              src={paint}
              alt="Aluminum Certified"
              style={{ width: "90%" }}
            />
          </Grid>
        </Grid>
      </div>
      <h2 className="sectionTitle">Our Best Color Result</h2>
      <div className="ppgAnnouncementContainer">
        <img src={ecoFriendly} alt="illustration" style={{ width: "25%" }} />
        <div className="ppgAnnouncement">
          <h2>
            Make the eco-friendly choice for your vehicle and the planet.
            Contact us today and let's GO Green together!
          </h2>
          <div>
            <p>
              We proudly use PPG ENVIROBASE® paint with computer-controlled
              paint matching to assure the right match to your original finish.
            </p>
            <p>
              Initially introduced in 1999 to meet low VOC legislation, the
              Envirobase High Performance system is now the leading premium
              waterborne paint system in North America.
            </p>
          </div>
        </div>
      </div>
      <img src={ppg2} alt="ppg" style={{ width: "20%", paddingBottom: "5%" }} />
      <div className="greenAnnouncementContainer">
        <div>
          <h2>Embrace Eco-Friendly Solutions:</h2>
          <p>
            At our auto body shop, we are committed to making a positive impact
            on the environment. That's why we proudly utilize PPG waterborne
            paint, a cutting-edge eco-friendly paint solution. By choosing us,
            you're not only getting top-notch auto body services but also
            actively participating in saving our planet.
          </p>
        </div>

        <div>
          <h2>Why PPG Waterborne Paint?</h2>
          <p>
            PPG waterborne paint is a revolutionary product designed to reduce
            volatile organic compounds (VOCs) emitted during the painting
            process. This helps minimize harmful environmental effects and air
            pollution. Our dedication to using environmentally responsible paint
            demonstrates our commitment to sustainability and the well-being of
            our community.
          </p>
        </div>

        <div>
          <h2>Uncompromising Quality:</h2>
          <p>
            Our passion for the environment doesn't mean we compromise on
            quality. With PPG waterborne paint, your vehicle receives a superior
            paint finish that is both vibrant and long-lasting. You can trust
            our skilled technicians to bring out the best in your car while
            being mindful of its impact on our planet.
          </p>
        </div>

        <div>
          <h2>Join Us in the Green Movement:</h2>
          <p>
            By choosing our auto body shop and PPG waterborne paint, you're
            taking an active step towards a greener future. Together, we can
            make a difference and protect the environment for generations to
            come.
          </p>
        </div>
      </div>
    </>
  );
}
