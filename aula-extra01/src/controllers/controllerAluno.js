const { alunos } = require('../config/database');
const { Aluno } = require('../models/Aluno')

class AlunoController{
    adicionarAluno(nome, email, telefone, matricula, curso){
        try {
            const novoAluno = new Aluno(nome, email, telefone, matricula, curso)
            alunos.push(novoAluno);
            return novoAluno
        } catch (error) {
            console.error('Erro ao Criar alunos', error.message)
        }
    }
    editarAluno(matricula, novoNome, novoEmail, novoTelefone, novoCurso){
        try {
            const aluno = alunos.find(aluno => aluno.matricula === matricula)
            if(aluno){
                aluno.nome = novoNome || aluno.nome;
                aluno.email = novoEmail || aluno.email;
                aluno.telefone = novoTelefone ||  aluno.telefone;
                aluno.curso = novoCurso || curso;
    
            }else{
                console.log("Aluno não encontrado")
            }
        } catch (error) {
            console.error('Erro ao editar alunos', error.message)
        }
    }
    excluirAluno(){
        try {
            const index = alunos.findIndex(aluno=>aluno.matricula === matricula)
            if(index !== -1){
                const alunoRemovido = alunos.splice(index, 1)
                return alunoRemovido;
            }else{
                console.log('Aluno não encontrado!')
            }
        } catch (error) {
            console.error('Erro ao excluir aluno', error.message)
        }
    }
    listarAluno(){
        try {
            console.table(alunos)
        } catch (error) {
            console.error("Erro ao listar alunos", error.message)
        }
    }
}

module.exports = { AlunoController }