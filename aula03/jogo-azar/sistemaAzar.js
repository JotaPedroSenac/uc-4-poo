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
            console.log("Deu bom! resposta correta")
        }else{
            console.log("Deu ruim, a face do dado é: ", this.#dado.getFace, "mas a sua aposta foi", this.#jogador.getAposta)
        }
    }
}

module.exports = { SistemaAzar };