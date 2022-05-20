const express = require("express");
const product = require("../model/product.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    console.log(req.query);
    const size = 6,
      page = req.query.page || 1,
      order = req.query.order,
      cat = req.query.category || 0;
    console.log(cat);
    if (cat == 0) {
      const prod = await product
        .find()
        .skip((page - 1) * size)
        .limit(size)
        .sort({ price: order })
        .lean()
        .exec();
      return res.send(prod);
    } else {
      const prod = await product
        .find({ category: cat })
        .skip((page - 1) * size)
        .limit(size)
        .sort({ price: order })
        .lean()
        .exec();
      return res.send(prod);
    }
  } catch (e) {
    return res.send({ error: "Something went wrong" });
  }
});
router.get("/:_id", async (req, res) => {
  console.log(req.params);
  const prod = await product.findById(req.params._id);
  return res.send(prod);
});

module.exports = router;
