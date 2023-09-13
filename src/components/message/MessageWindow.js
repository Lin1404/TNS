import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import { Form } from "react-router-dom";
import axios from "axios";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_rkvpp6n";
const TEMPLATE_ID = "template_e06xv0o";
const USER_ID = "r4Jj97hnasFu2RRk8";

export default function MessageWindow() {
  const handleOnSubmit = (e) => {
    console.log(e);
  };

  return (
    <Box
    // border={1}
    // borderRadius={2}
    // color={"#002984"}
    >
      <h3>Contact Us:</h3>
      <FormControl>
        <Stack spacing={3} padding={3}>
          <Grid container>
            <Grid xs={6} paddingRight={4}>
              <TextField id="name" label="Name" name="user_name" required />
            </Grid>
            <Grid xs={6} textAlign={"right"}>
              <TextField
                id="modal"
                label="Car Modal (Optional)"
                name="car_modal"
                required
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid xs={6} paddingRight={4}>
              <TextField
                id="phone"
                label="Phone Number"
                name="user_phone"
                required
              />
            </Grid>
            <Grid xs={6} textAlign={"right"}>
              <TextField id="email" label="E-mail" name="user_email" required />
            </Grid>
          </Grid>
          <TextField
            id="message"
            label="Message"
            name="message"
            multiline
            rows={6}
            // placeholder="Please Enter Your Email"
            required
          />
          <Button
            onClick={() => handleOnSubmit()}
            variant="contained"
            sx={{ width: "50%", alignSelf: "center" }}
          >
            Submit
          </Button>
        </Stack>
      </FormControl>
    </Box>
  );
}
