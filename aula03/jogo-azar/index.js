const  { SistemaAzar }  = require("./sistemaAzar");
const  { Dado }  = require("./dado");
const  { Jogador }  = require("./jogador");
const prompt = require("prompt-sync")();

let aposta;

const nome = prompt('Digite o seu nome');

do {
    aposta = parseInt(prompt("Digite a sua aposta:"))
} while (isNaN(aposta) || aposta < 1 || aposta > 6);

const jogada1 = new Dado();
// const jogador = new Jogador('Jorel', 4);
const jogador = new Jogador(nome, aposta);
const sistema1 = new SistemaAzar(jogador, jogada1);

sistema1.verificarGanhador();

// console.log("face do dado:", jogada1.getFace)