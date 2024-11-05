import { Outlet } from "react-router-dom";
import { Typography } from "@mui/material";
// import Navbar from "../components/AlternateNavigation";
// import LoginPage from "../components/Box";
// import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  return (
    <div style={{ 
                 // Ensure it takes up the full viewport height
      }}>       
        <Outlet />
    </div>
  );
}

export default RootLayout;
