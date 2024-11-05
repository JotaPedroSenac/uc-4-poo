const { Animal } = require('./animal');

class Cachorro extends Animal {
    #raca
    constructor(raca){
        super() //Para poder utilizar o construtor da classe Animal
        this.#raca = raca;
    }

    emitirSom(){
        console.log(`${this.getNome} faz au au`)
    }
}

module.exports = { Cachorro }