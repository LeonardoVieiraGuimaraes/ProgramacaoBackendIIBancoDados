// Importando os módulos necessários
const http = require("http"); // Importando o módulo http do Node.js
const RequisicaoService = require("./Servicos/RequisicaoService"); // Importando a classe RequisicaoService do módulo requisicaoservice

// Definindo a porta e o host para o servidor
const porta = 4123;
const host = "localhost";

// Criando o servidor HTTP
const servidor = http.createServer((request, response) => {
  // Criando uma nova instância da classe RequisicaoService
  const requisicaoService = new RequisicaoService();

  // Chamando o método validarRequisicao da classe RequisicaoService
  requisicaoService.validarRequisicao(request, response);

  // Definindo o cabeçalho da resposta
  response.writeHead(200, {
    "Content-Type": "text/plain",
  });

  // Encerrando a resposta
  response.end();
});

// Iniciando o servidor
servidor.listen(porta, host, () => {
  console.log("O nosso servidor está rodando!");
});
