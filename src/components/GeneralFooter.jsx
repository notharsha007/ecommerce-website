import React from "react";
import { Box, Typography } from "@mui/material";

const GeneralFooter = () => {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: "center",
        padding: "1rem",
        backgroundColor: "#1F51FF",
      }}
    >
      <Typography variant="body1">Developed By Harsh</Typography>
    </Box>
  );
};

export default GeneralFooter;
