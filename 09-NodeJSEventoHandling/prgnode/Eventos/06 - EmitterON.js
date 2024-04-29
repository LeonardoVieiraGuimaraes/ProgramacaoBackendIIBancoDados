// Importa o módulo 'events' do Node.js, que fornece funcionalidades para trabalhar com eventos.
const EventEmitter = require("events");

// Cria uma nova classe 'MyEmitter' que estende a classe 'EventEmitter' do módulo 'events'.
// Isso permite que instâncias de 'MyEmitter' usem métodos como 'on' e 'emit' para manipular eventos.
class MyEmitter extends EventEmitter {}

// Cria uma nova instância de 'MyEmitter'.
const myEmitter = new MyEmitter();

// Inicializa uma variável 'm' com o valor 0.
let m = 0;

// Define um ouvinte de evento para o evento chamado 'event'.
// A função de callback fornecida será chamada sempre que o evento 'event' for emitido.
// Esta função de callback incrementa 'm' e imprime o novo valor no console.
myEmitter.on("event", () => {
  console.log(++m);
});

// Emite o evento 'event' pela primeira vez.
// Isso fará com que todos os ouvintes de evento para 'event' sejam chamados.
myEmitter.emit("event");

// Emite o evento 'event' pela segunda vez.
// Novamente, isso fará com que todos os ouvintes de evento para 'event' sejam chamados.
myEmitter.emit("event");

// Emite o evento 'event' pela terceira vez.
// Mais uma vez, isso fará com que todos os ouvintes de evento para 'event' sejam chamados.
myEmitter.emit("event");
