const express = require("express");
const Razorpay = require("razorpay");
const shortid = require("shortid");

const router = express.Router();
const razorpay = new Razorpay({
  key_id: "rzp_test_tr1UQTKJgtFAu9",
  key_secret: "EmOQyXNy72n1Ctri4Dwjlpom",
});

router.post("", (req, res) => {
  return res.send("Welcome to razorpay");
});
module.exports = router;
