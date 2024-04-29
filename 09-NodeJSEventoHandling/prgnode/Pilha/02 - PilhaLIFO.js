// Define a função 'funcaoA' que, quando chamada, imprime um rastreamento de pilha para o console.
// Um rastreamento de pilha é uma lista de todas as funções que foram chamadas para chegar ao ponto atual no código.
const funcaoA = () => console.trace();

// Define a função 'funcaoB' que, quando chamada, chama a função 'funcaoA'.
const funcaoB = () => funcaoA();

// Chama a função 'funcaoB'.
// Isso, por sua vez, chama a função 'funcaoA', que imprime um rastreamento de pilha para o console.
// O rastreamento de pilha mostrará que 'funcaoB' chamou 'funcaoA', que chamou 'console.trace'.
funcaoB();
