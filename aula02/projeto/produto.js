class Produto{
    #nome;
    #preco;

    constructor(nome, preco){
        this.#nome = nome;
        this.#preco = preco;

        Object.freeze(this);
    }

    getInfoProduto(){
        // retonar nome e preço do produto
        return 'Produto: ' + this.#nome + ', valor: ' + this.#preco;
    }

    get getNome(){
        return this.#nome
    }

    set setNome(nome){
        this.#nome = nome;
    }

    get getPreco(){
        return this.#preco
    }

    set setPreco(preco){
        this.#preco = preco;
    }


}

module.exports = { Produto };