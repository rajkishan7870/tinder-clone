import React from "react";
import { Button } from "@mui/material";

export default function SaveButton(props) {
  return (
    <div>
      <Button
        sx={{
          textTransform: "none",
          position: "absolute",
          right: "1rem",
          bottom: "1rem",
        }}
        type={props.type}
        onClick={props.onClick}
      >
        {props.clickCount === 1? "Saved" : "Save"}
      </Button>
    </div>
  );
}
