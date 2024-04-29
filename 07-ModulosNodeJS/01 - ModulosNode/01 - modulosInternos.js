// MÓDULOS INTERNOS OU PRINCIPAIS
// Esses são módulos que vêm com o Node.js. Você não precisa instalá-los, apenas requerê-los.
// Aqui está um exemplo do módulo 'http':

const http = require("http"); // Importando o módulo 'http'
const port = 8080; // Definindo a porta do servidor
http
  .createServer((req, res) => {
    // Criando um servidor HTTP
    // req: Este é o objeto de solicitação que contém informações sobre a solicitação HTTP recebida pelo servidor.
    // res: Este é o objeto de resposta que contém métodos para enviar a resposta HTTP de volta ao cliente.
    res.setHeader("Content-Type", "text/html; charset=utf-8"); // Definindo a codificação para UTF-8
    res.write("Olá, mundo!"); // Escrevendo uma resposta para o cliente
    res.end(); // Finalizando a resposta
  })
  .listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
// Ouvindo na porta 8080
