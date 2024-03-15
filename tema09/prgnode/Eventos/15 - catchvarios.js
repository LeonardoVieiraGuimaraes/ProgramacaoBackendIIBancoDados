new Promise((resolve, reject) => {
  throw new Error("Erro na Promise");
})
  .catch((err) => {
    console.error("Primeiro catch: ", err.message);
    throw new Error("Erro no primeiro catch");
  })
  .catch((err) => {
    console.error("Segundo catch: ", err.message);
  });
