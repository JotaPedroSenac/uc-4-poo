const  { SistemaAzar }  = require("./sistemaAzar");
const  { Dado }  = require("./dado");
const  { Jogador }  = require("./jogador");

const jogada1 = new Dado();
const jogador = new Jogador('Jorel', 4);
const sistema1 = new SistemaAzar(jogador, jogada1);

sistema1.verificarGanhador();

console.log(jogada1.getFace)