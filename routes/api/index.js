const router = require("express").Router();
const { TimeoutError } = require("sequelize/types");
const categoryroutes = require("./category-routes");
const productroutes = require("./product-routes");
const tagroutes = require("./tag-routes");

router.use("/cateogories", categoryroutes);
router.use("/products", productroutes);
router.use("/tags", tagroutes);

module.exports = router;
