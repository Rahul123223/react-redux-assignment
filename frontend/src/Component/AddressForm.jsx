import { Box } from "@material-ui/core";
import Stack from "@mui/material/Stack";
import "./css/checkpage.css";
import { MenuItem } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { TextField } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const AddressForm = () => {
  const { total, item } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const initialValues = { address: "", paddress: "", mobile: "",  city:"" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.address) {
      errors.address = "Address is required!";
    }
    if (!values.paddress) {
      errors.paddress = "permanent address is required!";
    } 
    if (!values.mobile) {
      errors.mobile = "Mobile is required";
    } 
    if (!values.city) {
      errors.city = "city is required";
    } 
    return errors;
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
      <div id="check_container">
        <div>
          <h2>Shiping information</h2>
          <Stack
            sx={{
              width: "42ch",
              margin: "auto",
            }}
            spacing={3}
          >
            <TextField
              type="text"
              name="address"
              placeholder="Your Address"
              value={formValues.address}
              onChange={handleChange}
            />
             <p>{formErrors.address}</p>
            <TextField
               type="text"
               name="paddress"
               placeholder="Permanent Address"
               value={formValues.paddress}
               onChange={handleChange}
            />
            <p>{formErrors.paddress}</p>
            <TextField
              type="number"
              name="mobile"
              placeholder="Mobile Number"
              value={formValues.mobile}
              onChange={handleChange}
            />
            <p>{formErrors.mobile}</p> 
            <TextField
            type="text"
            name="city"
              placeholder="Enter city"
              variant="outlined"
              color="secondary"
              value={formValues.city}
              onChange={handleChange}
            />
             <p>{formErrors.city}</p> 
            {/* <Select
              label="State"
              id="state"
              placeholder="State"
              required="true"
            >
              <MenuItem value={"Maharashtra"}>Maharashtra</MenuItem>
              <MenuItem value={"Gujarat"}>Gujarat</MenuItem>
              <MenuItem value={"MP"}>MP</MenuItem>
              <MenuItem value={"Andhra"}>Andhra Pradesh</MenuItem>
              <MenuItem value={"jharkhand"}>Jharkhand</MenuItem>
            </Select> */}
      {/* <h2>Contact Infomation</h2>
            <TextField
              id="outlined-basic"
              color="secondary"
              placeholder="Email"
              required
            />
            <TextField
              placeholder="Phone"
              variant="outlined"
              color="secondary"
              required
            /> */}
          </Stack>
        </div>
        <div className="total_pay">
          <h3>Your order</h3>
          <hr />
          <div>
            <div>
              <h4>Product</h4>
            </div>
            <div>
              <h4>SubTotal</h4>
            </div>
          </div>
          <hr />
          <div>
            <div>
              <h4>{item}</h4>
            </div>
            <div>
              <h4>{total}</h4>
            </div>
          </div>
          <hr style={{ border: "ridge" }} />
          <button className="fluid ui button blue" onClick={()=>navigate("/payment")}>Submit</button>
      {/* <Button
            variant="contained"
            color="secondary" 
            sx={{
              margin: 3,
            }}
            onClick={() => navigate("/payment")}
          >
            Place Order
          </Button> */}
     </div>
      </div>
      </form>

    </>
  );
};
// // import * as React from 'react';
// // import CssBaseline from '@mui/material/CssBaseline';
// // import AppBar from '@mui/material/AppBar';
// // import Box from '@mui/material/Box';
// // import Container from '@mui/material/Container';
// // import Toolbar from '@mui/material/Toolbar';
// // import Paper from '@mui/material/Paper';
// // import Stepper from '@mui/material/Stepper';
// // import Step from '@mui/material/Step';
// // import StepLabel from '@mui/material/StepLabel';
// // import Button from '@mui/material/Button';
// // import Link from '@mui/material/Link';
// // import Typography from '@mui/material/Typography';
// // import { createTheme, ThemeProvider } from '@mui/material/styles';
// // // import AddressForm from './AddressForm';
// // // import PaymentForm from './PaymentForm';
// // // import Review from './Review';

// // function Copyright() {
// //   return (
// //     <Typography variant="body2" color="text.secondary" align="center">
// //       {'Copyright © '}
// //       <Link color="inherit" href="https://mui.com/">
// //         Your Website
// //       </Link>{' '}
// //       {new Date().getFullYear()}
// //       {'.'}
// //     </Typography>
// //   );
// // }

// // const steps = ['Shipping address', 'Payment details', 'Review your order'];

// // function getStepContent(step) {
// //   switch (step) {
// //     case 0:
// //       // return <AddressForm />;
// //     case 1:
// //       // return <PaymentForm />;/
// //     case 2:
// //       // return <Review />;
// //     default:
// //       throw new Error('Unknown step');
// //   }
// // }

// // const theme = createTheme();

// // export  const  Payment=()=> {
// //   const [activeStep, setActiveStep] = React.useState(0);

// //   const handleNext = () => {
// //     setActiveStep(activeStep + 1);
// //   };

// //   const handleBack = () => {
// //     setActiveStep(activeStep - 1);
// //   };

// //   return (
// //     <ThemeProvider theme={theme}>
// //       <CssBaseline />
// //       <AppBar
// //         position="absolute"
// //         color="default"
// //         elevation={0}
// //         sx={{
// //           position: 'relative',
// //           borderBottom: (t) => `1px solid ${t.palette.divider}`,
// //         }}
// //       >
// //         <Toolbar>
// //           <Typography variant="h6" color="inherit" noWrap>
// //             Company name
// //           </Typography>
// //         </Toolbar>
// //       </AppBar>
// //       <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
// //         <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
// //           <Typography component="h1" variant="h4" align="center">
// //             Checkout
// //           </Typography>
// //           <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
// //             {steps.map((label) => (
// //               <Step key={label}>
// //                 <StepLabel>{label}</StepLabel>
// //               </Step>
// //             ))}
// //           </Stepper>
// //           <React.Fragment>
// //             {activeStep === steps.length ? (
// //               <React.Fragment>
// //                 <Typography variant="h5" gutterBottom>
// //                   Thank you for your order.
// //                 </Typography>
// //                 <Typography variant="subtitle1">
// //                   Your order number is #2001539. We have emailed your order
// //                   confirmation, and will send you an update when your order has
// //                   shipped.
// //                 </Typography>
// //               </React.Fragment>
// //             ) : (
// //               <React.Fragment>
// //                 {getStepContent(activeStep)}
// //                 <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
// //                   {activeStep !== 0 && (
// //                     <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
// //                       Back
// //                     </Button>
// //                   )}

// //                   <Button
// //                     variant="contained"
// //                     onClick={handleNext}
// //                     sx={{ mt: 3, ml: 1 }}
// //                   >
// //                     {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
// //                   </Button>
// //                 </Box>
// //               </React.Fragment>
// //             )}
// //           </React.Fragment>
// //         </Paper>
// //         <Copyright />
// //       </Container>
// //     </ThemeProvider>
// //   );
// // }
