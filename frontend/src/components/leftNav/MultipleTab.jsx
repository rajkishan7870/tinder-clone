import { React, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import SentLike from "./SentLike";
import axios from "axios";
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
  const [matchreq, setMatchreq] = useState()

  useEffect(() => {
    const cookies = document.cookie;
    const token = cookies.split("token=")[1];
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get("/api/interaction/matchreq", config)
      .then((res) => {
        const matchingReqData = res.data;
        setMatchreq(matchingReqData);    
      })
      .catch((err) => console.log(err));
  }, []);

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
          <MatchingReq matchingReqData={matchreq} />
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
