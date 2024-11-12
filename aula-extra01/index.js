const { AlunoController } = require('./src/controllers/controllerAluno');
const { Curso } = require('./src/models/Curso');

const excelDaNasa = new Curso('Excel da Nasa', 'Curso Preparatorio para dev da nasa');

// instancia do AlunoController

const alunoController = new AlunoController();
alunoController.listarAluno()
alunoController.adicionarAluno('Joao', 'joao@email.com', '84999999999', 'a1234', excelDaNasa.nome)
alunoController.listarAluno();

