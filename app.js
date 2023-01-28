const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();
////////////////////////////////////////////////

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(express.static(`${__dirname}/public`));
// app.use(express.json());
/////////////////////////////////////////////////////
let todos = [
  "You want a piece of me, boy?",
  "This better be good...",
  "Who wants some?",
  "Armed and ready!",
  "Go, go, go!",
  "Gangway! Coming through!",
];
/////////////////////////////////////////////////////
app.get("/", (req, res) => {
  res.render("index", { todos: todos });
});
app.post("/", (req, res) => {
  console.log(req.body);
  todos = [req.body.todo, ...todos];
  res.render("index", { todos: todos });
  //   res.json({ todos: todos });
});
/////////////////////////////////////////////////////
app.listen(port, (req, res) => {
  console.log(`Jacked Up And Good To Go on port: ${port}`);
});
