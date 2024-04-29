// Importa o módulo 'http' do Node.js, que fornece funcionalidades para criar servidores HTTP
const http = require("http");

// Cria um servidor HTTP
http
  .createServer((request, response) => {
    // Define o código de status da resposta como 200 (OK) e o tipo de conteúdo como 'text/plain'
    response.writeHead(200, { "Content-Type": "text/plain" });

    // Escreve "Bem vindo! Teste executado com sucesso!" no corpo da resposta
    response.write("Bem vindo! Teste executado com sucesso!");

    // Sinaliza ao servidor que todos os cabeçalhos e corpo da resposta foram enviados
    response.end();
  })
  // Faz o servidor escutar na porta 1010
  .listen(1010);

console.log("Servidor rodando em http://localhost:1010/");

// execute no terminal dentro da pasta ex01/projetoEscola:
// node index.js
