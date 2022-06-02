const express = require("express");
const router = express.Router();
const cart = require("../models/cart.model");

router.get("", async (req, res) => {
  const Cart = await cart.find().lean().exec();
  return res.send(Cart);
});
router.post("", async (req, res) => {
  const Cart = await cart.create(req.body);

  return res.send(Cart);
});
router.delete("/:id", async (req, res) => {
  console.log("In the delete", req.params);
  const Cart = await cart.deleteOne({ _id: req.params.id });
  return res.send("Welcome to the delete");
});

module.exports = router;
