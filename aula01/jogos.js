class Jogos{
    titulo;
    genero;
    anoLancamento;

    constructor(titulo, genero, anoLancamento){
        this.titulo = titulo;
        this.genero = genero;
        this.anoLancamento = anoLancamento
    }

    getTitulo(){
        return this.titulo;
    }

    setTitulo(titulo){
        this.titulo = titulo;
    }
    getGenero(){
        return this.genero;
    }

    setGenero(genero){
        this.genero = genero;
    }

    getAnoLancamento(){
        return this.anoLancamento;
    }

    setAnoLancamento(anoLancamento){
        this.anoLancamento = anoLancamento;
    }

    exibirJogo(){
        console.log(`Nome: ${this.titulo}, Gênero: ${this.genero}, Ano de Lançamento: ${this.anoLancamento}`)
    }
}

let jogo01 = new Jogos("counterStrike", "fps", "2000");
let jogo02 = new Jogos("Mario", "aventura", "1985");
let jogo03 = new Jogos("Fortnite", "battle Royale", "2011");

jogo01.exibirJogo();
jogo02.exibirJogo();
jogo03.exibirJogo();