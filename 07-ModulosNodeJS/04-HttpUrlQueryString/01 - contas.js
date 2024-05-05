// Importa o módulo interno HTTP para criar um servidor HTTP
var http = require("http");

// Importa o módulo interno URL para analisar URLs, que fornece utilitários para analisar e construir URLs
var url = require("url");

// Importa o módulo interno FS (File System) para trabalhar com arquivos, que permite interagir com o sistema de arquivos
var fs = require("fs");

// Cria um servidor HTTP
http
  .createServer(function (req, res) {
    // A função passada como argumento é chamada para cada requisição recebida pelo servidor

    // Analisa a URL da requisição e retorna um objeto URL
    var q = url.parse(req.url, true);

    // Constrói o caminho do arquivo a partir da propriedade 'pathname' do objeto URL
    var filename = "." + q.pathname;

    // Lê o arquivo especificado pelo caminho do arquivo
    fs.readFile(filename, function (err, data) {
      // A função passada como argumento é chamada quando a leitura do arquivo é concluída

      if (err) {
        // Se um erro ocorreu (ou seja, o arquivo não foi encontrado), retorna uma resposta HTTP com status 404

        // Define o status da resposta como 404 e o tipo de conteúdo como HTML
        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });

        // Termina a resposta com uma mensagem de erro
        return res.end("Página não existe! (Erro 404)");
      }

      // Se nenhum erro ocorreu (ou seja, o arquivo foi encontrado), retorna uma resposta HTTP com status 200

      // Define o status da resposta como 200 e o tipo de conteúdo como HTML
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

      // Escreve os dados do arquivo na resposta
      res.write(data);

      // Termina a resposta
      return res.end();
    });
  })
  // O servidor começa a ouvir na porta 8080
  .listen(1010, () => {
    // Imprime a URL no console quando o servidor começa a ouvir
    console.log("Server running at http://localhost:1010/");
  });

// Abre na porta 8080 http://localhost:8080/

//   Agora digite a seguinte URL no navegador para chamar a página index.html;
