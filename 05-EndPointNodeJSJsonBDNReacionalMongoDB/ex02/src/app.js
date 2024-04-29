// Importando os módulos necessários
import express from "express";
import mongoose from "mongoose";

// Inicializando o Express
const app = express();

// Habilitando o uso de JSON no Express
app.use(express.json());

// Definindo o esquema para os livros no MongoDB
const livroSchema = new mongoose.Schema({
  titulo: String, // Campo para o título do livro
  autor: String, // Campo para o autor do livro
  anoPublicacao: Number, // Campo para o ano de publicação do livro
});

// Criando um modelo Mongoose baseado no esquema dos livros
const Livro = mongoose.model("Livro", livroSchema);

// Rota para criar um novo livro (CREATE)
app.post("/livros", async (req, res) => {
  // Criando um novo livro com os dados da requisição
  const livro = new Livro(req.body);
  try {
    // Salvando o livro no MongoDB
    await livro.save();
    // Enviando uma resposta com status 201 (Criado) e o livro criado
    res.status(201).send(livro);
  } catch (erro) {
    // Enviando uma resposta com status 500 (Erro Interno do Servidor) e o erro
    res.status(500).send(erro);
  }
});

// Rota para obter todos os livros (READ)
app.get("/livros", async (req, res) => {
  try {
    // Buscando todos os livros no MongoDB
    const livros = await Livro.find();
    // Enviando uma resposta com os livros encontrados
    res.send(livros);
  } catch (erro) {
    // Enviando uma resposta com status 500 (Erro Interno do Servidor) e o erro
    res.status(500).send(erro);
  }
});

// Rota para obter um livro pelo ID (READ)
app.get("/livros/:id", async (req, res) => {
  try {
    // Buscando o livro pelo ID no MongoDB
    const livro = await Livro.findById(req.params.id);
    if (!livro) {
      // Se o livro não for encontrado, enviar uma resposta com status 404 (Não Encontrado)
      res.status(404).send("Livro não encontrado");
    } else {
      // Se o livro for encontrado, enviar uma resposta com o livro
      res.send(livro);
    }
  } catch (erro) {
    // Enviando uma resposta com status 500 (Erro Interno do Servidor) e o erro
    res.status(500).send(erro);
  }
});

// Rota para atualizar um livro pelo ID (UPDATE)
app.put("/livros/:id", async (req, res) => {
  try {
    // Atualizando o livro pelo ID com os dados da requisição
    const livro = await Livro.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!livro) {
      // Se o livro não for encontrado, enviar uma resposta com status 404 (Não Encontrado)
      res.status(404).send("Livro não encontrado");
    } else {
      // Se o livro for encontrado, enviar uma resposta com o livro atualizado
      res.send(livro);
    }
  } catch (erro) {
    // Enviando uma resposta com status 500 (Erro Interno do Servidor) e o erro
    res.status(500).send(erro);
  }
});

// Rota para deletar um livro pelo ID (DELETE)
app.delete("/livros/:id", async (req, res) => {
  try {
    // Deletando o livro pelo ID
    const livro = await Livro.findByIdAndDelete(req.params.id);

    if (!livro) {
      // Se o livro não for encontrado, enviar uma resposta com status 404 (Não Encontrado)
      res.status(404).send("Livro não encontrado");
    } else {
      // Se o livro for encontrado e deletado, enviar uma resposta com status 204 (Sem Conteúdo)
      res.status(204).send("Livro deletado com sucesso");
    }
  } catch (erro) {
    // Enviando uma resposta com status 500 (Erro Interno do Servidor) e o erro
    res.status(500).send(erro);
  }
});

// Exportando o app para ser usado em outros módulos
export default app;
