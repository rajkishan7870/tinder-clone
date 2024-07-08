import React from "react";
import { Button } from "@mui/material";

export default function SaveButton(props) {
  return (
    <Button
      sx={{
        textTransform: "none",
        position: "absolute",
        right: "1rem",
        bottom: "1rem",
      }}
      type="submit"
      onClick={props.onClick}
    >
      Save
    </Button>
  );
}
