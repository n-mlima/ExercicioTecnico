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
const faturamento = [ 
  { "dia": 1, "valor": 1000 },
  { "dia": 2, "valor": 1500 },
  { "dia": 3, "valor": 0 }, 
  { "dia": 4, "valor": 2000 },
  { "dia": 5, "valor": 1200 },
  
];

function calcularFaturamento(faturamento) {
  let menor = Infinity;
  let maior = -Infinity;
  let soma = 0;
  let diasComFaturamento = 0;

  faturamento.forEach(dia => {
    if (dia.valor > 0) { // ignora dias sem faturamento
      if (dia.valor < menor) menor = dia.valor;
      if (dia.valor > maior) maior = dia.valor;
      soma += dia.valor;
      diasComFaturamento++;
    }
  });

  const media = soma / diasComFaturamento;
  const diasAcimaDaMedia = faturamento.filter(dia => dia.valor > media).length;

  return { menor, maior, diasAcimaDaMedia };
}

console.log("Questão 3 - Faturamento:", calcularFaturamento(faturamento));


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
