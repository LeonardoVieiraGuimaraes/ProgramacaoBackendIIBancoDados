// Importa o módulo interno HTTP
var http = require("http");
// Importa o módulo interno URL
var url = require("url");
// Importa o módulo interno FS
var fs = require("fs");
// Criar e abre o arquivo index.html. A opção “w” é para permissão de gravação.
fs.open("index.html", "w", function (err, file) {
  if (err) throw err;
});
// Adiciona os textos de código html no arquivo index.html
fs.appendFile("index.html", "<html><body> \r\n", function (err) {
  if (err) throw err;
});
fs.appendFile(
  "index.html",
  "<h1> Plano de Trabalho </h1> \r\n",
  function (err) {
    if (err) throw err;
  }
);
fs.appendFile("index.html", "<p><br><br>Menu</p> \r\n", function (err) {
  if (err) throw err;
});
fs.appendFile("index.html", "<html><body> \r\n", function (err) {
  if (err) throw err;
});
fs.appendFile("index.html", "</body></html> \r\n", function (err) {
  if (err) throw err;
});
// Cria o servidor
http
  .createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not Found");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(3000, () => {
    // Imprime a URL no console quando o servidor começa a ouvir
    console.log("Server running at http://localhost:3000/");
  });
