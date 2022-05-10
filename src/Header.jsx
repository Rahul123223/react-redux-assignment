import React from "react";
import { AppBar, Tabs,Tab, Toolbar } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Header = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <ShoppingCartIcon></ShoppingCartIcon>
          <Tabs  textColor="inherit">
              <Tab label="Home"></Tab>
              <Tab label="About"></Tab>
              <Tab label="Product"></Tab>
              <Tab label="Login"></Tab>
          </Tabs>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
