class Jogador{
    #nome;
    #aposta;

    constructor(nome, aposta){
        this.#nome = nome;
        this.#aposta = aposta;
        Object.freeze(this);
    }


    get getNome(){
        return this.#nome;
    }

    setNome(nome){
        this.#nome = nome;
    }

    get getAposta(){
        return this.#aposta;
    }

    setAposta(aposta){
        this.#aposta = aposta;
    }
}

module.exports = { Jogador };

// teste

// let jogador01 = new Jogador('Jp', 4);
// console.log(jogador01.getNome, jogador01.getAposta);
// console.log(jogador01.getNome);
// jogador.js