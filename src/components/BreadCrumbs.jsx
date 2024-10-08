import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link as RouterLink } from "react-router-dom";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function BasicBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <RouterLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
          Login
        </RouterLink>
        <RouterLink
          to="/mock"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Categories
        </RouterLink>
        {/* <Typography sx={{ color: 'text.primary' }}>Breadcrumbs</Typography> */}
      </Breadcrumbs>
    </div>
  );
}
