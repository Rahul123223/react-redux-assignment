import { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";
import "./css/otp.css";
import { useNavigate } from "react-router-dom";

import * as React from "react";
import Alert from "@mui/material/Alert";

export const Otp = () => {
  const [opt, setOtp] = useState("");
  const navigate = useNavigate();
  return (
    <div id="otp">
      <h2>Verify OTP</h2>
      <p>Enter OTP that has sent to your mobile</p>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <TextField
          placeholder="cvv"
          variant="outlined"
          color="secondary"
          onChange={(e) => setOtp(e.target.value)}
        />
        <Button
          variant="contained"
          color="secondary"
          sx={{
            margin: 2,
          }}
          onClick={() => {
            if (opt === "1234") {
              alert("Payment Successful");
              navigate("/");
            } else {
              alert("Something went wrong please try again...");
            }
          }}
        >
          Submit
        </Button>
      </Stack>
    </div>
  );
};
