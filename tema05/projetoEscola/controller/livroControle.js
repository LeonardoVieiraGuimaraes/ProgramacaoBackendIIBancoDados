// Importando o módulo 'dadosServicos' que provavelmente contém funções para interagir com o banco de dados ou uma API.
const dadosServicos = require("../services/dadosServicos");

// Definindo uma função assíncrona 'ListarTodos' que será exportada deste módulo.
// Esta função é um controlador que lida com as requisições HTTP para listar todos os livros.
exports.ListarTodos = async (req, res) => {
  // Iniciando um bloco try...catch para capturar erros que podem ocorrer durante a execução do código dentro do bloco try.
  try {
    // Chamando a função 'listarTodos' do módulo 'dadosServicos' e esperando a Promise resolver.
    // A função 'listarTodos' provavelmente busca todos os livros do banco de dados ou de uma API.
    const livros = await dadosServicos.listarTodos();

    // Enviando uma resposta JSON com os livros obtidos e uma mensagem de status.
    // O método 'json' do objeto de resposta 'res' é usado para enviar uma resposta JSON.
    res.json({ data: livros, status: "Livros listados com sucesso" });

    // Capturando qualquer erro que possa ocorrer durante a execução do bloco try.
  } catch (err) {
    // Enviando uma resposta com o status 500 (Internal Server Error) e a mensagem de erro.
    // O método 'status' do objeto de resposta 'res' é usado para definir o status da resposta.
    // O método 'json' é então chamado para enviar uma resposta JSON com a mensagem de erro.
    res.status(500).json({ message: err.message });
  }
};

// Definindo uma função assíncrona 'inserirLivro' que será exportada deste módulo.
// Esta função é um controlador que lida com as requisições HTTP para inserir um novo livro.
exports.inserirLivro = async (req, res) => {
  // Obtendo o novo livro do corpo da requisição.
  // O corpo da requisição é onde os dados enviados com a requisição são armazenados.
  // Neste caso, espera-se que o corpo da requisição contenha os dados do novo livro.
  const novoLivro = req.body;

  // Iniciando um bloco try...catch para capturar erros que podem ocorrer durante a execução do código dentro do bloco try.
  try {
    // Chamando a função 'inserirLivro' do módulo 'dadosServicos' e esperando a Promise resolver.
    // A função 'inserirLivro' provavelmente insere o novo livro no banco de dados ou em uma API.
    // O novo livro é passado como argumento para a função 'inserirLivro'.
    const livro = await dadosServicos.inserirLivro(novoLivro);

    // Enviando uma resposta JSON com o livro inserido e uma mensagem de status.
    // O método 'json' do objeto de resposta 'res' é usado para enviar uma resposta JSON.
    res.json({ data: livro, status: "Livro inserido com sucesso" });

    // Capturando qualquer erro que possa ocorrer durante a execução do bloco try.
  } catch (err) {
    // Enviando uma resposta com o status 500 (Internal Server Error) e a mensagem de erro.
    // O método 'status' do objeto de resposta 'res' é usado para definir o status da resposta.
    // O método 'json' é então chamado para enviar uma resposta JSON com a mensagem de erro.
    res.status(500).json({ message: err.message });
  }
};

// Definindo uma função assíncrona 'listarLivroID' que será exportada deste módulo.
// Esta função é um controlador que lida com as requisições HTTP para listar um livro específico pelo seu ID.
exports.listarLivroID = async (req, res) => {
  // Obtendo o ID do livro a partir dos parâmetros da requisição.
  // Os parâmetros da requisição são usados para passar valores através da URL da requisição.
  const id = req.params.id;

  // Iniciando um bloco try...catch para capturar erros que podem ocorrer durante a execução do código dentro do bloco try.
  try {
    // Chamando a função 'listarLivroID' do módulo 'dadosServicos' e esperando a Promise resolver.
    // A função 'listarLivroID' provavelmente busca um livro no banco de dados ou em uma API pelo seu ID.
    // O ID do livro é passado como argumento para a função 'listarLivroID'.
    const livro = await dadosServicos.listarLivroID(id);

    // Se o livro for encontrado, envia uma resposta JSON com o livro e uma mensagem de status.
    if (livro) {
      res.json({ data: livro, status: "Livro listado com sucesso" });
    } else {
      // Se o livro não for encontrado, envia uma resposta com o status 404 (Not Found) e uma mensagem de erro.
      res.status(404).json({ message: "Livro não encontrado" });
    }

    // Capturando qualquer erro que possa ocorrer durante a execução do bloco try.
  } catch (err) {
    // Enviando uma resposta com o status 500 (Internal Server Error) e a mensagem de erro.
    res.status(500).json({ message: err.message });
  }
};

