import React, { useState } from "react";
import { AppBar, Toolbar, Box, Menu, MenuItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from '@mui/material/InputBase';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  width: "auto",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function GeneralHeader({ setSearchTerm }) {
  const [anchorEl, setAnchorEl] = useState(null); // State for controlling the dropdown menu
  const navigate = useNavigate(); // Initialize the navigate function

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget); // Open menu on avatar click
  };

  const handleClose = () => {
    setAnchorEl(null); // Close menu
  };

  const handleSignOut = () => {
    // Handle sign-out functionality here
    console.log("Sign out clicked");
    handleClose(); // Close menu after sign out
    navigate("/"); // Redirect to the sign-out page (replace with your route)
  };

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{ height: 54 }}
          component="img"
          alt="Site Logo"
          src="/assets/sitelogo.png"
        />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Search>
          <Avatar onClick={handleAvatarClick} sx={{ cursor: 'pointer' }}>
            H
          </Avatar>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
