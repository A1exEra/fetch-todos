const Data = require("./data");

const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();
/////////////////////////////////////////////
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/public`));
//////////////////////////////////////////////
app.get("/", (req, res) => {
  res.render("index", { Data });
});
///////////////////////////////////////////////
app.listen(port, (req, res) => {
  console.warn(`Jacked up and good to go on port: ${port}`);
});
