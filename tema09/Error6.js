const fs = require("node:fs");
fs.readFile("arquivo_que_não_existe.txt", (err, data) => {
  if (err) {
    console.error("Arquivo não existe na pasta!", err);
    return;
  }
});
