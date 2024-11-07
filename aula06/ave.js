const { Animal } = require('./animal');

class Ave extends Animal{
    #tipoBico;
    #capacidadeVoo;

    constructor(nome, idade, tipoBico, capacidadeVoo){
        super(nome, idade);

        this.#tipoBico = tipoBico;
        this.#capacidadeVoo = capacidadeVoo;
    }

    get getTipoBico(){
        return this.#tipoBico;
    }

    set setTipoBico(tipoBico){
        this.#tipoBico = tipoBico;
    }

    get getCapacidadeVoo(){
        return this.#capacidadeVoo;
    }

    set setCapacidadeVoo(capacidadeVoo){
        this.#capacidadeVoo = capacidadeVoo;
    }

    emitirSom(){
        console.log('A ave canta ou pia')
    }

    getInfo(){
        console.log(`Nome: ${this.getNome}, Idade: ${this.getIdade}, Tipo de Bico: ${this.getTipoBico}, Capacidade de Voo: ${this.getCapacidadeVoo}`);
    }
}

module.exports = { Ave }