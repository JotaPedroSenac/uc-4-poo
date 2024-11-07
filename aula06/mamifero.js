const { Animal } = require('./animal');

class Mamifero extends Animal{
    #tipoPelo;
    #habitat;

    constructor(nome, idade, tipoPelo, habitat){
        super(nome, idade);
        this.#tipoPelo = tipoPelo;
        this.#habitat = habitat;
    }

    get getTipoPelo(){
        return this.#tipoPelo;
    }

    set setTipoPelo(tipoPelo){
        this.#tipoPelo = tipoPelo;
    }

    get getHabitat(){
        return this.#habitat;
    }

    set setHabitat(habitat){
        this.#habitat = habitat;
    }

    emitirSom(){
        console.log('O mamifero ruge ou grunhe')
    }

    getInfo(){
        console.log(`Nome: ${this.getNome}, Idade: ${this.getIdade}, Tipo Pelo: ${this.getTipoPelo}, Habitat: ${this.getHabitat}`);
    }
}

module.exports = { Mamifero }