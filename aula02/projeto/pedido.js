const  { Produto }  = require("./produto");

class Pedido{

    #produtos;

    constructor(){
        this.#produtos = [];
        Object.freeze(this);
    }

    adicionarProduto(produto){
        if (produto instanceof Produto) {
            this.#produtos.push(Produto);
        }else{
            console.log('Somente objetos do tipo produto podem ser adicionados');
        }
    }

    calcularTotal(){
        // retornar o total do pedido
        return this.#produtos[0].Produto.getPreco;
        
    }

    mostrarPedido(){
        console.log('Resumo do Pedido:');
        this.#produtos.forEach(produto => {
            console.log(produto.getInfoProduto());
        });
    }
}

module.exports = { Pedido };

// não precisade get