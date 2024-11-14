const { databasenotebook } = require('../config/databaseNotebook');
const { ControllerNotebook } = require('../controllers/controllerNotebook');
const prompt = require('prompt-sync')();
const controllerNote = new ControllerNotebook();

let opcao;
let numeroSerie;

do {
    console.log('==== Menu ====')
    console.log('1. Para cadastrar um notebook');
    console.log('2. Para editar um notebook');
    console.log('3. Para listar os notebooks cadastrados');
    console.log('4. Para excluir um notebook');
    console.log('5. Para excluir todos os notebooks');
    console.log('6. Para sair')

    opcao = parseInt(prompt('Digite uma opção: '));
    switch (opcao) {
        case 1:
            numeroSerie = parseInt(prompt('Digite o numero de série do notebook: '));
            const marca = prompt('Digite a marca do notebook: ');
            const modelo = prompt('Digite o modelo do notebook: ');
            const preco = parseInt(prompt('Digite o preço do notebook: '));
            controllerNote.criarNotebook(numeroSerie, marca, modelo, preco);
            break;
        case 2:
            numeroSerie = parseInt(prompt('Digite o numero de série do notebook: '));
            const novaMarca = prompt('Digite a nova marca do notebook: ');
            const novoModelo = prompt('Digite o novoModelo do notebook: ');
            const novoPreco = parseInt(prompt('Digite o novo preço do notebook'));
            controllerNote.editarNotebook(numeroSerie, novaMarca, novoModelo, novoPreco);
            break;
        case 3:
            controllerNote.listarNotebooks();
            break;
        case 4:
            numeroSerie = parseInt(prompt('Digite o numero de Serie do Notebook: '));
            controllerNote.excluirNotebook(numeroSerie);
            break;
        case 5:
            controllerNote.excluirTodoNotebooks()
            break;
        case 6:
            console.log('Saindo do sistema');
            break;
        default:
            console.log('Valor inválido')
            break;
    }
} while (opcao !== 6);