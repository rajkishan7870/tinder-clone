import { React, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import SentLike from "./SentLike";
import MatchingReq from "./MatchingReq";
import style from "./MultipleTab.module.css"
import MessageOuter from "./MessageOuter";

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MultipleTab() {
  const [value, setValue] = useState(0);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="white"
          aria-label="basic tabs example"
        >
          <Tab label="Matches" {...a11yProps(0)} sx={{ color: "white" }} />
          <Tab label="Messages" {...a11yProps(1)} sx={{ color: "white" }} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className={style.parent1st}>
          <SentLike />
          <MatchingReq />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className={style.parent1st}>
          <MessageOuter/>
        </div>
      </CustomTabPanel>
    </Box>
  );
}
