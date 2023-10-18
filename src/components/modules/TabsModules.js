import { Box, Typography } from "@mui/material";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsModules() {
  const [value, setValue] = useState(-1);
  const handleChange = (e, v) => {
    setValue(v);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="yellow"
          variant="fullWidth"
          TabIndicatorProps={{
            style: {
              backgroundColor: "navy",
            },
          }}
        >
          <Tab label="Customer-Centric Approach" {...a11yProps(0)} />
          <Tab label="Cutting-Edge Technology" {...a11yProps(1)} />
          <Tab label="One-Stop Solution" {...a11yProps(2)} />
          <Tab label="Peace of Mind" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Typography variant="h6">
          Your satisfaction is our driving force. From the moment you step into
          our state-of-the-art facility, expect personalized service tailored to
          your needs. We understand the stress that accompanies vehicle damage,
          and we are here to make the restoration process seamless for you.
        </Typography>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Typography variant="h6">
          We invest in the latest technologies, from advanced diagnostic tools
          to eco-friendly painting systems, ensuring your vehicle receives the
          highest quality of care. Our commitment to innovation sets us apart,
          guaranteeing superior results every time.
        </Typography>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Typography variant="h6">
          TNS Auto Collision is your comprehensive solution for all your
          automotive needs. From precise collision repairs to expert paintwork
          and detailing, we offer a complete suite of services under one roof.
          Convenience meets quality here.
        </Typography>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Typography variant="h6">
          When you choose TNS Auto Collision, you're choosing peace of mind. Our
          transparent processes, meticulous attention to detail, and dedication
          to excellence mean you can trust us with your vehicle completely. We
          handle your car as if it were our own, ensuring it leaves our shop in
          pristine condition.
        </Typography>
      </CustomTabPanel>
    </Box>
  );
}
