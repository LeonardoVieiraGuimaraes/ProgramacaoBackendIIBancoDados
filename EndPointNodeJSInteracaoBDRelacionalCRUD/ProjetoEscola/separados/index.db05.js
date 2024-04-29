// Declara uma função anônima assíncrona autoinvocada
// Funções assíncronas permitem o uso da palavra-chave 'await', que pausa a execução da função até que a Promise seja resolvida ou rejeitada
// Funções autoinvocadas são funções que se chamam automaticamente assim que são definidas
(async () => {
  // Importa o módulo 'conectaDB05'
  // O './' no início do caminho do módulo indica que o módulo está no mesmo diretório que o arquivo atual
  // O Node.js segue o caminho do módulo para encontrar o arquivo 'conectaDB04.js' e importa o que foi exportado nesse módulo
  const db = require("./conectaDB05");

  // Define o ID do aluno que será excluído
  // A variável 'id' é inicializada com o valor 1, que é o ID do aluno que será excluído
  const id = 1;

  // Chama a função 'excluirAluno' do módulo 'db' (que foi importado de 'conectaDB04')
  // A função 'excluirAluno' é uma função assíncrona que exclui um aluno da tabela 'alunos'
  // A palavra-chave 'await' é usada para pausar a execução do código até que a função 'excluirAluno' seja concluída
  // O argumento para 'excluirAluno' é o ID do aluno que será excluído
  await db.excluirAluno(id);

  // Imprime uma mensagem no console para indicar que o aluno foi excluído com sucesso
  // A mensagem inclui o ID do aluno que foi excluído
  console.log("Aluno " + id + " excluido com sucesso!");
})();
