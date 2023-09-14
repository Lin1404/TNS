import { Grid, Box, Container, Stack, Paper } from "@mui/material";
import MessageWindow from "../message/MessageWindow";
import Header from "./Header";
import { useState } from "react";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import ForwardToInboxOutlinedIcon from "@mui/icons-material/ForwardToInboxOutlined";
import ShareLocationOutlinedIcon from "@mui/icons-material/ShareLocationOutlined";
import PhonelinkRingOutlinedIcon from "@mui/icons-material/PhonelinkRingOutlined";
import useWindowDimensions from "../useWindowDimensions";

export default function Contact() {
  const { width } = useWindowDimensions();
  return (
    <div>
      <Header />
      <Grid container padding={6} columnGap={1}>
        <Grid item xs={width > 900 ? 5 : 12}>
          <MessageWindow />
        </Grid>
        <Grid item xs={width > 900 ? 6 : 12} paddingLeft={5}>
          <ContactInfo />
        </Grid>
      </Grid>
    </div>
  );
}

function ContactInfo() {
  const [hoverOnElement, sethoverOnElement] = useState(-1);

  const infoArr = [
    {
      icon: (
        <ShareLocationOutlinedIcon
          style={{
            fontSize: "xxx-large",
            color: hoverOnElement === 0 ? "white" : "navy",
          }}
        />
      ),
      title: "OUR LOCATION",
      value: (
        <>
          <div>1011 61st St</div>
          <div>Brooklyn, NY 11219</div>
        </>
      ),
    },
    {
      icon: (
        <PhonelinkRingOutlinedIcon
          style={{
            fontSize: "xxx-large",
            color: hoverOnElement === 1 ? "white" : "navy",
          }}
        />
      ),
      title: "CALL US",
      value: "(718) 259-0075",
    },
    {
      icon: (
        <ForwardToInboxOutlinedIcon
          style={{
            fontSize: "xxx-large",
            color: hoverOnElement === 2 ? "white" : "navy",
          }}
        />
      ),
      title: "EMAIL US",
      value: "tnsautogroup@gamil.com",
    },
    {
      icon: (
        <AccessAlarmsIcon
          style={{
            fontSize: "xxx-large",
            color: hoverOnElement === 3 ? "white" : "navy",
          }}
        />
      ),
      title: "BUSINESS HOURS",
      value: (
        <>
          <div>Mon - Fri : 7:00 am - 5:00 pm</div>
          <div>Sat : 7:00 am - 3:00 pm</div>
        </>
      ),
    },
  ];
  return (
    <Container>
      <h3>GET IN TOUCH</h3>
      <Grid
        padding={3}
        container
        columnGap={3}
        rowGap={4}
        sx={{ justifyContent: "space-between" }}
      >
        {infoArr.map((item, idx) => {
          return (
            <Grid xs={5}>
              <Paper
                square={false}
                elevation={5}
                sx={{
                  width: "100%",
                  height: 190,
                  "&:hover": {
                    backgroundColor: "primary.main",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
                onMouseEnter={() => sethoverOnElement(idx)}
                onMouseLeave={() => sethoverOnElement(-1)}
              >
                <Stack key={item.title}>
                  <Grid padding={1} paddingTop={2}>
                    {item.icon}
                  </Grid>
                  <text
                    style={{
                      color: hoverOnElement === idx ? "white" : "navy",
                      fontWeight: 600,
                    }}
                  >
                    {item.title}
                  </text>
                  <text
                    style={{
                      fontWeight: 400,
                      fontSize: "smaller",
                      paddingTop: "5%",
                      color: hoverOnElement === idx ? "white" : "navy",
                      overflowWrap: "anywhere",
                    }}
                  >
                    {item.value}
                  </text>
                </Stack>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
