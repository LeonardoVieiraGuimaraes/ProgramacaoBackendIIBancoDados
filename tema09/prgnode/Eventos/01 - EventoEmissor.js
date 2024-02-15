// criar e instancia o objeto EventEmitter
// Importa o módulo 'events' do Node.js, que fornece funcionalidades para trabalhar com eventos.
const EventEmitter = require("events");

// Cria uma nova classe 'MyEmitter' que estende a classe 'EventEmitter' do módulo 'events'.
// Isso permite que instâncias de 'MyEmitter' usem métodos como 'on' e 'emit' para manipular eventos.
class MyEmitter extends EventEmitter {}

// Cria uma nova instância de 'MyEmitter'.
const myEmitter = new MyEmitter();

// Define um ouvinte de evento para o evento chamado 'event'.
// A função de callback fornecida será chamada sempre que o evento 'event' for emitido.
myEmitter.on("event", () => {
  // Imprime uma mensagem no console quando o evento ocorre.
  console.log("Um evento ocorreu!");

  // Imprime o objeto 'Event' no console.
  // Note que 'Event' não é definido neste código, então isso provavelmente causará um erro.
  console.log(Event);
});

// Emite o evento 'event'. Isso fará com que todos os ouvintes de evento para 'event' sejam chamados.
myEmitter.emit("event");
