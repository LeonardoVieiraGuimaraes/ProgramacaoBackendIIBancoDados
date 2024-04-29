const EventEmitter = require("events");

// Cria uma nova instância de EventEmitter.
const myEmitter = new EventEmitter();

// Define um ouvinte de evento para o evento 'error'.
// A função de callback fornecida será chamada sempre que o evento 'error' for emitido.
// Esta função de callback aceita um argumento 'err', que é o objeto Error passado quando o evento é emitido.
// A função de callback usa um suposto 'MyMonitoringTool' para registrar o erro.
myEmitter.on("error", (err) => {
  // Certifique-se de que 'MyMonitoringTool' está definido e tem um método 'log'.
  MyMonitoringTool.log(err);
});

// Emite o evento 'error', passando um novo objeto Error como argumento.
// Isso fará com que o ouvinte de evento para 'error' seja chamado, e o erro será registrado usando 'MyMonitoringTool'.
myEmitter.emit("error", new Error("Veja o que ocorreu!"));
