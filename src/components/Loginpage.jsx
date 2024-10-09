import { TextField, Button, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import * as React from "react";
import "@fontsource/roboto/300.css";
import { useState, useEffect } from "react";
import BoxContainer from "./BoxContainer";
import LoginBox from "./LoginBox";

let credentialsList = []; // External variable to store credentials

export const getCredentials = () => credentialsList; // Export function to get credentials

const MIN_USERNAME_LENGTH = 3; // Minimum length for username
const MIN_PASSWORD_LENGTH = 6; // Minimum length for password

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for validating email format

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to store error messages

  useEffect(() => {
    if (credentialsList.length > 0) {
      console.log("Credentials List:", credentialsList);
    }
  }, []);

  const handleLogin = () => {
    setError(""); // Reset error message on each login attempt

    // Basic validation
    if (!username || !password) {
      setError("Username and password cannot be empty.");
      // setTimeout(() => setError(""), 3000);
      return;
    }

    // Check minimum length
    if (username.length < MIN_USERNAME_LENGTH) {
      setError(
        `Username must be at least ${MIN_USERNAME_LENGTH} characters long.`
      );
      return;
    }

    if (password.length < MIN_PASSWORD_LENGTH) {
      setError(
        `Password must be at least ${MIN_PASSWORD_LENGTH} characters long.`
      );
      return;
    }

    // Validate email format
    if (!emailRegex.test(username)) {
      setError("Username must be a valid email address.");
      return;
    }

    credentialsList.push({ username, password }); // Update the external list
    console.log("Login successful, added credentials:", {
      username,
      password,
    });

    navigate("/categories"); // Pass the credentialsList as state

    // Clear the input fields
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <LoginBox>
        <Typography variant="h4">Log in</Typography>
        <Box
          sx={{
            width: 350, // width of the box
            height: 50, // height of the box
            backgroundColor: "primary.main", // background color from theme
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 1, // rounded corners
            // boxShadow: 2, // shadow effect
            bgcolor: "white",
          }}
        >
          <Typography variant="caption">
            {error && (
              <Typography
                variant="caption"
                color="error"
                sx={{ width: "80%", textAlign: "center", mb: 2, }}
              >
                {error}
              </Typography>
            )}
          </Typography>
        </Box>
        <TextField
          id="User-name"
          label="Username (Email)"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ width: "50%", mb: 2 }}
        />
        <TextField
          id="pass-word"
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ width: "50%", mb: 2 }}
        />
        <Typography
          variant="caption"
          sx={{ width: "80%", textAlign: "center" }}
        >
          <Link>Forgot Password?</Link>
        </Typography>
        <Button variant="contained" onClick={handleLogin}>
          Login
        </Button>
        <Typography variant="caption">
          Don't have an existing account? <Link>Click here</Link> to create an
          account.
        </Typography>
      </LoginBox>
    </>
  );
}
