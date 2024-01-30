// Importa o módulo interno HTTP do Node.js, que permite a criação de servidores HTTP
var http = require("http");

// Importa o módulo interno URL do Node.js, que permite a manipulação e construção de URLs
var url = require("url");

// Importa o módulo interno FS do Node.js, que permite a manipulação de arquivos e diretórios
var fs = require("fs");

// Cria e abre o arquivo index.html. A opção “w” é para permissão de gravação.
fs.open("index.html", "w", function (err, file) {
  // Verifica se houve algum erro durante a criação do arquivo. Se houve, lança uma exceção.
  if (err) throw err;
});

// Adiciona a tag inicial do HTML ao arquivo index.html
fs.appendFile("index.html", "<html><body> \r\n", function (err) {
  // Verifica se houve algum erro durante a escrita no arquivo. Se houve, lança uma exceção.
  if (err) throw err;
});

// Adiciona um título H1 ao arquivo index.html
fs.appendFile(
  "index.html",
  "<h1> Plano de Trabalho </h1> \r\n",
  function (err) {
    // Verifica se houve algum erro durante a escrita no arquivo. Se houve, lança uma exceção.
    if (err) throw err;
  }
);

// Adiciona um parágrafo ao arquivo index.html
fs.appendFile("index.html", "<p><br><br>Menu</p> \r\n", function (err) {
  // Verifica se houve algum erro durante a escrita no arquivo. Se houve, lança uma exceção.
  if (err) throw err;
});

// Adiciona a tag final do HTML ao arquivo index.html
fs.appendFile("index.html", "</body></html> \r\n", function (err) {
  // Verifica se houve algum erro durante a escrita no arquivo. Se houve, lança uma exceção.
  if (err) throw err;
});

// Cria um servidor HTTP. A função passada como argumento é chamada cada vez que uma requisição é recebida pelo servidor
http
  .createServer(function (req, res) {
    // Analisa a URL da requisição
    var q = url.parse(req.url, true);

    // Constrói o nome do arquivo a partir do caminho da URL
    var filename = "." + q.pathname;

    // Lê o arquivo especificado pela URL
    fs.readFile(filename, function (err, data) {
      // Se houve um erro durante a leitura do arquivo (por exemplo, o arquivo não existe), envia uma resposta de erro 404
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not Found");
      }

      // Se não houve erro, envia o conteúdo do arquivo como resposta
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  // O servidor começa a ouvir na porta 3000
  .listen(3000, () => {
    // Imprime a URL no console quando o servidor começa a ouvir
    console.log("Server running at http://localhost:3000/");
  });
