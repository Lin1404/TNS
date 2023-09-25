import {
  Button,
  FormControl,
  Grid,
  Stack,
  TextField,
  Container,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Select,
  MenuItem,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import { Form } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { MuiTelInput } from "mui-tel-input";
import Header from "./Header";
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from "../utils/emailjs";

const positionsArr = [
  { value: "serviceAdvisor", label: "Service Advisor" },
  { value: "receivetion", label: "Receivetion" },
  { value: "accounting", label: "Accounting Specialist" },
  { value: "hr", label: "Human Resources Manager" },
  { value: "marketing", label: "Marketing Specialist" },
  { value: "officeManager", label: "Office Manager" },
  { value: "shopManager", label: "Shop Manager" },
  { value: "frameTech", label: "Frame Technician" },
  { value: "bodyTech", label: "Body Technician" },
  { value: "prepTech", label: "Prep Technician" },
  { value: "paintTech", label: "Paint Technician" },
  { value: "detailer", label: "Automotive Detailer" },
];

const initForm = {
  name: "",
  phone: "",
  email: "",
  gender: "",
  authorization: "",
  yoe: 0,
  position: "",
  excompany: "",
  applicationMessage: "",
};

export default function Career() {
  const [formValues, setFormValues] = useState(initForm);
  const [isOnSubmit, setIsOnSubmit] = useState(false);
  const [isExperienced, setIsExperienced] = useState(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [alertType, setAlertType] = useState("error");

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsSnackbarOpen(false);
  };

  const handleOnSubmit = (e) => {
    if (
      formValues.name !== "" &&
      formValues.phone.length === 12 &&
      formValues.email !== "" &&
      formValues.gender !== "" &&
      formValues.authorization !== ""
    ) {
      console.log(e.target);
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
        (response) => {
          console.log("SUCCESS SUBMIT FORM!", response.status);
          setFormValues(initForm);
          setAlertType("success");
          setIsSnackbarOpen(true);
          setIsOnSubmit(false);
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error);
          setAlertType("error");
          setIsSnackbarOpen(true);
        }
      );
    }
  };

  return (
    <>
      <Header />
      <h2 className="sectionTitle">We want to know more about you</h2>
      <Container>
        <Box sx={{ paddingBottom: "10%" }}>
          <FormControl>
            <Form onSubmit={handleOnSubmit}>
              <Stack spacing={3} padding={3}>
                <Grid container>
                  <Grid xs={12}>
                    <TextField
                      xs={5}
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
                <FormControl error={isOnSubmit && formValues.gender === ""}>
                  <FormLabel id="genderLabel">Gender</FormLabel>
                  <RadioGroup
                    aria-labelledby="gender"
                    name="gender"
                    onChange={(e) =>
                      setFormValues({ ...formValues, gender: e.target.value })
                    }
                  >
                    <FormControlLabel
                      value="Female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="Male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="Other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>

                <FormControl
                  error={isOnSubmit && formValues.authorization === ""}
                >
                  <FormLabel id="genderLabel">
                    Are you authorized to work in the United States without work
                    visa sponsorship?
                  </FormLabel>
                  <RadioGroup
                    name="authorization"
                    onChange={(e) =>
                      setFormValues({
                        ...formValues,
                        authorization: e.target.value,
                      })
                    }
                  >
                    <FormControlLabel
                      value="authorized"
                      control={<Radio />}
                      label="Yes, I am authorized to work in the United States."
                    />
                    <FormControlLabel
                      value="unauthorized"
                      control={<Radio />}
                      label="No, I want the sponsorship."
                    />
                  </RadioGroup>
                </FormControl>

                <FormControl error={isOnSubmit && formValues.position === ""}>
                  <FormLabel id="position" title="HELO">
                    Select the position you want to apply
                  </FormLabel>
                  <Select
                    labelId="position"
                    id="position"
                    name="position"
                    value={formValues.position}
                    onChange={(e) =>
                      setFormValues({ ...formValues, position: e.target.value })
                    }
                  >
                    {positionsArr.map((position) => (
                      <MenuItem value={position.label}>
                        {position.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel id="exp">
                    Do you have experience related to this position?
                  </FormLabel>
                  <RadioGroup
                    name="exp"
                    defaultValue="notExperienced"
                    onChange={(e) =>
                      setIsExperienced(e.target.value === "experienced")
                    }
                  >
                    <FormControlLabel
                      value="experienced"
                      control={<Radio />}
                      label="Yes, I am experienced."
                    />
                    <FormControlLabel
                      value="notExperienced"
                      control={<Radio />}
                      label="No, I want to get train."
                    />
                  </RadioGroup>
                </FormControl>
                {isExperienced && (
                  <FormControl>
                    <FormLabel id="yoeLabel">
                      How many years of relate experience do you have?
                    </FormLabel>
                    <TextField
                      id="yoe"
                      name="yoe"
                      label="Years"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      InputProps={{
                        inputProps: { min: 0 },
                      }}
                      onChange={(e) =>
                        setFormValues({ ...formValues, yoe: e.target.value })
                      }
                    />

                    <FormLabel id="ex-company">
                      Which company you worked for?
                    </FormLabel>
                    <TextField
                      id="excompany"
                      name="excompany"
                      label="Company Name"
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          excompany: e.target.value,
                        })
                      }
                    />
                  </FormControl>
                )}

                <FormControl>
                  <FormLabel id="ex-company">
                    Does any you want us to know? (Optional)
                  </FormLabel>
                  <TextField
                    id="applicationMessage"
                    label="Message"
                    name="applicationMessage"
                    multiline
                    rows={6}
                    onChange={(e) =>
                      setFormValues({
                        ...formValues,
                        applicationMessage: e.target.value,
                      })
                    }
                  />
                </FormControl>
                <Button
                  type="submit"
                  onClick={() => setIsOnSubmit(true)}
                  variant="contained"
                  sx={{ width: "50%", alignSelf: "center" }}
                >
                  SUBMIT APPLICATION
                </Button>
              </Stack>
            </Form>
          </FormControl>
        </Box>
      </Container>

      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        {alertType === "success" ? (
          <Alert
            onClose={handleSnackbarClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Thank you! Your application has been submitted.
          </Alert>
        ) : (
          <Alert
            onClose={handleSnackbarClose}
            severity="error"
            sx={{ width: "100%" }}
          >
            There is something wrong. Please call to contact us.
          </Alert>
        )}
      </Snackbar>
    </>
  );
}
