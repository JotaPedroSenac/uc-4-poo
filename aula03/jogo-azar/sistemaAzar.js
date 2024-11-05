const  { Dado }  = require("./dado");
const  { Jogador }  = require("./jogador");

class SistemaAzar{
    #jogador;
    #dado;

    constructor(jogador, dado){

        Object.freeze(this);

        if (jogador instanceof Jogador) {
            this.#jogador = jogador;
        }else{
            console.log('os dados fornecidos não são do tipo jogador');
        }

        if(dado instanceof Dado){
            this.#dado = dado;
        }else{
            console.log('os dados fornecidos não são do tipo dado');
        }

        
    }

    get getDado(){
        return this.#dado;
    }

    get getJogador(){
        return this.#jogador
    }

    set setDado(dado){
        this.#dado = dado;
    }

    set setJogador(jogador){
        this.#jogador = jogador;
    }

    verificarGanhador(){
        if (this.#dado.getFace === this.#jogador.getAposta) {
            console.log("Deu bom! resposta correta")
        }else{
            console.log("Deu ruim, a face do dado é: ", this.#dado.getFace, "mas a sua aposta foi", this.#jogador.getAposta)
        }
    }
}

module.exports = { SistemaAzar };

