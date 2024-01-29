// Util Module
// O módulo 'util' é uma coleção de funções utilitárias úteis.
const util = require("util");
const text = "Hello, World!";
const formattedText = util.format("%s %s", text, "from util module");
console.log(formattedText);

// Path Module
// O módulo 'path' fornece utilitários para trabalhar com caminhos de arquivo e diretório.
const path = require("path");
const filePath = "/user/local/bin";
const baseName = path.basename(filePath);
console.log(baseName);

// OS Module
// O módulo 'os' fornece utilitários para interagir com o sistema operacional.
const os = require("os");
console.log("Platform: ", os.platform());
console.log("CPU architecture: ", os.arch());

// Readline Module
// O módulo 'readline' fornece uma interface para ler dados de um fluxo legível, uma linha de cada vez.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Qual é o seu nome? ", (answer) => {
  console.log(`Prazer em conhecer você, ${answer}`);
  rl.close();
});

// Timers Module
// O módulo 'timers' contém funções para agendar a execução de código após um determinado período de tempo.
const timer = setTimeout(() => {
  console.log("Este é um timer!");
}, 2000);

// Stream Module
// O módulo 'stream' é usado para manipular fluxos de dados.
const fs = require("fs");
const readableStream = fs.createReadStream("input.txt");
const writableStream = fs.createWriteStream("output.txt");
readableStream.pipe(writableStream);

// Buffer Module
// O módulo 'buffer' é usado para manipular dados binários.
const buf = Buffer.from("Olá, mundo!");
console.log(buf.toString());

// String Decoder Module
// O módulo 'string_decoder' fornece uma API para decodificar Buffer em strings de uma maneira que preserva caracteres codificados.
const StringDecoder = require("string_decoder").StringDecoder;
const decoder = new StringDecoder("utf8");
console.log(decoder.write(Buffer.from("Olá, mundo!")));

// Zlib Module
// O módulo 'zlib' fornece compressão e descompressão de funcionalidades, como gzip e deflate/inflate.
const zlib = require("zlib");
const gzip = zlib.createGzip();
const inp = fs.createReadStream("input.txt");
const out = fs.createWriteStream("input.txt.gz");
inp.pipe(gzip).pipe(out);

// HTTP Module
// O módulo 'http' permite a transferência de dados via HTTP.
const http = require("http");
http
  .createServer((req, res) => {
    res.write("Olá, mundo!");
    res.end();
  })
  .listen(8080);

// Events Module
// O módulo 'events' é usado para manipular eventos.
const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on("event", () => {
  console.log("Um evento ocorreu!");
});
myEmitter.emit("event");
