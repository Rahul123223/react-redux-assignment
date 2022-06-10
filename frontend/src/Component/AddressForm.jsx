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

  // const initialValues = { address: "", paddress: "", mobile: "",  city:"" };
  // const [formValues, setFormValues] = useState(initialValues);
  // const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues({ ...formValues, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setFormErrors(validate(formValues));
  //   setIsSubmit(true);
  // };

  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(formValues);
  //   }
  // }, [formErrors]);
  // const validate = (values) => {
  //   const errors = {};
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  //   if (!values.address) {
  //     errors.address = "Address is required!";
  //   }
  //   if (!values.paddress) {
  //     errors.paddress = "permanent address is required!";
  //   } 
  //   if (!values.mobile) {
  //     errors.mobile = "Mobile is required";
  //   } 
  //   if (!values.city) {
  //     errors.city = "city is required";
  //   } 
  //   return errors;
  // };

  return (
    <>
      {/* <form onSubmit={handleSubmit}>
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
             <p>{formErrors.city}</p>  */}
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
          {/* </Stack>
        </div> */}
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
     </div>
      {/* </div>
      </form> */}

    </>
  );
};
