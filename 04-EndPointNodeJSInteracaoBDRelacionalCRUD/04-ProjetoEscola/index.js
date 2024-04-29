const http = require("http");

// Cria um objeto de servidor:
http
  .createServer((request, response) => {
    response.writeHead(200, {
      "Content-Type": "text/plain",
    });
    response.write("Olá mundo! Teste funcionando.....");
    response.end(); // Encerra a resposta
  })
  .listen(1010); // O objeto de servidor escuta na porta 8089
