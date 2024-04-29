// Importa o módulo 'net' do Node.js, que fornece uma API para criar servidores e clientes de rede.
const net = require("node:net");

// Usa a função 'connect' do módulo 'net' para estabelecer uma conexão de rede com o servidor local.
// O objeto retornado 'connection' é um stream que pode ser usado para enviar e receber dados.
const connection = net.connect("localhost");

// Adiciona um ouvinte de evento para o evento 'error' ao stream 'connection'.
// A função de callback fornecida será chamada sempre que um erro ocorrer na conexão.
connection.on("error", (err) => {
  // Imprime o erro no console.
  console.error(err);
});

// Usa a função 'pipe' para redirecionar os dados recebidos na conexão para 'process.stdout',
// que é um stream de saída que imprime no console.
// Isso significa que qualquer dado recebido na conexão será impresso no console.
connection.pipe(process.stdout);
