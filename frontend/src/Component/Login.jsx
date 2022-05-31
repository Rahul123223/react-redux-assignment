import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./css/login.css";
import {
  login_loading,
  login_success,
  login_failure,
} from "../Redux/Login/action";
import { useNavigate } from "react-router-dom";

// export const Login = () => {
//   const [username, setUser] = useState("");
//   const [password, setPass] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSubmit = () => {
//     console.log(username, password);
//     const useDetails = {
//       username,
//       password,
//     };
//     dispatch(login_loading());
//     fetch(`https://rg-ccommerce-app-heroku.herokuapp.com/login`, {
//       method: "POST",
//       body: JSON.stringify(useDetails),
//       headers: {
//         "Content-type": "Application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         console.log("The res is", res);
//         dispatch(login_success(res.token));
//         navigate("/");
//       })
//       .catch((err) => dispatch(login_failure()));
//   };
//   return (
//     <>
//       <div className="login">
//         <h1>Login Here...</h1>
//         <input
//           type="text"
//           placeholder="Enter the useraname..."
//           onChange={(e) => setUser(e.target.value)}
//           value={username}
//           className="ip_tags"
//         />{" "}
//         <br />
//         <input
//           type="text"
//           placeholder="Enter the password"
//           onChange={(e) => setPass(e.target.value)}
//           value={password}
//           className="ip_tags"
//         />{" "}
//         <br />
//         <button className="ip_tags" onClick={handleSubmit}>
//           Submit
//         </button>
//       </div>
//     </>
//   );
// };

import * as React from 'react';

// import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const theme = createTheme();

export const Login=()=> {
  const [email, setUser] = useState("");
  const [password, setPass] = useState("");
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.login);
  if (isAuth) {
    navigate("/");
  }

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const useDetails = {
      email,
      password,
    };
  
  dispatch(login_loading());
    fetch(`https://rg-ccommerce-app-heroku.herokuapp.com/login`, {
      method: "POST",
      body: JSON.stringify(useDetails),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(login_success({ token: res.token }));
        console.log(res.token);
      })
      .catch((err) => dispatch(login_failure()));
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={(e) => setUser(e.target.value)}
                value={email}
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                onChange={(e) => setPass(e.target.value)}
                value={password}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
          }