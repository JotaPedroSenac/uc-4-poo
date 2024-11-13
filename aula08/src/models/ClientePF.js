const { Cliente } = require('./Cliente');

class ClientePF extends Cliente{
    #CPF;

    constructor(nome, dataNascimento, telefone, email, CPF){
        super(nome, dataNascimento, telefone, email)
        this.#CPF = CPF;
    }

    get getCPF(){
        return this.#CPF;
    }

    set setCPF(novoCPF){
        this.#CPF = novoCPF;
    }

}

module.exports = { ClientePF };