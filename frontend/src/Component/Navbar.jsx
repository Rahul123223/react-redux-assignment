// import "./css/navbar.css";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import Badge from "@material-ui/core/Badge";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import { useNavigate } from "react-router-dom";

// export const Navbar = () => {
//   const navigate = useNavigate();
//   const { item } = useSelector((state) => state.cart);

//   return (
//     <>
//       <div id="navbar">
//         <div className="navbarLink">
//           <Link to="/" className="link2">
//             Home
//           </Link>
//         </div>
//         <div>
//           <input type="text" placeholder="Serch Bar" />
//         </div>
//         <div className="navbarLink">
//           <Link to="/login" className="link2">
//             Login
//           </Link>
//         </div>
//         <div className="navbarLink">
//           <Link to="/register" className="link2">
//             Register
//           </Link>
//         </div>
//         <div>
//           <Badge color="secondary" style={{ cursor: "pointer" }}>
//             <ShoppingCartIcon
//               onClick={() => (true ? navigate("/cart") : "Not true")}
//             />
//             : {item}
//           </Badge>
//         </div>
//       </div>
//     </>
//   );
// };

// import "./css/navbar.css";
// import { Link } from "react-router-dom";

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from "react-redux";

// import AccountCircle from "@mui/icons-material/AccountCircle";
// import MailIcon from "@mui/icons-material/Mail";
// import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import HomeIcon from "@mui/icons-material/Home";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useNavigate } from "react-router-dom";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import { Link } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
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
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // const navigate = useNavigate();
    const { item } = useSelector((state) => state.cart);

  const navigate = useNavigate();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge color="secondary" style={{ cursor: "pointer" }}>
            <HomeIcon onClick={() => (true ? navigate("/") : "Not true")} />
          </Badge>
        </IconButton>
        <Link to="/">
          <p>Home</p>
        </Link>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge color="secondary" style={{ cursor: "pointer" }}>
            <AssignmentIndOutlinedIcon
              onClick={() => (true ? navigate("/register") : "Not true")}
            />
          </Badge>
        </IconButton>
        <Link to="/register">
          <p>Register</p>
        </Link>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge color="secondary" style={{ cursor: "pointer" }}>
            <AssignmentIndOutlinedIcon
              onClick={() => (true ? navigate("/login") : "Not true")}
            />
          </Badge>
        </IconButton>
        <Link to="/login">
          <p>Login</p>
        </Link>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge color="secondary" style={{ cursor: "pointer" }}>
            <ShoppingCartIcon
              onClick={() => (true ? navigate("/cart") : "Not true")}
            />
            : {item}
          </Badge>
        </IconButton>
        <Link to="/cart">
        </Link>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            RG Ecommerce
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Badge color="secondary" style={{ cursor: "pointer" }}>
              <Link to="/">
                <HomeIcon onClick={() => (true ? navigate("/") : "Not true")} />
              </Link>
              <Link to="/">Home</Link>
            </Badge>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Badge color="secondary" style={{ cursor: "pointer" }}>
              <Link to="/register">
                <AssignmentIndOutlinedIcon
                  onClick={() => (true ? navigate("/register") : "Not true")}
                />
              </Link>
              <Link to="/register">Register</Link>
            </Badge>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Badge color="secondary" style={{ cursor: "pointer" }}>
              <Link to="/login">
                <AssignmentIndOutlinedIcon
                  onClick={() => (true ? navigate("/login") : "Not true")}
                />
              </Link>
              <Link to="/login">Login</Link>
            </Badge>
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link to="/cart">
            <Badge color="secondary" style={{ cursor: "pointer" }}>
            <ShoppingCartIcon
              onClick={() => (true ? navigate("/cart") : "Not true")}
            />
            : {item}
          </Badge>
            </Link>
            <Link to="/cart"></Link>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};
