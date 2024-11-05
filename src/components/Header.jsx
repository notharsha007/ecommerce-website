import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Menu,
  MenuItem,
  Button,
  TextField,
  Avatar,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch } from "react-redux";
import { setSearchText } from "../redux/slices/searchSlice";

export default function GeneralHeader() {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    console.log("Sign out clicked");
    handleClose();
  };

  const handleSearchChange = (event) => {
    dispatch(setSearchText(event.target.value));
  };

  return (
    <AppBar position="sticky">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{ height: 54 }}
          component="img"
          alt="Site Logo"
          src="/assets/sitelogo.png"
        />
        <Box sx={{ display: "flex", alignItems: "center", mx: 2 }}>
          <Box>
            <TextField
              variant="outlined"
              placeholder="Search..."
              size="small"
              sx={{ width: 150 }}
              onChange={handleSearchChange}
            />
          </Box>
          <Button sx={{ color: "inherit", ml: 1 }}>
            <ShoppingCartIcon />
          </Button>
          <Avatar onClick={handleAvatarClick} sx={{ cursor: "pointer", ml: 1 }}>
            H
          </Avatar>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
