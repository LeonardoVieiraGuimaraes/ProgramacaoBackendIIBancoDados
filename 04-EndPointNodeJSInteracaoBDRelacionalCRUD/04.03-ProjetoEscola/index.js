// Importa o módulo 'http' do Node.js, que fornece funcionalidades para criar servidores HTTP.
const http = require("http");
const RequisicaoService = require("./classes/servicos/requsicaoService");

// Define a porta e o host que o servidor deve usar.
const porta = 4123;
const host = "localhost";

// Cria um novo servidor HTTP.
// A função passada para 'createServer' é chamada cada vez que o servidor recebe uma nova solicitação HTTP.
const server = http.createServer((request, response) => {
  const requisicaoService = new RequisicaoService();
  response.writeHead(200, {
    "Content-Type": "application/json; charset=utf-8",
  });
  requisicaoService.validarRequisicao(request, response);
});
// Faz o servidor começar a escutar por conexões no host e porta especificados.
// A função passada para 'listen' é chamada uma vez que o servidor esteja pronto para aceitar conexões.
server.listen(porta, host, () => {
  console.log(`O nosso servidor está rodando em http://${host}:${porta}`);
});
