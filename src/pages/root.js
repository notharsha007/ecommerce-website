import { Outlet } from "react-router-dom";
import { Typography } from "@mui/material";
// import Navbar from "../components/AlternateNavigation";
// import LoginPage from "../components/Box";
// import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  return (
    <>
      <header>
        {/* Uncomment the navigation if needed */}
        {/* <MainNavigation /> */}
      </header>
      <main>
        <Typography variant="h2"></Typography>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
