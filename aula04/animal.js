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

    set setNome(nome){
        this.#nome = nome;
    }


    emitirSom(){
        console.log(`${this.#nome} está falando: au au`)
    }
}

module.exports = { Animal }