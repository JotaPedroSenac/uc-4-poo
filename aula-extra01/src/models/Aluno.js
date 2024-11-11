const { Pessoa } = require('./Pessoa');

class Aluno extends Pessoa {
    #matricula;
    #curso;
    constructor(nome, email, telefone, matricula, curso){
        super(nome, email, telefone)
        this.#matricula = matricula;
        this.#curso = curso;
    }
    exibirAluno(){

    };
    // getters, setters
    get getMatricula(){
        return this.#matricula;
    }

    set setMatricula(novaMatricula){
        if (novaMatricula && novaMatricula.length === 5) {
            this.#matricula = novaMatricula;
        }else{
            console.log("Matricula não informada ou tamanho inválido")
        }
    }

    get getCurso(){
        return this.#curso;
    }

    set setCurso(novoCurso){
        if (novoCurso && novoCurso instanceof Curso) {
            this.#curso = novoCurso;
        }else{
            console.log("Curso inválido ou não existe")
        }
    }

    exibirAluno(){
        return `${super.exibirInfo()}, Matricula: ${this.getMatricula}, Curso: ${this.getCurso}`
    }

}

module.exports = { Aluno }