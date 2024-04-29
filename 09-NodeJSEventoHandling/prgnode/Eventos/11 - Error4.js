// O bloco 'try' contém o código que pode potencialmente lançar um erro.
try {
  // Declara uma constante 'm' e atribui o valor 1 a ela.
  const m = 1;
  // Tenta declarar uma constante 'n' e atribuir o valor da soma de 'm' e 'z' a ela.
  // Como 'z' não foi declarado ou definido, isso lançará um ReferenceError.
  const n = m + z;
} catch (err) {
  // O bloco 'catch' é executado se um erro é lançado no bloco 'try'.
  // Imprime o erro e uma mensagem no console.
  console.log(err, "Erro interceptado.");
}
