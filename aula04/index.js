const { Animal } = require('./animal')
const { Cachorro } = require('./cachorro')

let c1 = new Animal('jorel', 14, 'marrom')
let a1 = new Cachorro('Joel', 'SDR', 15, 'Preto');

// c1.emitirSom();
// a1.emitirSom();
console.log(c1.getNome); //herdado de animal