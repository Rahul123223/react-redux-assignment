const express = require("express");
const app = express();
const cors = require("cors");
let port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const connect = require("./config/config");
const razorController = require("./controller/razorpay.controller");
const productController = require("./controller/product.controller");
const cartController = require("./controller/cart.controller");

app.use("/razor", razorController);
app.use("/products", productController);
app.use("/cart", cartController);

app.get("/", (req, res) => {
  return res.send("Welcome to the backend");
});

app.listen(port, async () => {
  await connect();
  console.log(`Listening on port ${port}`);
});
