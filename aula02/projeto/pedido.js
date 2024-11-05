const  { Produto }  = require("./produto");

class Pedido{

    #produtos;

    constructor(){
        this.#produtos = [];
        Object.freeze(this);
    }

    adicionarProduto(produto){
        if (produto instanceof Produto) {
            this.#produtos.push(produto);
        }else{
            console.log('Somente objetos do tipo produto podem ser adicionados');
        }
    }

    calcularTotal(){
        return this.#produtos.reduce((total, produto) => total + produto.getPreco, 0);
    }

    mostrarPedido(){
        console.log('Resumo do Pedido:');
        this.#produtos.forEach(produto => {
            console.log(produto.getInfoProduto());
        });

        console.log(`Total: ${this.calcularTotal()}`)
    }
}

module.exports = { Pedido };

// não precisade get