const express = require("express");
const Razorpay = require("razorpay");
const shortid = require("shortid");

const router = express.Router();
const razorpay = new Razorpay({
  key_id: "rzp_test_tr1UQTKJgtFAu9",
  key_secret: "EmOQyXNy72n1Ctri4Dwjlpom",
});

router.post("", (req, res) => {
  // app.post('/razor', async (req,res)=>{
  //     const options = {
  //         amount: 499 * 100,
  //         currency:"INR",
  //         receipt: shortid.generate(),
  //         payment_capture:1
  //       };
  //       try{
  //         const response = await razorpay.orders.create(options);
  //           console.log("The res is",response);
  //           return res.send(response);

  //       }catch(err){
  //           console.log(err)
  //           return res.send(err)
  //       }
  // })
  return res.send("Welcome to razorpay");
});
module.exports = router;
