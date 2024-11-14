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
                    console.log(`Numero de série: ${notebook.getNumeroDeSerie}, Marca: ${notebook.marca}, Modelo: ${notebook.modelo}, Preço: ${notebook.getPreco}`);
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
            const notebook = databasenotebook.find(note=> note.getNumeroDeSerie == numeroDeSerie);
            if(notebook){
                notebook.marca = novaMarca;
                notebook.modelo = novoModelo;
                notebook.setPreco = novoPreco;

                console.log(`Notebook ${notebook.marca} alterado com sucesso!`);
            }else{
                console.log('Notebook não encontrado!')
                console.log(databasenotebook.numeroDeSerie);
            }
        } catch (error) {
            console.error('Erro ao editar Notebook', error.message);
            
        }
    }

    excluirNotebook(numeroDeSerie){
        try {
            const indice = databasenotebook.findIndex(notebook => notebook.getNumeroDeSerie === numeroDeSerie);
            if (indice !== -1) {
                databasenotebook.splice(indice, 1);
                console.log('Notebook excluido com sucesso!')
            }else{
                console.log('Erro ao excluir notebook, confira o número de série')
            }
        } catch (error) {
            console.error('Erro ao excluir Notebook', error.message)
        }
    }

    excluirTodoNotebooks(){
        try {
            if (databasenotebook.length > 0) {
                databasenotebook.length = 0;
                console.log('Notebooks excluidos com sucesso!')
            }else{
                console.log('Não existem notebooks cadastrados!')
            }
        } catch (error) {
            console.error('Erro ao excluir todos os notebooks!', error.message)
        }
    }
}

// teste

// const controllerNote = new ControllerNotebook();
// controllerNote.criarNotebook('123', 'Dell', 'inspiron', '5000');
// controllerNote.listarNotebooks();
// controllerNote.editarNotebook('123', 'teste', 'teste', '5000');
// controllerNote.listarNotebooks();
// controllerNote.excluirNotebook('123')
// controllerNote.listarNotebooks();
// controllerNote.excluirTodoNotebooks();

module.exports = { ControllerNotebook };