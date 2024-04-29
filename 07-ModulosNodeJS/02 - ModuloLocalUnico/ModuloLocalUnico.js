// Importando o módulo 'http' do Node.js, que fornece utilitários para HTTP.
const http = require("http");

// Definindo o hostname para '127.0.0.1', que é o endereço IP local da máquina.
const hostname = "127.0.0.1";

// Definindo a porta para '3000', que é onde o servidor estará ouvindo.
const port = 3000;

// Criando um novo servidor HTTP. A função passada como argumento será chamada sempre que uma requisição HTTP for recebida.
const server = http.createServer((req, res) => {
  // Definindo o código de status da resposta HTTP para '200', que significa 'OK'.
  res.statusCode = 200;

  // Definindo o cabeçalho 'Content-Type' da resposta HTTP para 'text/plain', que indica que a resposta será texto simples.
  res.setHeader("Content-Type", "text/plain");

  // Terminando a resposta HTTP e enviando o texto 'Programador Node.js'.
  res.end("Programador Node.js");
});

// Iniciando o servidor para ouvir na porta e hostname especificados. A função passada como argumento será chamada quando o servidor começar a ouvir.
server.listen(port, hostname, () => {
  // Imprimindo uma mensagem para o console indicando que o servidor está rodando.
  console.log(`Server running at http://${hostname}:${port}/`);
});
