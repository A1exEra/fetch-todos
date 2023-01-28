const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();
////////////////////////////////////////////////

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
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
app.post("/addTodo", (req, res) => {
  // console.log(req.body);
  // console.log(req.body.todo);
  const todo = req.body.todo;
  if (!todo || todo.length === 0) {
    res
      .status(500)
      .send({ msg: "Error, todo must have lenght greater than 0" });
    return;
  }
  todos = [todo, ...todos];
  console.log(todos);
  // res.render("index", { todos });
  // res.json({ todos });
  res.status(200).send({ todo });
});
/////////////////////////////////////////////////////
app.listen(port, (req, res) => {
  console.log(`Jacked Up And Good To Go on port: ${port}`);
});
