const express = require("express");
const mongoose = require("mongoose");
const livrosRotas = require("./router/livroRotas");

const PORT = process.env.PORT || 4000;

const app = express();

mongoose
  .connect(process.env.MOMGO_URL || "mongodb://localhost:27017/Biblioteca")

  .then(() => console.log("Conexão efetuada com sucesso"))

  .catch((err) => console.log(`Erro ao conectar no banco de dados: ${err}`));

app.use(express.json());
app.use("/", livrosRotas);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
