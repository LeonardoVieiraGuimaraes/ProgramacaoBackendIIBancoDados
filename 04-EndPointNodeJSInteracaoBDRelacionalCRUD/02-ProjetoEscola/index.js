// Importa o módulo 'http' do Node.js, que fornece funcionalidades para criar servidores HTTP.
const http = require("http");

// Define a porta e o host que o servidor deve usar.
const porta = 4123;
const host = "127.0.0.1";

// Cria um novo servidor HTTP.
// A função passada para 'createServer' é chamada cada vez que o servidor recebe uma nova solicitação HTTP.
const server = http.createServer((request, response) => {
  // Define o código de status HTTP da resposta como 200 (OK) e o tipo de conteúdo como 'text/html'.
  response.writeHead(200, { "Content-Type": "text/html" });

  // Verifica a URL da solicitação e responde de acordo.
  if (request.url === "/") {
    // Se a URL da solicitação for '/', escreve a string "Ola Mundo! Teste Funcionando..." no corpo da resposta HTTP.
    response.write("<h1>Ola Mundo! Teste Funcionando...</h1>");
  } else if (request.url === "/loja") {
    // Se a URL da solicitação for '/loja', escreve a string "Minha Loja" no corpo da resposta HTTP.
    response.write("<h1>Minha Loja<h1>");
  } else if (request.url === "/cadastro") {
    // Se a URL da solicitação for '/cadastro', escreve a string "Meu Cadastro" no corpo da resposta HTTP.
    response.write("<h1>Meu Cadastro<h1>");
  }

  // Sinaliza o fim da resposta HTTP. Isso faz com que a resposta seja enviada para o cliente.
  response.end();
});

// Faz o servidor começar a escutar por conexões no host e porta especificados.
// A função passada para 'listen' é chamada uma vez que o servidor esteja pronto para aceitar conexões.
server.listen(porta, host, () => {
  console.log("O nosso servidor está rodando!");
  console.log(`Acesse: http://${host}:${porta}`);
});
