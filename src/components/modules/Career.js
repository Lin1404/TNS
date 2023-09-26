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
  Chip,
  Typography,
  Divider,
} from "@mui/material";
import { Form } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { MuiTelInput } from "mui-tel-input";
import Header from "./Header";
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from "../utils/emailjs";

const positionsArr = [
  "Service Advisor",
  "Receivetion",
  "Accounting Specialist",
  "Human Resources Manager",
  "Marketing Specialist",
  "Office Manager",
  "Shop Manager",
  "Frame Technician",
  "Body Technician",
  "Prep Technician",
  "Paint Technician",
  "Automotive Detailer",
];

const initForm = {
  name: "",
  phone: "",
  email: "",
  gender: "",
  authorization: "",
  yoe: 0,
  positions: [],
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
      formValues.authorization !== "" &&
      formValues.positions.length !== 0
    ) {
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

  console.log(formValues.positions);
  return (
    <>
      <Header />
      <h2 className="sectionTitle">Online Job Application</h2>
      <Container className="careerIntroduction">
        <Typography>
          TNS Auto Collision is hiring career-focused professionals, including
          General Service Technicians, Automotive Technicians, Service Advisors,
          and Store Managers. We are committed to serving our local community,
          and if you are someone who is driven by a career-oriented mindset and
          possesses a genuine passion for consistently delivering exceptional
          customer service, we invite you to explore the opportunities with us.
        </Typography>
        <Typography>
          We offer training opportunities for those without experience.By
          joining our team, you will not only have a fulfilling job but also the
          chance to make a positive impact within your own community by
          assisting your neighbors.
        </Typography>
        <Typography
          variant="h3"
          sx={{ color: "#828fd8", padding: "2%", fontFamily: "cursive" }}
        >
          JOIN US TODAY !
        </Typography>
      </Container>
      <Container>
        <Typography
          variant="h4"
          sx={{
            textAlign: "left",
            paddingTop: "3%",
          }}
        >
          Benefits
        </Typography>
        <Container className="careerContext" sx={{ padding: "1% 0" }}>
          <Typography>- Competitive Weekly Pay</Typography>
          <Typography>
            - Discounted Services on Personal and Immediate Family Vehicles
          </Typography>
          <Typography>- Paid Vacation and Sick Time</Typography>
          <Typography>- Short Term Disability Plan</Typography>
          <Typography>- 6 Holidays</Typography>
          <Typography>- 401(k) Retirement Savings Plan</Typography>
          <Typography>- Health Savings Account</Typography>
          <Typography>- Opportunity for Advancement</Typography>
        </Container>
      </Container>

      <Container sx={{ paddingBottom: "2%" }}>
        <Typography variant="h4" sx={{ textAlign: "left", paddingTop: "3%" }}>
          How to apply:
        </Typography>
        <Container className="careerContext">
          <Typography>Applying at TNS Auto Collision is easy! </Typography>
          <Typography>
            You can send email to: tnsautogroup@gmail.com. Please include a
            cover letter and resume, as well as any other information you think
            will help us evaluate your qualifications.
          </Typography>
          <Typography>
            You can apply through our online application. Apply using the form
            below.
          </Typography>
        </Container>
      </Container>

      <Divider variant="middle" />
      <Container>
        <Box sx={{ padding: "5% 0" }}>
          <Typography
            variant="h4"
            sx={{ color: "#828fd8", fontFamily: "cursive" }}
          >
            We want to know more about you
          </Typography>
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

                <FormControl
                  sx={{ m: 1, width: 670 }}
                  error={isOnSubmit && formValues.positions.length === 0}
                >
                  <FormLabel id="positions" title="HELO">
                    Select the position(s) you want to apply
                  </FormLabel>
                  <Select
                    multiple
                    labelId="positions"
                    id="positions"
                    name="positions"
                    value={formValues.positions}
                    renderValue={(selected) => (
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}
                    onChange={(e) =>
                      setFormValues({
                        ...formValues,
                        positions: e.target.value,
                      })
                    }
                  >
                    {positionsArr.map((position) => (
                      <MenuItem value={position} key={position}>
                        {position}
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
