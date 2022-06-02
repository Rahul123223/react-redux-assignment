import "./css/payment.css";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";

export const Payment = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="payment">
          <img
            src="https://www.pngplay.com/wp-content/uploads/8/Payment-Method-PNG-HD-Quality.png"
            alt=""
            className="payment_images"
          />
          <Typography variant="h6" gutterBottom>
            Payment method
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="cardName"
                label="Name on card"
                fullWidth
                autoComplete="cc-name"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="cardNumber"
                label="Card number"
                fullWidth
                autoComplete="cc-number"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="expDate"
                label="Expiry date"
                fullWidth
                autoComplete="cc-exp"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="cvv"
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
                  <Checkbox color="secondary" name="saveCard" value="yes" />
                }
                label="Remember credit card details for next time"
              />
            </Grid>
            <Button
                    variant="contained"
                    onClick={()=>navigate("/otp")}
                    sx={{ mt: 3, ml: 1 }}
                  >
                  Buy Now</Button>
          </Grid>
        </div>
      </div>
    </>
  );
};
