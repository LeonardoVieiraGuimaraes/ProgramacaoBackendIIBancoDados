// Importa o módulo HTTP do Node.js
const http = require("http");

// Cria um servidor HTTP
http
  .createServer((request, response) => {
    // Define o cabeçalho da resposta com um status 200 (OK) e o tipo de conteúdo como texto simples
    response.writeHead(200, {
      "Content-Type": "text/plain",
    });

    // Escreve "Olá mundo! Teste funcionando....." no corpo da resposta
    response.write("Olá mundo! Teste funcionando.....");

    // Encerra a resposta, sinalizando que todas as informações da resposta foram enviadas
    response.end();
  })
  // O servidor começa a escutar na porta 1010 para solicitações HTTP
  .listen(1010);
