class Pessoa {
    constructor(nome, email, telefone){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
    exibirInfo(){
        return `${this.nome}, ${this.email}, ${this.telefone}`
    }
}

module.exports = { Pessoa };