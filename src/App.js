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
import { AppBar, Toolbar, Typography, Box, Container } from '@mui/material';
import GeneralFooter from "./components/Footer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LoginPage /> },
      { path: "/home", element: <HomePage /> },
      { path: "/mock", element: <MockedPage /> },
    ],
  },
]);

function App() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <GeneralHeader />
      <Container sx={{ flexGrow: 1, padding: 2 }}>
        <body>
          <RouterProvider router={router} />
        </body>
      </Container>
      <GeneralFooter />
    </Box>
  );
}

export default App;
