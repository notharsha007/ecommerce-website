import { Outlet } from "react-router-dom";
import { Typography } from "@mui/material";
// import Navbar from "../components/AlternateNavigation";
// import LoginPage from "../components/Box";
// import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  return (
    <>
        <Typography variant="h2"></Typography>
        <Outlet />
    </>
  );
}

export default RootLayout;
