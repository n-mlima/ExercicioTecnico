// Questão 1: Soma
let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log("Questão 1 - Valor de SOMA:", SOMA); // Valor final: 91


// Questão 2: Verificar se um número pertence à sequência de Fibonacci
function isFibonacci(num) {
  let a = 0, b = 1, next = 0;
  
  while (next < num) {
    next = a + b;
    a = b;
    b = next;
  }

  return next === num || num === 0;
}

const number = 21; // Altere este valor para qualquer outro número que queira testar
console.log("Questão 2 - O número", number, isFibonacci(number) ? "pertence" : "não pertence", "à sequência de Fibonacci.");


// Questão 3: Cálculo de faturamento diário 
const db = require('./DB.json'); // Importa o arquivo JSON

function calcularFaturamento(faturamento) {
  // Inicializa 'menor' e 'maior' com o valor do primeiro elemento do array
  let menor = faturamento[0].valor;
  let maior = faturamento[0].valor;
  let soma = 0;
  let diasComFaturamento = 0;

  faturamento.forEach(dia => {
    if (dia.valor > 0) { // Ignora dias sem faturamento
      // Atualiza o menor valor se o valor atual for menor
      if (dia.valor < menor) menor = dia.valor;
      // Atualiza o maior valor se o valor atual for maior
      if (dia.valor > maior) maior = dia.valor;
      
      // Acumula o valor para calcular a média depois
      soma += dia.valor;
      diasComFaturamento++;
    }
  });

  // Calcula a média dos dias com faturamento
  const media = soma / diasComFaturamento;

  // Conta os dias com faturamento acima da média
  const diasAcimaDaMedia = faturamento.filter(dia => dia.valor > media).length;

  return { menor, maior, diasAcimaDaMedia };
}

console.log("Questão 3 - Faturamento:", calcularFaturamento(db.faturamento));


// Questão 4: Percentual de representação por estado
const estados = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

const total = Object.values(estados).reduce((acc, val) => acc + val, 0);

console.log("Questão 4 - Percentual de representação por estado:");
for (let estado in estados) {
  const percentual = (estados[estado] / total) * 100;
  console.log(`${estado}: ${percentual.toFixed(2)}%`);
}


// Questão 5: Inverter os caracteres de uma string 
function reverseString(str) {
  let reversed = '';
  
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  
  return reversed;
}

const string = "exemplo"; 
console.log("Questão 5 - String invertida:", reverseString(string));
