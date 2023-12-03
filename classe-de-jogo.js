class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        for(let i = 0; i < 4; i++){
            let tipoMagia = [["Mago", "Magia"], ["Guerreiro", "Espada"], ["Monge", "Artes Marciais"], ["Ninja", "Shuriken"]];
            if(this.tipo == tipoMagia[i][0]){
                console.log(`O ${this.tipo} atacou usando ${tipoMagia[i][1]}`);
            }
        }
    }

}

let heroiMago = new heroi("Mago negro", 20, "Mago");
let heroiGuerreiro = new heroi("Arthur", 50, "Guerreiro");
let heroiMonge = new heroi("Shadaka", 999, "Monge");
let heroiNinja = new heroi("Sasuke", 17, "Ninja");

heroiMago.atacar();
heroiGuerreiro.atacar();
heroiMonge.atacar();
heroiNinja.atacar();