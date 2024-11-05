import "./App.css";
// import LoginPage from "./components/Box.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home.js";
import RootLayout from "./pages/root.js";
import ErrorPage from "./pages/error.jsx";
import MockedAxiosComponent from "./components/MockedAxios.jsx";
import LoginPage from "./components/Loginpage.jsx";
import MockedPage from "./pages/categories.jsx";
import GeneralHeader from "./components/Header.jsx";
import { AppBar, Toolbar, Typography, Box, Container } from "@mui/material";
import GeneralFooter from "./components/GeneralFooter.jsx";
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
import CategoriesPage from "./pages/categories.jsx";
import SmartphonesPage from "./pages/ProductsPage.jsx";
import CategoryTemplate from "./pages/ProductsPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import CardHolderForModels from "./components/Cardholderformodels.jsx";
import ComplexLayout from "./pages/SamsungGalaxyS21Page.jsx";
import ProductDetailsPage from "./pages/SamsungGalaxyS21Page.jsx";
import CounterComponent from "./pages/DummyFolder/CounterComponent.jsx";
import ProductCheckoutPage from "./pages/DummyFolder/dummy1.js";
import Categories from "./pages/DummyFolder/dummy2.js";
import DownloadPdf from "./pages/DummyFolder/dummy4.js";
import MarkdownDisplay from "./pages/DummyFolder/dummy5.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LoginPage /> },
      { path: "/home", element: <HomePage /> },
      { path: "/dummy", element: <CounterComponent /> },
      { path: "/dummy1", element: <ProductCheckoutPage /> },
      { path: "/dummy2", element: <Categories /> },
      { path: "/dummy4", element: <DownloadPdf /> },
      { path: "/dummy5", element: <MarkdownDisplay /> },
      { path: "/categories", element: <CategoriesPage /> },
      {
        path: "/categories/Smartphone",
        element: <ProductsPage category="smartphone" />,
      },
      {
        path: "/categories/Smartphone/SamsungGalaxyS21",
        element: <ProductDetailsPage />,
      },
      {
        path: "/categories/Smartphones",
        element: <ProductsPage category="drone" />,
      },
      {
        path: "/categories/Laptop",
        element: <ProductsPage category="laptop" />,
      },
      {
        path: "/categories/Headphones",
        element: <ProductsPage category="headphones" />,
      },
      {
        path: "/categories/Smartwatch",
        element: <ProductsPage category="smartwatch" />,
      },
      {
        path: "/categories/Tablet",
        element: <ProductsPage category="tablet" />,
      },
      {
        path: "/categories/Gaming-Console",
        element: <ProductsPage category="gaming-console" />,
      },
      {
        path: "/categories/Camera",
        element: <ProductsPage category="camera" />,
      },
      {
        path: "/categories/Bluetooth-Speaker",
        element: <ProductsPage category="bluetooth-speaker" />,
      },
      { path: "/categories/Drone", element: <ProductsPage category="drone" /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
