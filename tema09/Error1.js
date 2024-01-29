const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.emit("error", new Error("Veja o que ocorreu!"));
// Lança e trava o Node.js Node.js
