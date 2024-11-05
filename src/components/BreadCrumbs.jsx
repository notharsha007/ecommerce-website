import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import { Link as RouterLink, useLocation } from "react-router-dom";

export default function BasicBreadcrumbs() {
  const location = useLocation();

  // Split the current path into parts (e.g., "/categories/page1" -> ["", "categories", "page1"])
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        {/* Link to "Categories" */}
        {/* <RouterLink
          to="/categories"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Categories
        </RouterLink> */}

        {/* Dynamically render breadcrumbs based on the current path */}
        {pathnames.map((value, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return isLast ? (
            // Show the last breadcrumb as plain text
            <Typography key={value} color="text.primary">
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </Typography>
          ) : (
            // Create a link for each intermediate breadcrumb
            <RouterLink
              key={value}
              to={routeTo}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </RouterLink>
          );
        })}
      </Breadcrumbs>
    </div>
  );
}
