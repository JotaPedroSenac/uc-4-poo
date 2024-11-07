const { Animal } = require('./animal');
const { Mamifero } = require('./mamifero');
const { Ave } = require('./ave');

const gato = new Animal('Pedro', 23);
gato.getInfo();

const macaco = new Mamifero('Zoobumafoo', 5, 'liso', 'floresta');
macaco.getInfo();

const pinguin = new Ave('Kobolwsky', 5, 'Normal', 'Não tem');
pinguin.getInfo();