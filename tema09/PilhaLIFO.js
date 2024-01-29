// Cria a função funcaoA que recebe o método console.trade
const funcaoA = () => console.trace();
// Cria a função funcaoB que recebe funcaoA e o rastreamento
const funcaoB = () => funcaoA();
// Executa a função funcaoB
funcaoB();
