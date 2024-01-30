const dadosModelo = require("../models/dados");

exports.listarLivros = async () => {
  return await dadosModelo.find();
};

exports.inserirLivros = async (dados) => {
  return await dadosModelo.create(dados);
};

exports.listarLivroID = async (id) => {
  return await dadosModelo.findById(id);
};

exports.atualizarLivro = async (id, dados) => {
  return await dadosModelo.findByIdAndUpdate(id, dados);
};

exports.removerLivro = async (id) => {
  return await dadosModelo.findByIdAndRemove(id);
};
