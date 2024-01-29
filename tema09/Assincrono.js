const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on("event", (a, b) => {
  setImmediate(() => {
    console.log("Isso acontece de forma assíncrona");
  });
});
myEmitter.emit("event", "a", "b");
