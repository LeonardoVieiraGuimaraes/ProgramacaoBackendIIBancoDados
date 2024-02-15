// Importa o módulo externo express
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Sou programador Node.js");
});
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
