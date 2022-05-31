const express = require("express");
const app = express();
const connect = require("./config/db");


let port = process.env.PORT || 5000;

const cors = require("cors");


app.use(cors());
app.use(express.json());
const productController = require("./controllers/product.controller");
const cartController = require("./controllers/cart.controller");
const { login, register } = require("./controllers/auth.controller");


app.post("/login", login);
app.post("/register", register);
app.use("/products", productController);
app.use("/cart", cartController);

app.get("/", (req, res) => {
  return res.send("Welcome to the backend");
});

app.listen(port, async () => {
  await connect();
  console.log(`Listening on port ${port}`);
});
