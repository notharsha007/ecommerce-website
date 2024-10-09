import { Outlet } from "react-router-dom";
import { Typography } from "@mui/material";
// import Navbar from "../components/AlternateNavigation";
// import LoginPage from "../components/Box";
// import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  return (
    <div style={{ 
      height: "100vh",           // Ensure it takes up the full viewport height
      overflowX: "hidden",       // Prevent horizontal scrolling
      overflowY: "hidden",}}>       
        <Outlet />
    </div>
  );
}

export default RootLayout;
