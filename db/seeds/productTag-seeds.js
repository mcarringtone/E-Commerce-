const { ProductTag } = require("./models");

const producttagData = [
  {
    product_id: "Guitar",
  },
  {
    product_id: "Bass",
  },
  {
    product_id: "AltoSax",
  },
  {
    product_id: "MPC",
  },
];

const seedProductTags = () => ProductTag.bulkcreate(producttagData);

module.exports = seedProductTags;
