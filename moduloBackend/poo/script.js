class Produto{
    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }

    mostrarDetalhes(){
        console.log(`Nome do produto: ${this.nome} \n
            Preço: R$${this.preco}`);
    }
}

class Eletronico extends Produto{
    constructor(nome, preco, garantia){
        super(nome, preco);
        this.garantia = garantia;
    }

    mostrarDetalhes(){
        console.log(`Nome do produto: ${this.nome} \n
            Preço: R$${this.preco} \n
            Garantia: ${this.garantia} anos`);
    }
}

const produto = new Produto("mesa", 500);
produto.mostrarDetalhes();

const eletronico = new Eletronico("telefone", 1500, 3);
eletronico.mostrarDetalhes();

