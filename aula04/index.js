const { Animal } = require('./animal')
const { Cachorro } = require('./cachorro')

let a1 = new Animal('jorel', 14, 'marrom')
let c1 = new Cachorro('SDR', 'Joel', 15, 'Preto');

a1.emitirSom();
c1.emitirSom();