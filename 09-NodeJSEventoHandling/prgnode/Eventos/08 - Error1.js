// Importa o módulo 'events' do Node.js, que fornece funcionalidades para trabalhar com eventos.
const EventEmitter = require("events");

// Cria uma nova classe 'MyEmitter' que estende a classe 'EventEmitter' do módulo 'events'.
// Isso permite que instâncias de 'MyEmitter' usem métodos como 'on' e 'emit' para manipular eventos.
class MyEmitter extends EventEmitter {}

// Cria uma nova instância de 'MyEmitter'.
const myEmitter = new MyEmitter();

// Emite o evento 'error', passando um novo objeto Error como argumento.
// Se não houver ouvintes para o evento 'error', o Node.js irá lançar a exceção e parar a execução do programa.
myEmitter.emit("error", new Error("Veja o que ocorreu!"));
