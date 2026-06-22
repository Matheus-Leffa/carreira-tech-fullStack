function calcularDesconto(){
   
    let preco = document.getElementById("preco").value;
    if(preco <= 0){
       alert("Preço não pode ser 0 ou negativo");
       return;
    }

    let porcentagem = document.getElementById("porcentagem").value;
    if(porcentagem < 0){
       alert("Porcentagem não pode ser 0 ou negativo");
       return;
    }

    let desconto = preco * (porcentagem / 100);

    let precoFinal = preco - desconto;

    alert(`Preço do produto: R$${preco}\n
       Valor do desconto: R$${desconto} (${porcentagem}%)\n
       Preço final com desconto: R$${precoFinal}`);

    console.log(`Preço do produto: R$${preco}\n
       Valor do desconto: R$${desconto} (${porcentagem})\n
       Preço final com desconto: R$${precoFinal}`)       
}