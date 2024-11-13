class Notebook{
    #numeroDeSerie;
    marca;
    modelo;
    #preco;

    constructor(numeroDeSerie, marca, modelo, preco){
        this.#numeroDeSerie = numeroDeSerie;
        this.marca = marca;
        this.modelo = modelo;
        this.#preco = preco;
    }

    get getNumeroDeSerie(){
        return this.#numeroDeSerie;
    }

    set setNumeroDeSerie(novoNumeroSerie){
        this.#numeroDeSerie = novoNumeroSerie;
    }

    get getPreco(){
        return this.#preco;
    }

    set setPreco(novoPreco){
        this.#preco = novoPreco;
    }
}

module.exports = { Notebook };