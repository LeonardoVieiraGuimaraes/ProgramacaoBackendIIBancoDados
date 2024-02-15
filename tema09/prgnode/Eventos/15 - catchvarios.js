// Cria uma nova Promise.
// A função executora passada para o construtor da Promise imediatamente lança um erro.
new Promise((resolve, reject) => {
  throw new Error("Error");
})
  // Adiciona um manipulador de rejeição à Promise.
  // Este manipulador é chamado quando a Promise é rejeitada (neste caso, devido ao erro lançado na função executora).
  // O manipulador de rejeição também lança um erro.
  .catch((err) => {
    throw new Error("Error");
  })
  // Adiciona outro manipulador de rejeição à Promise.
  // Este manipulador é chamado quando a Promise é rejeitada pelo primeiro manipulador de rejeição.
  // O manipulador de rejeição imprime o erro no console.
  .catch((err) => {
    console.error(err);
  });