// Definindo uma função assíncrona 'atualizarLivro' que será exportada deste módulo.
// Esta função é um controlador que lida com as requisições HTTP para atualizar um livro existente.
exports.atualizarLivro = async (req, res) => {
  // Obtendo o ID do livro a partir dos parâmetros da requisição.
  // Os parâmetros da requisição são usados para passar valores através da URL da requisição.
  const id = req.params.id;

  // Obtendo os dados atualizados do livro do corpo da requisição.
  // O corpo da requisição é onde os dados enviados com a requisição são armazenados.
  const dadosAtualizados = req.body;

  // Iniciando um bloco try...catch para capturar erros que podem ocorrer durante a execução do código dentro do bloco try.
  try {
    // Chamando a função 'atualizarLivro' do módulo 'dadosServicos' e esperando a Promise resolver.
    // A função 'atualizarLivro' provavelmente atualiza um livro no banco de dados ou em uma API.
    // O ID do livro e os dados atualizados são passados como argumentos para a função 'atualizarLivro'.
    const livroAtualizado = await dadosServicos.atualizarLivro(
      id,
      dadosAtualizados
    );

    // Se o livro for atualizado com sucesso, envia uma resposta JSON com o livro atualizado e uma mensagem de status.
    if (livroAtualizado) {
      res.json({
        data: livroAtualizado,
        status: "Livro atualizado com sucesso",
      });
    } else {
      // Se o livro não for encontrado, envia uma resposta com o status 404 (Not Found) e uma mensagem de erro.
      res.status(404).json({ message: "Livro não encontrado" });
    }

    // Capturando qualquer erro que possa ocorrer durante a execução do bloco try.
  } catch (err) {
    // Enviando uma resposta com o status 500 (Internal Server Error) e a mensagem de erro.
    res.status(500).json({ message: err.message });
  }
};

// Definindo uma função assíncrona 'removerLivro' que será exportada deste módulo.
// Esta função é um controlador que lida com as requisições HTTP para remover um livro existente.
exports.removerLivro = async (req, res) => {
  // Obtendo o ID do livro a partir dos parâmetros da requisição.
  // Os parâmetros da requisição são usados para passar valores através da URL da requisição.
  const id = req.params.id;

  // Iniciando um bloco try...catch para capturar erros que podem ocorrer durante a execução do código dentro do bloco try.
  try {
    // Chamando a função 'removerLivro' do módulo 'dadosServicos' e esperando a Promise resolver.
    // A função 'removerLivro' provavelmente remove um livro no banco de dados ou em uma API.
    // O ID do livro é passado como argumento para a função 'removerLivro'.
    const livroRemovido = await dadosServicos.removerLivro(id);

    // Se o livro for removido com sucesso, envia uma resposta JSON com uma mensagem de status.
    if (livroRemovido) {
      res.json({ status: "Livro removido com sucesso" });
    } else {
      // Se o livro não for encontrado, envia uma resposta com o status 404 (Not Found) e uma mensagem de erro.
      res.status(404).json({ message: "Livro não encontrado" });
    }

    // Capturando qualquer erro que possa ocorrer durante a execução do bloco try.
  } catch (err) {
    // Enviando uma resposta com o status 500 (Internal Server Error) e a mensagem de erro.
    res.status(500).json({ message: err.message });
  }
};
