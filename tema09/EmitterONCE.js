const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
let m = 0;
//Ativa manipulação única myEmitter.emit();
myEmitter.once("event", () => {
  console.log(++m);
});
//primeira e única manipulação do mesmo evento
myEmitter.emit("event");
//segunda manipulação será ignorada
myEmitter.emit("event");
//terceira manipulação será ignorada
myEmitter.emit("event");
