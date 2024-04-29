// Importa o módulo 'events' do Node.js, que fornece funcionalidades para trabalhar com eventos.
const EventEmitter = require("events");

// Cria uma nova classe 'MyEmitter' que estende a classe 'EventEmitter' do módulo 'events'.
// Isso permite que instâncias de 'MyEmitter' usem métodos como 'on' e 'emit' para manipular eventos.
class MyEmitter extends EventEmitter {}

// Cria uma nova instância de 'MyEmitter'.
const myEmitter = new MyEmitter();

// Define um ouvinte de evento para o evento 'error'.
// A função de callback fornecida será chamada sempre que o evento 'error' for emitido.
// Esta função de callback aceita um argumento 'err', que é o objeto Error passado quando o evento é emitido.
// A função de callback imprime uma mensagem de erro no console.
myEmitter.on("error", (err) => {
  console.error("Opa! Havia um erro.");
});

// Emite o evento 'error', passando um novo objeto Error como argumento.
// Isso fará com que o ouvinte de evento para 'error' seja chamado, e a mensagem de erro será impressa no console.
myEmitter.emit("error", new Error("Veja o que ocorreu!"));
