const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on("error", (err) => {
  console.error("Opa! Havia um erro.");
});
myEmitter.emit("error", new Error("Veja o que ocorreu!"));
