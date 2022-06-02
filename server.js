const sequelize = require("./config/connection");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}.`);
  });
});
