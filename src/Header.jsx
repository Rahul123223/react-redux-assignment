import React from "react";
import { AppBar, Tabs, Tab, Toolbar, Link } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Header = () => {
  return (
    <>
      <AppBar style={{ color: "black" }}>
        <Toolbar>
          <ShoppingCartIcon></ShoppingCartIcon>

          <Link to="/" style={{ color: "red" }}>
            Home
          </Link>
          <Link to="/about" style={{ color: "red" }}>
            About
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
