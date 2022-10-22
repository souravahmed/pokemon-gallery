import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { userLogoutRequest } from "../store";

export const NavBar = () => {
  const dispatch = useDispatch();
  const loggedUser = useSelector((store) => store.user.loggedUser);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {loggedUser.email}
          </Typography>
          <Button color="inherit" onClick={() => dispatch(userLogoutRequest())}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
