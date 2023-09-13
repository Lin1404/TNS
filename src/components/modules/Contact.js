import { Grid } from "@mui/material";
import MessageWindow from "../message/MessageWindow";
import Header from "./Header";

export default function Contact() {
  return (
    <div>
      <Header />
      <Grid container padding={5} columnGap={3}>
        <Grid item xs={8}>
          <MessageWindow />
        </Grid>
        <Grid>
          <text>Test textarea</text>
        </Grid>
      </Grid>
    </div>
  );
}
