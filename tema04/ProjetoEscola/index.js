// Declara uma função anônima assíncrona autoinvocada
// Funções assíncronas permitem o uso da palavra-chave 'await', que pausa a execução da função até que a Promise seja resolvida ou rejeitada
// Funções autoinvocadas são funções que se chamam automaticamente assim que são definidas
(async () => {
  // Importa o módulo 'conectaDB01'
  // O './' no início do caminho do módulo indica que o módulo está no mesmo diretório que o arquivo atual
  // O Node.js segue o caminho do módulo para encontrar o arquivo 'conectaBD02.js' e importa o que foi exportado nesse módulo
  const db = await require("./conectaDB");
  // A função assíncrona termina aqui
  // Como não há nenhuma operação assíncrona na função, ela retorna imediatamente
  // Se houvesse uma operação assíncrona, como uma chamada de API ou uma leitura de arquivo, a função esperaria a operação ser concluída antes de retornar

  // Imprime a mensagem "Alunos Cadastrados no Banco de Dados" no console
  console.log("Alunos Cadastrados no Banco de Dados");

  // Chama a função todosAlunos() que está no objeto db e espera a resposta
  // A função todosAlunos() deve retornar todos os alunos cadastrados no banco de dados
  const alunos = await db.todosAlunos();

  // Imprime a lista de alunos retornada pela função todosAlunos()
  console.log(alunos);

  // Imprime a mensagem "Realizando Cadastro de Alunos" no console
  console.log("Realizando Cadastro de Alunos");

  // Chama a função inserirAluno() que está no objeto db e passa um objeto como argumento
  // O objeto contém as informações do aluno que será inserido no banco de dados
  await db.inserirAluno({
    nome: "Leonardo Vieira Guimarães",
    turma: "BD",
    telefone: "99999999",
  });

  // Define o ID do aluno que será atualizado
  const id = 6;

  // Define os novos valores para o nome, turma e telefone do aluno
  const novoNome = "Fulado de Tal";
  const novaTurma = "SPI";
  const novoTelefone = "8888888888";

  // Chama a função 'alterarAluno' do módulo 'db' (que foi importado de 'conectaDB04')
  // A função 'alterarAluno' é uma função assíncrona que atualiza um aluno na tabela 'alunos'
  // A palavra-chave 'await' é usada para pausar a execução do código até que a função 'alterarAluno' seja concluída
  // O primeiro argumento para 'alterarAluno' é o ID do aluno que será atualizado
  // O segundo argumento para 'alterarAluno' é um objeto que contém os novos valores para o nome, turma e telefone do aluno
  await db.alterarAluno(id, {
    nome: novoNome,
    turma: novaTurma,
    telefone: novoTelefone,
  });

  // Imprime uma mensagem no console para indicar que o aluno foi atualizado com sucesso
  console.log("Aluno " + id + " alterado com sucesso!");

  // Define o ID do aluno que será excluído
  // A variável 'id' é inicializada com o valor 1, que é o ID do aluno que será excluído
  //   const id = 1;

  // Chama a função 'excluirAluno' do módulo 'db' (que foi importado de 'conectaDB04')
  // A função 'excluirAluno' é uma função assíncrona que exclui um aluno da tabela 'alunos'
  // A palavra-chave 'await' é usada para pausar a execução do código até que a função 'excluirAluno' seja concluída
  // O argumento para 'excluirAluno' é o ID do aluno que será excluído
  await db.excluirAluno(id);

  // Imprime uma mensagem no console para indicar que o aluno foi excluído com sucesso
  // A mensagem inclui o ID do aluno que foi excluído
  console.log("Aluno " + id + " excluido com sucesso!");

  const aluno = await db.consultarAluno(2);
  console.log("Aluno " + aluno.id + ": " + aluno.nome);
})();
