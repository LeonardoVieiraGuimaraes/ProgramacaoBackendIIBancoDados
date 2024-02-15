const EventEmitter = require("events");
const errorMonitor = require("events");
const myEmitter = new EventEmitter();
myEmitter.on(errorMonitor, (err) => {
  MyMonitoringTool.log(err);
});
myEmitter.emit("error", new Error("Veja o que ocorreu!"));
