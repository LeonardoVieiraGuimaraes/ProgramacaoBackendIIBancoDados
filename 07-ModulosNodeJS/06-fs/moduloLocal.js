const http = require("http");
const fs = require("fs");
const porta = 4123;
const host = "localhost";

const servidor = http.createServer((request, response) => {
  fs.open("index.html", "w", function (err, file) {
    if (err) {
      console.log("Erro ao criar o arquivo:", err);
      response.statusCode = 500;
      response.end();
    } else {
      console.log("Arquivo criado com sucesso!");
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/plain");
      response.end("Arquivo criado com sucesso!");
    }
  });
});

servidor.listen(porta, host, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});
