// Importa módulo interno HTTP
var http = require("http");
// Importa módulo externo FORMIDABLE que permite criar formulários
var formidable = require("formidable");
// Cria o servidor
http
  .createServer(function (req, res) {
    if (req.url == "/fileupload") {
      //Cria o formulário
      var form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {
        res.write("Baixar arquivo.");
        res.end();
      });
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(
        '<form action="fileupload" method="post" enctype="multipart/form-data">'
      );
      res.write('<input type="file" name="filetoupload"><br>');
      res.write('<input type="submit">');
      res.write("</form>");
      return res.end();
    }
  })
  .listen(3000, () => {
    // Imprime a URL no console quando o servidor começa a ouvir
    console.log("Server running at http://localhost:3000/");
  });
