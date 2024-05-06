const express = require("express");
const bodyParser = require("body-parser");
const alunoController = require("./controllers/alunoController");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", alunoController.list);
app.get("/add", alunoController.addForm);
app.post("/add", alunoController.create);
app.get("/edit/:id", alunoController.editForm);
app.post("/edit/:id", alunoController.update);
app.get("/delete/:id", alunoController.delete);

app.listen(3000, function () {
  console.log("App listening on http://localhost:3000");
});
