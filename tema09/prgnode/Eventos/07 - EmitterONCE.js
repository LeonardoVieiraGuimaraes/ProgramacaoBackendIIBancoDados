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
// A função de callback fornecida será chamada apenas na primeira vez que o evento 'event' for emitido.
// Esta função de callback incrementa 'm' e imprime o novo valor no console.
myEmitter.once("event", () => {
  console.log(++m);
});

// Emite o evento 'event' pela primeira vez.
// Isso fará com que o ouvinte de evento para 'event' seja chamado.
myEmitter.emit("event");

// Emite o evento 'event' pela segunda vez.
// Como o ouvinte de evento foi definido com 'once', ele não será chamado desta vez.
myEmitter.emit("event");

// Emite o evento 'event' pela terceira vez.
// Novamente, o ouvinte de evento não será chamado, pois ele foi definido com 'once'.
myEmitter.emit("event");
