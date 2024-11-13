const { Notebook } = require("./Notebook");

class Estoque{
    quantidade;
    produtos;

    constructor(produtos, quantidade){
        this.quantidade = quantidade;
        if (produtos instanceof Notebook) {
            this.produtos = produtos;
        }
    }

    listarEstoque(){

    }
}

module.exports = { Estoque };