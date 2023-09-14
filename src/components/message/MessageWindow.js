import {
  Box,
  Button,
  FormControl,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import { Form } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { MuiTelInput } from "mui-tel-input";

const SERVICE_ID = "service_rkvpp6n";
const TEMPLATE_ID = "template_e06xv0o";
const USER_ID = "r4Jj97hnasFu2RRk8";


const initForm = {
  name: "",
  phone: "",
  email: "",
  model: "",
  message: "",
};
export default function MessageWindow() {
  const [formValues, setFormValues] = useState(initForm);
  const [isOnSubmit, setIsOnSubmit] = useState(false);
  const handleOnSubmit = (e) => {
    if (
      formValues.name !== "" &&
      formValues.phone.length === 12 &&
      formValues.email !== "" &&
      formValues.message !== ""
    ) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
        (response) => {
          console.log("SUCCESS SUBMIT FORM!", response.status);
          setFormValues(initForm);
          setIsOnSubmit(false);
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    }
  };

  return (
    <Box>
      <h3>Contact Us:</h3>
      <FormControl>
        <Form onSubmit={handleOnSubmit}>
          <Stack spacing={3} padding={3}>
            <Grid container>
              <Grid xs={6} paddingRight={4}>
                <TextField
                  id="name"
                  label="Name"
                  name="name"
                  required
                  sx={{ width: "100%" }}
                  onChange={(e) =>
                    setFormValues({ ...formValues, name: e.target.value })
                  }
                  error={isOnSubmit && formValues.name === ""}
                />
              </Grid>
              <Grid xs={6} textAlign={"right"}>
                <TextField
                  id="model"
                  sx={{ width: "100%" }}
                  label="Car Model (Optional)"
                  name="model"
                  onChange={(e) =>
                    setFormValues({ ...formValues, model: e.target.value })
                  }
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid xs={6} paddingRight={4}>
                <MuiTelInput
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  required
                  defaultCountry="US"
                  forceCallingCode="1"
                  onlyCountries={["US"]}
                  disableDropdown
                  disableFormatting
                  value={formValues.phone}
                  onChange={(value) =>
                    value.length < 13 &&
                    setFormValues({ ...formValues, phone: value })
                  }
                  error={isOnSubmit && formValues.phone.length !== 12}
                />
              </Grid>
              <Grid xs={6} textAlign={"right"}>
                <TextField
                  id="email"
                  label="E-mail"
                  name="email"
                  required
                  sx={{ width: "100%" }}
                  error={isOnSubmit && formValues.email === ""}
                  onChange={(e) =>
                    setFormValues({ ...formValues, email: e.target.value })
                  }
                />
              </Grid>
            </Grid>
            <TextField
              id="message"
              label="Message"
              name="message"
              multiline
              required
              rows={6}
              helperText="We Love to Hear Your Feedback!"
              error={isOnSubmit && formValues.message === ""}
              onChange={(e) =>
                setFormValues({ ...formValues, message: e.target.value })
              }
            />
            <Button
              type="submit"
              onClick={() => setIsOnSubmit(true)}
              variant="contained"
              sx={{ width: "50%", alignSelf: "center" }}
            >
              SEND MESSAGE
            </Button>
          </Stack>
        </Form>
      </FormControl>
    </Box>
  );
}
