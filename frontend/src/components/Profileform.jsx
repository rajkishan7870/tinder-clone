import {React, useEffect} from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Education from "./Education";
import BasicInfo from "./BasicInfo";
import Location from "./Location";
import AddImage from "./AddImage";
import Interest from "./Interest";
import Relegion from "./Relegion";
import OtherInformation from "./OtherInformation";

export default function AccordionUsage() {

  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel0-content"
          id="panel0-header"
        >
          Add Image
        </AccordionSummary>
        <AccordionDetails
          sx={{
            width: '35rem',
          }}
        >
          <AddImage />
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Basic Information
        </AccordionSummary>
        <AccordionDetails>
          <BasicInfo />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Education
        </AccordionSummary>
        <AccordionDetails>
          <Education />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Location
        </AccordionSummary>
        <AccordionDetails>
          <Location />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          Interests
        </AccordionSummary>
        <AccordionDetails>
          <Interest/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          Relegion
        </AccordionSummary>
        <AccordionDetails>
          <Relegion/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6-content"
          id="panel6-header"
        >
          Other Information
        </AccordionSummary>
        <AccordionDetails>
          <OtherInformation/>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
