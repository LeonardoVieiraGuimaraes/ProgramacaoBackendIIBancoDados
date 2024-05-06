const dadosModelo = require("../modelo/dados");
exports.consutarTodos = async () => {
  return await dadosModelo.find();
};

exports.inserirAluno = async (dado) => {
  return await dadosModelo.create(dado);
};
