class Dado{
    #face;

    constructor(){

        this.#face = Math.floor(Math.random() * 6) +1;
        Object.freeze(this);
    }

    get getFace(){
        return this.#face;
    }

    setFace(face){
        this.#face = face;
    }
}

module.exports = { Dado };

// teste

// let dado01 = new Dado();
// console.log(dado01.getFace);
// node dado01.js
