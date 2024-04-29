const express = require("express");
const mongoose = require("mongoose");
const PORT = 4123;

const sistema = express();
sistema.use(express.json());

mongoose
  .connect(
    "mongodb+srv://leonardovieiraxy:pP9F7n1aIKX20kU4@cluster0.f2q6e6y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((erro) => console.log("Erro ao conectar ao MongoDB: " + erro));

sistema.listen(PORT, () => {
  console.log("O servidor está rodando!!!")
});
