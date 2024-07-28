import * as React from "react";
import { Box, ThemeProvider } from "@mui/material";
import { GiLovers } from "react-icons/gi";
import axios from "axios"

export default function SentLike() {

  const handleAllLikes = () => {
    let cookies = document.cookie;
    const token = cookies.split("token=")[1];
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios.get("/api/interaction/alllike", config).then((res) => {
      console.log(res)
    }).catch(err => console.log(err))
  }

  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: "pink",
            dark: "grey",
          },
        },
      }}
    >
      <Box
        sx={{
          width: 100,
          height: 100,
          borderRadius: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          bgcolor: "primary.main",
          "&:hover": {
            bgcolor: "primary.dark",
          },
        }}
        onClick = {handleAllLikes}
      >
        Sent Likes
        <GiLovers />
      </Box>
    </ThemeProvider>
  );
}
