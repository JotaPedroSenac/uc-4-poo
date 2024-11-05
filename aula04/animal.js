class Animal{
    #nome;
    #idade;
    #corPelo

    constructor(nome, idade, corPelo){
        this.#nome = nome;
        this.#idade = idade;
        this.#corPelo = corPelo;
    }

    get getNome(){
        return this.#nome;
    }

    emitirSom(){
        console.log('som, som, som')
    }
}

module.exports = { Animal }