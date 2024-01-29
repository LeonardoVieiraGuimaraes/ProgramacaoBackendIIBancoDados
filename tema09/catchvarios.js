new Promise((resolve, reject) => {
  throw new Error("Error");
})
  .catch((err) => {
    throw new Error("Error");
  })
  .catch((err) => {
    console.error(err);
  });
