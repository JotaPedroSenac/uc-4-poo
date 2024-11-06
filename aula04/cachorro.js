const { Animal } = require('./animal');

class Cachorro extends Animal {
    #raca
    constructor(nome, raca){
        super(nome) //Para poder utilizar o construtor da classe Animal(pai)
        this.#raca = raca;
    }

    emitirSom(){
        console.log(`${this.getNome} faz au au, sou da raça ${this.#raca} e emito o som au au`)
    }
}

module.exports = { Cachorro }