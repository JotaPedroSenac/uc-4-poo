const { Veiculo } = require('./Veiculo');

class Carro extends Veiculo{
    #modelo;
    #cor;
    constructor(marca, ano, modelo, cor){
        super(marca, ano);
        this.#cor = cor;
        this.#modelo = modelo;
        Object.freeze(this)
    }

    get getCor(){
        return this.#cor
    }

    set setCor(cor){
        this.#cor = cor;
    }

    set setModelo(modelo){
        this.#modelo = modelo;
    }

    get getModelo(){
        return this.#modelo;
    }

    calcularValor(){
        console.log(`Valor estimado do carro: R$ ${(2024 - this.getAno) * 10000}`);
    }

    getInfo(){
        console.log(`Marca: ${this.getMarca}, Ano: ${this.getAno}, Cor: ${this.getCor}, Modelo: ${this.getModelo}`);
    }
}
module.exports = { Carro }