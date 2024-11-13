const { databasenotebook } = require('../config/databaseNotebook');
const { Notebook } = require('../models/Notebook');

class ControllerNotebook{
    criarNotebook(numeroDeSerie, marca, modelo, preco){
        try {
            const novoNotebook = new Notebook(numeroDeSerie, marca, modelo, preco)
            databasenotebook.push(novoNotebook);
            console.log(`Notebook ${novoNotebook.marca} adicionado com sucesso!`)
            return novoNotebook;
            
        } catch (error) {
            console.error('Não foi possível criar notebook', error.message)
        }
    }

    listarNotebooks(){
        try {
            if(databasenotebook.length > 0){
                console.log('Notebooks criados:')
                databasenotebook.forEach(notebook => {
                    console.log(notebook);
                });
            }else{
                console.log('Nenhum Notebook cadastrado!')
            }
        } catch (error) {
            console.error('Erro ao listar Notebooks')
        }
    }

    editarNotebook(numeroDeSerie, novaMarca, novoModelo, novoPreco){
        try {
            const notebook = databasenotebook.find(notebook  => notebook.numeroDeSerie === numeroDeSerie);
            if(notebook){
                
            }
        } catch (error) {
            
        }
    }

    excluirNotebook(){
        try {
            
        } catch (error) {
            
        }
    }

    excluirTodoNotebooks(){
        try {
            
        } catch (error) {
            
        }
    }
}

// teste

const controllerNote = new ControllerNotebook();
controllerNote.criarNotebook('123', 'Dell', 'inspiron', '5000');
controllerNote.listarNotebooks();

module.exports = { ControllerNotebook };