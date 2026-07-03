class Produto{
    constructor(id, nome, preco){
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
}


function carregarProduto(id){
    
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            let sucesso = Math.random() > 0.1;

            if (sucesso) {
                const produto1 = new Produto(id, "TV", 1500);
                resolve(produto1);
            } else {
                reject("Falha ao criar o produto")
            }

            
        }, 2000);
    });
}

/*
carregarProduto(1).then((produto1) =>{
    console.log(`Produto ${produto1.nome} com id ${produto1.id} criado com sucesso!`);
    const produtoJSON = JSON.stringify(produto1);
    console.log(produtoJSON);
    const produtoObj = JSON.parse(produtoJSON);
    console.log(produtoObj);
}).catch((erro) => {
    console.log(erro);
});
*/

const funcaoAsync = async () => {
    try {
        
        const resultado = await carregarProduto(1);
        console.log(resultado)


    } catch (error) {
        console.log(error);
    }
}

funcaoAsync();