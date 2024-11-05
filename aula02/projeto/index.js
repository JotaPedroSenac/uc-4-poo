const prompt = require("prompt-sync")();

const { Pedido } = require("./pedido");
const { Produto } = require("./produto");

function adicionarProdutosAoPedido() {
    const pedido = new Pedido();
    while (true) {
        const nome = prompt("Digite o nome do produto(ou 'sair' para finalizar)");
        if(nome.toLowerCase() === 'sair') break;
        const preco = parseFloat(prompt("Digite o preço do produto:"))
        if (isNaN(preco) || preco < 0) {
            console.log("Preço inválido");
            continue;
        }

        const produto = new Produto(nome, preco)
        pedido.adicionarProduto(produto);
        console.log(`Produto ${produto.getNome} adicionado com sucesso!`)
    }

    pedido.mostrarPedido();
}

adicionarProdutosAoPedido();
// instanciar os objeto de tipo pedido e produto
// varios produtos e só um pedido

// const p1 = new Produto('Carro', 10000);
// // const p2 = new Produto('Bermuda', '100000');
// const p3 = new Produto('Tenis', 1000);

// const pedido01 =  new Pedido();
// pedido01.adicionarProduto(p1);
// pedido01.adicionarProduto(p3);
// pedido01.mostrarPedido();



