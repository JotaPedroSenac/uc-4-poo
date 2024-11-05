const  { SistemaAzar }  = require("./sistemaAzar");
const  { Dado }  = require("./dado");
const  { Jogador }  = require("./jogador");
const prompt = require("prompt-sync")();

let aposta;

// const nome = prompt('Digite o seu nome');

function executar(){
    console.log('Bem vindo ao Jogo BetTiger ');
    let novoTurno = '';

    do {
        const nome = prompt("Qual o nome do jogador: ")
        const aposta = parseInt(prompt("Digite um valor de 1 a 6: "));
        const lance = new Dado();
        const jogador1 = new Jogador(nome, aposta)
        const tigrinho = new SistemaAzar(jogador1, lance);
        tigrinho.verificarGanhador();
        novoTurno = prompt("Digite 'sim' para uma nova aposta ou 'não' para sair: ")
    } while (novoTurno != 'nao');
}

executar();

// do {
//     aposta = parseInt(prompt("Digite a sua aposta:"))
// } while (isNaN(aposta) || aposta < 1 || aposta > 6);

// const jogada1 = new Dado();
// // const jogador = new Jogador('Jorel', 4);
// const jogador = new Jogador(nome, aposta);
// const sistema1 = new SistemaAzar(jogador, jogada1);

// sistema1.verificarGanhador();

// console.log("face do dado:", jogada1.getFace)