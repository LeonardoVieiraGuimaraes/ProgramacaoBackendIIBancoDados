// Inicializa os módulos necessários
var http = require("http"); // Módulo para criar um servidor HTTP
var formidable = require("formidable"); // Módulo para lidar com formulários e uploads de arquivos

// Cria um servidor HTTP
http
  .createServer(function (req, res) {
    // Esta função é chamada sempre que o servidor recebe uma requisição

    if (req.url == "/fileupload") {
      // Se a URL da requisição é '/fileupload', um formulário está sendo enviado

      var form = new formidable.IncomingForm(); // Cria um novo objeto IncomingForm para lidar com o upload de arquivos

      form.parse(req, function (err, fields, files) {
        // Analisa a requisição para extrair os campos e arquivos do formulário

        res.write("Baixar arquivo."); // Escreve uma mensagem na resposta
        res.end(); // Termina a resposta
      });
    } else {
      // Se a URL da requisição não é '/fileupload', serve o formulário HTML

      res.writeHead(200, { "Content-Type": "text/html" }); // Define o status da resposta como 200 e o tipo de conteúdo como HTML

      // Escreve o formulário HTML na resposta
      res.write(
        '<form action="fileupload" method="post" enctype="multipart/form-data">'
      );
      res.write('<input type="file" name="filetoupload"><br>');
      res.write('<input type="submit">');
      res.write("</form>");

      return res.end(); // Termina a resposta
    }
  })
  .listen(3000, () => {
    // O servidor começa a ouvir na porta 3000
    console.log("Server running at http://localhost:3000/"); // Imprime a URL no console quando o servidor começa a ouvir
  });
