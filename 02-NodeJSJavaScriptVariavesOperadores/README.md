# Node.js: JavaScript, Variáveis e Operadores

Este repositório tem como objetivo fornecer uma introdução ao JavaScript, variáveis, operadores e como eles são usados no Node.js.

## Metas de Aprendizado

Ao final deste estudo, você será capaz de:

1. **Compreender as principais características da linguagem Javascript.** JavaScript é uma linguagem de programação dinâmica e interpretada, comumente usada para criar interatividade em páginas web. Ela também é usada no lado do servidor com plataformas como o Node.js. Algumas das principais características do JavaScript incluem:

    - Dinâmico: JavaScript é uma linguagem de tipagem dinâmica, o que significa que o tipo de uma variável pode mudar durante a execução do programa.
    - Interpretado: JavaScript é interpretado, o que significa que o código é executado linha por linha.
    - Orientado a objetos: JavaScript suporta programação orientada a objetos com objetos prototípicos.

2. **Compreender o que é uma variável.** Uma variável é um local na memória do computador onde você pode armazenar um valor. Em JavaScript, você pode declarar uma variável usando as palavras-chave `var`, `let` ou `const`.

3. **Reconhecer as diferenças entre let, var e const.** `var` é a maneira mais antiga de declarar variáveis em JavaScript, mas tem algumas peculiaridades. `let` e `const` foram introduzidos no ES6 e têm escopo de bloco. A diferença entre `let` e `const` é que `const` não permite que você reatribua a variável. Aqui está uma tabela que mostra as diferenças:

    | Palavra-chave | Escopo  | Pode ser reatribuída? |
    | ------------- | ------- | --------------------- |
    | var           | Função  | Sim                   |
    | let           | Bloco   | Sim                   |
    | const         | Bloco   | Não                   |

4. **Compreender o que são operadores e quais são utilizados na linguagem Javascript.** Operadores são símbolos que realizam operações em um ou mais operandos. JavaScript tem vários tipos de operadores, incluindo operadores aritméticos (como `+`, `-`, `*`, `/`), operadores de comparação (como `==`, `!=`, `===`, `!==`, `<`, `>`, `<=`, `>=`) e operadores lógicos (como `&&`, `||`, `!`).

5. **Reconhecer as diferenças entre os operadores matemáticos, lógicos, de atribuição e de comparação.** Operadores matemáticos são usados para realizar operações matemáticas, operadores lógicos são usados para realizar operações lógicas, operadores de atribuição são usados para atribuir valores a variáveis e operadores de comparação são usados para comparar valores. Aqui estão algumas tabelas que mostram os diferentes operadores:

    - Operadores matemáticos:

      | Operador | Descrição       |
      | -------- | --------------- |
      | +        | Adição          |
      | -        | Subtração       |
      | *        | Multiplicação   |
      | /        | Divisão         |
      | %        | Módulo          |
      | ++       | Incremento      |
      | --       | Decremento      |

    - Operadores de comparação:

      | Operador | Descrição                      |
      | -------- | ------------------------------ |
      | ==       | Igual a                        |
      | !=       | Diferente de                   |
      | ===      | Igual a (valor e tipo)         |
      | !==      | Diferente de (valor e tipo)    |
      | >        | Maior que                      |
      | <        | Menor que                      |
      | >=       | Maior que ou igual a           |
      | <=       | Menor que ou igual a           |

    - Operadores lógicos:

      | Operador | Descrição      |
      | -------- | -------------- |
      | &&       | E lógico       |
      | ||       | OU lógico      |
      | !        | NÃO lógico     |

6. **Utilizar variáveis e operadores na linguagem Javascript.** Isso envolve declarar variáveis, atribuir valores a elas e usar operadores para realizar operações em variáveis.

7. **Utilizar o Node.js para executar os códigos em Javascript.** Node.js permite que você execute código JavaScript fora de um navegador. Você pode usar o Node.js para executar scripts JavaScript a partir da linha de comando.

## Instalação

Para começar a usar o Node.js, você precisa instalá-lo em seu computador. Você pode baixar o Node.js do [site oficial](https://nodejs.org/).

Depois de instalado, você pode verificar a versão do Node.js e do npm (Node Package Manager) usando os seguintes comandos no terminal:

```bash
node -v # Verifica a versão do Node.js
npm -v  # Verifica a versão do npm