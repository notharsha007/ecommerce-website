import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function GeneralFooter() {
  return (
    <AppBar position="static" >
      <Toolbar sx={{ justifyContent: "center" }}>
        <Typography variant="h6">Hope you had a great time</Typography>
      </Toolbar>
    </AppBar>
  );
}
