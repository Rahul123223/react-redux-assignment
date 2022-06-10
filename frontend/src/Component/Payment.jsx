import "./css/payment.css";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import React from "react";

export const Payment = () => {
  const state = useSelector((state) => state.cart);
  const { total, item } = useSelector((state) => state.cart);

  const [name, setName] = useState("");
  const [card, setCard] = useState("");
  const [cvv, setCvv] = useState("");

  const notiFY = () => {
    // formRef.current.reportValidity();
    if (formRef.current.reportValidity() == true) {
      toast.success("Payment Successful ! 😍 Thanks for shopping 💜", navigate("/"));
    } else {
      toast.error("something went wrong..😕", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
  };
  <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />;

  const navigate = useNavigate();
  const formRef = React.useRef();

  return (
    <>
      <div>
        <div className="payment">
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
          </div>

          <form ref={formRef}>
            <Typography variant="h6" gutterBottom>
              Payment method
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id="cardName"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  label="Name on card"
                  fullWidth
                  autoComplete="cc-name"
                  variant="standard"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  id="cardNumber"
                  label="Card number"
                  onChange={(e) => setCard(e.target.value)}
                  value={card}
                  type="number"
                  fullWidth
                  autoComplete="cc-number"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id="expDate"
                  onChange={(e) => setCvv(e.target.value)}
                  value={cvv}
                  label="Expiry date"
                  fullWidth
                  type="number"
                  autoComplete="cc-exp"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id="cvv"
                  type="number"
                  label="CVV"
                  helperText="Last three digits on signature strip"
                  fullWidth
                  autoComplete="cc-csc"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="secondary"
                      name="saveCard"
                      value="yes"
                      required
                    />
                  }
                  label="Remember credit card details for next time"
                />
              </Grid>
              <Button
                variant="contained"
                onClick={notiFY}
                sx={{ mt: 4, ml: 34 }}
              >
                Buy Now
              </Button>
              <ToastContainer />
            </Grid>
          </form>
        </div>
      </div>
    </>
  );
};
