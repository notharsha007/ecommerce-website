import "./App.css";
// import LoginPage from "./components/Box.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home.js";
import RootLayout from "./pages/root.js";
import ErrorPage from "./pages/error.jsx";
import MockedAxiosComponent from "./components/MockedAxios.jsx";
import LoginPage from "./components/Loginpage.jsx";
import MockedPage from "./pages/mock.jsx";
import GeneralHeader from "./components/Header.jsx";
import { AppBar, Toolbar, Typography, Box, Container } from "@mui/material";
import GeneralFooter from "./components/Footer.jsx";
import ProductIdpage from "./productpages/SmartphonePage.jsx";
import SmartphonePage from "./productpages/SmartphonePage.jsx";
import LaptopPage from "./productpages/LaptopPage.jsx";
import HeadphonesPage from "./productpages/HeadphonesPage.jsx";
import SmartwatchPage from "./productpages/SmartwatchPage.jsx";
import TabletPage from "./productpages/TabletPage.jsx";
import GamingConsolePage from "./productpages/Gaming-ConsolePage.jsx";
import CameraPage from "./productpages/CameraPage.jsx";
import Bluetooth_Speaker from "./productpages/Bluetooth-SpeakerPage.jsx";
import DronePage from "./productpages/DronePage.jsx";
import BackButton from "./components/BackButton.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LoginPage /> },
      { path: "/home", element: <HomePage /> },
      { path: "/mock", element: <MockedPage /> },
      { path: "/mock/Smartphone", element: <SmartphonePage /> },
      { path: "/mock/Laptop", element: <LaptopPage /> },
      { path: "/mock/Headphones", element: <HeadphonesPage /> },
      { path: "/mock/Smartwatch", element: <SmartwatchPage /> },
      { path: "/mock/Tablet", element: <TabletPage /> },
      { path: "/mock/Gaming-Console", element: <GamingConsolePage /> },
      { path: "/mock/Camera", element: <CameraPage /> },
      { path: "/mock/Bluetooth-Speaker", element: <Bluetooth_Speaker /> },
      { path: "/mock/Drone", element: <DronePage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <body>
          <RouterProvider router={router} />
        </body>
      </Box>
      <GeneralFooter />
    </>
  );
}

export default App;
