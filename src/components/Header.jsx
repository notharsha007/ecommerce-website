import React from "react";
import { AppBar, Toolbar, Typography, Box, Container } from "@mui/material";

export default function GeneralHeader() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "center" }}>
        <Typography variant="h6">Welcome</Typography>
      </Toolbar>
    </AppBar>
  );
}
