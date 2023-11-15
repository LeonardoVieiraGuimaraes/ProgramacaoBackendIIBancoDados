// Importa o módulo 'http' do Node.js, que fornece funcionalidades para criar servidores HTTP
const http = require("http");

// Define a porta em que o servidor irá escutar
const porta = 4123;

// Define o host em que o servidor irá rodar
const host = "localhost";

// Cria um servidor HTTP
const servidor = http.createServer((request, response) => {
  // Define o código de status da resposta como 200 (OK) e o tipo de conteúdo como 'text/html'
  response.writeHead(200, { "Content-Type": "text/html" });

  // Verifica a URL da requisição
  // Se a URL for '/', envia uma mensagem de boas-vindas
  if (request.url === "/") {
    response.write("<h1>Bem vindo! Teste executado com sucesso!</h1>");
  }
  // Se a URL for '/rota1', envia uma mensagem informando que a rota 1 foi acessada
  else if (request.url === "/rota1") {
    response.write("<h1>Voce acesso a rota 1</h1>");
  }
  // Se a URL for '/rota2', envia uma mensagem informando que a rota 2 foi acessada
  if (request.url === "/rota2") {
    response.write("<h1>Voce acesso a rota 2</h1>");
  }
  // Sinaliza ao servidor que todos os cabeçalhos e corpo da resposta foram enviados
  response.end();
});

// Faz o servidor escutar na porta e host definidos anteriormente
servidor.listen(porta, host, () => {
  // Imprime uma mensagem no console informando que o servidor está rodando
  console.log(`Servidor rodando em http://${host}:${porta}`);
});
