import { TextField, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import * as React from "react";
import "@fontsource/roboto/300.css";
import { useState, useEffect } from "react";
import BoxContainer from "./BoxContainer";
import LoginBox from "./LoginBox";

let credentialsList = []; // External variable to store credentials

export const getCredentials = () => credentialsList; // Export function to get credentials
export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Log credentials whenever it updates
  useEffect(() => {
    if (credentialsList.length > 0) {
      console.log("Credentials List:", credentialsList);
    }
  }, []);

  const handleLogin = () => {
    if (username && password) {
      credentialsList.push({ username, password }); // Update the external list
      console.log("Login successful, added credentials:", {
        username,
        password,
      });
      navigate("/mock"); // Pass the credentialsList as state
    } else {
      console.log("Login failed: Username or password is empty.");
    }

    setUsername("");
    setPassword("");
  };

  return (
    <LoginBox>
      <Typography variant="h4">Log in</Typography>
      <TextField
        id="User-name"
        label="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        sx={{ width: "80%" }}
      />
      <TextField
        id="pass-word"
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{ width: "80%" }}
      />
      <Typography variant="caption" sx={{ width: "80%", textAlign: "left" }}>
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
  );
}
