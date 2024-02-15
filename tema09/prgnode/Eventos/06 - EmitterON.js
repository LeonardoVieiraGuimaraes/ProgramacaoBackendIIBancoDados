const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
let m = 0;
//Ativa manipulação única myEmitter.emit();
myEmitter.on("event", () => {
  console.log(++m);
});
//primeira manipulação do mesmo evento
myEmitter.emit("event");
//segunda manipulação do mesmo evento
myEmitter.emit("event");
//terceira manipulação do mesmo evento
myEmitter.emit("event");
