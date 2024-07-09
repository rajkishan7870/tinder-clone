import * as React from "react";
import { Box, ThemeProvider } from "@mui/material";
import { GiLovers } from "react-icons/gi";

export default function SentLike() {
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
          bgcolor: "primary.main",
          "&:hover": {
            bgcolor: "primary.dark",
          },
        }}
      >
        Sent Likes
        <GiLovers />
      </Box>
    </ThemeProvider>
  );
}
