const carros = ["Uno", "Fusca", "Escort", "Gol"];

const conteudo = document.getElementById("conteudo");

let dados = "";
let i = 0;
while(i < carros.length){
    dados += `<p> ${carros[i]} </p>`;
    i++;
}

const secao = document.createElement("div");
secao.innerHTML = `<h2>Loop While</h2> ${dados}`;
conteudo.appendChild(secao);

let carro = {marca: "ford", modelo:"ka", ano:"2000"};

console.log(carro.marca);