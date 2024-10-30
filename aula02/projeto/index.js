const { Pedido } = require("./pedido");
const { Produto } = require("./produto");

// instanciar os objeto de tipo pedido e produto
// varios produtos e só um pedido

const p1 = new Produto('Carro', '100000');
const p2 = new Produto('Bermuda', '100000');
const p3 = new Produto('Tenis', '100000');

const pedido01 =  new Pedido();
pedido01.adicionarProduto(p1);
pedido01.adicionarProduto(p3);

pedido01.mostrarPedido();


