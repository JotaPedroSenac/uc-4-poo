const { contaPoupanca } = require('./contaPoupanca');
// const { Conta } = require('./conta');

const poupanca01 = new contaPoupanca('Valtemir', 5);

console.log(poupanca01.getSaldo);
console.log(poupanca01.setSaldo = 50);
poupanca01.atualizarRendimento();
console.log(poupanca01.getSaldo);
poupanca01.sacar(10);
console.log(poupanca01.getSaldo);