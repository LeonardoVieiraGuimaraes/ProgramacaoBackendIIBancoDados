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
myEmitter.on("event", function (a, b) {
  // Imprime os argumentos 'a' e 'b' no console.
  // Imprime o valor de 'this' no console. Dentro de um ouvinte de evento, 'this' é o objeto emissor de eventos.
  // Verifica se 'this' é igual a 'myEmitter' e imprime o resultado no console. Isso deve ser 'true'.
  console.log(a, b, this, this === myEmitter);
});

// Emite o evento 'event', passando 'a' e 'b' como argumentos.
// Isso fará com que todos os ouvintes de evento para 'event' sejam chamados, com 'a' e 'b' como argumentos.
myEmitter.emit("event", "a", "b");
