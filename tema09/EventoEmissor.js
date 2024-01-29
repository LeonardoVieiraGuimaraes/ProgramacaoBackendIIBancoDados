// criar e instancia o objeto EventEmitter
const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on("event", () => {
  console.log("Um evento ocorreu!");
  console.log(Event);
});
myEmitter.emit("event");
