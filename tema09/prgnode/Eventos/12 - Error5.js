const fs = require("fs/promises");
(async () => {
  let data;
  try {
    data = await fs.readFile("arquivo_que_não_existe.txt");
  } catch (err) {
    console.error("Arquivo não existe na pasta!", err);
    return;
  }
})();
