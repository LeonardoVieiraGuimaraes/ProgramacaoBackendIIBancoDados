const net = require("node:net");
const connection = net.connect("localhost");

// Adicionando um manipulador de eventos 'error' a um stream:
connection.on("error", (err) => {
  // Se a conexão for resetada pelo servidor, ou se não puder
  // conectar em tudo, ou em qualquer tipo de erro encontrado por
  // a conexão, o erro será enviado aqui.
  console.error(err);
});
connection.pipe(process.stdout);
