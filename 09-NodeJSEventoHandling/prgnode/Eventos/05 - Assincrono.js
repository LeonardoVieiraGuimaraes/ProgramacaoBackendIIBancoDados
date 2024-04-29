// Importa o módulo 'events' do Node.js, que fornece funcionalidades para trabalhar com eventos.
const EventEmitter = require("events");

// Cria uma nova classe 'MyEmitter' que estende a classe 'EventEmitter' do módulo 'events'.
// Isso permite que instâncias de 'MyEmitter' usem métodos como 'on' e 'emit' para manipular eventos.
class MyEmitter extends EventEmitter {}

// Cria uma nova instância de 'MyEmitter'.
const myEmitter = new MyEmitter();

// Define um ouvinte de evento para o evento chamado 'event'.
// A função de callback fornecida será chamada sempre que o evento 'event' for emitido.
// Esta função de callback aceita dois argumentos, 'a' e 'b'.
myEmitter.on("event", (a, b) => {
  // A função 'setImmediate' é usada para executar um callback de forma assíncrona após o restante do código síncrono ter sido executado.
  // Neste caso, a função de callback imprime uma mensagem no console.
  setImmediate(() => {
    console.log("Isso acontece de forma assíncrona");
  });
});

// Emite o evento 'event', passando 'a' e 'b' como argumentos.
// Isso fará com que todos os ouvintes de evento para 'event' sejam chamados, com 'a' e 'b' como argumentos.
myEmitter.emit("event", "a", "b");
