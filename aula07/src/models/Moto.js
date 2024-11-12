const { Veiculo } = require('./Veiculo');

class Moto extends Veiculo{
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
        console.log(`Valor estimado da moto: R$ ${(2024 - this.getAno) * 1000}`);
    }

    getInfo(){
        console.log(`Marca: ${this.getMarca}, Ano: ${this.getAno}, Cor: ${this.getCor}, Modelo: ${this.getModelo}`);
    }
}
module.exports = { Moto }