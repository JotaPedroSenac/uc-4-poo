const  { Dado }  = require("./dado");
const  { Jogador }  = require("./jogador");

class SistemaAzar{
    #jogador;
    #dado;

    constructor(jogador, dado){
        if (jogador instanceof Jogador) {
            this.#jogador = jogador;
        }

        if(dado instanceof Dado){
            this.#dado = dado;
        }
    }

    verificarGanhador(){
        if (this.#dado.getFace == this.#jogador.getAposta) {
            console.log("Deu bom!")
        }else{
            console.log('Deu ruim', this.#dado.getFace)
        }
    }
}

module.exports = { SistemaAzar };