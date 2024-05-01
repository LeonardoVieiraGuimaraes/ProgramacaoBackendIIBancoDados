// Importa o módulo interno FS do Node.js, que permite a manipulação de arquivos e diretórios
var fs = require("fs");

// Cria e abre o arquivo index.html. A opção “w” é para permissão de gravação.
fs.open("index.html", "w", function (err, file) {
  // Verifica se houve algum erro durante a criação do arquivo. Se houve, lança uma exceção.
  if (err) throw err;
});

// Adiciona a tag inicial do HTML ao arquivo index.html
fs.appendFile(
  "index.html",
  "<!DOCTYPE html>\n<html>\n<head>\n<title>Meu Site</title>\n</head>\n<body>\n",
  function (err) {
    // Verifica se houve algum erro durante a escrita no arquivo. Se houve, lança uma exceção.
    if (err) throw err;
  }
);

// Adiciona um título H1 ao arquivo index.html
fs.appendFile("index.html", "<h1>Plano de Trabalho</h1>\n", function (err) {
  // Verifica se houve algum erro durante a escrita no arquivo. Se houve, lança uma exceção.
  if (err) throw err;
});

// Adiciona um parágrafo ao arquivo index.html
fs.appendFile("index.html", "<p><br><br>Menu</p>\n", function (err) {
  // Verifica se houve algum erro durante a escrita no arquivo. Se houve, lança uma exceção.
  if (err) throw err;
});

// Adiciona a tag final do HTML ao arquivo index.html
fs.appendFile("index.html", "</body>\n</html>", function (err) {
  // Verifica se houve algum erro durante a escrita no arquivo. Se houve, lança uma exceção.
  if (err) throw err;
});
