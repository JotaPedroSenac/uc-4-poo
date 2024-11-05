class Dado{
    #face;

    constructor(){

        this.#face = Math.floor(Math.random() * 6) +1;
    }

    get getFace(){
        return this.#face;
    }

    // setFace(face){
    //     this.#face = face;
    // }
}

module.exports = { Dado };