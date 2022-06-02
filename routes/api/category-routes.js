const { category, product } = require("../../models");
const router = require("express").Router();

router.post("/", function (req, res) {
  res.send("POST request to homepage");
});
