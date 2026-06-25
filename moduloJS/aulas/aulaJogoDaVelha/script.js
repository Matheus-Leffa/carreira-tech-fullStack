const celulas = document.querySelectorAll('.celula');

let tabuleiro = 
[
"","","",
"","","",
"","",""
];

let combinacoesVitoria = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let vezDoX = true;

document.getElementById("botaoReiniciar").addEventListener('click', iniciarJogo);

function iniciarJogo(){
    celulas.forEach(celula =>{
        celula.textContent = "";
        celula.addEventListener('click', tratarClique, {once:true});
    })

    limparArrayTabuleiro();
}

function tratarClique(evento) {
    const indice = Array.from(celulas).indexOf(evento.target);

    const simbolo = vezDoX ? "X" : "O";

    tabuleiro[indice] = simbolo;
    evento.target.textContent = simbolo;

    console.log(tabuleiro);

    vezDoX = !vezDoX;

    verificarVitoria(tabuleiro);
}

function limparArrayTabuleiro(){
    tabuleiro = [
    "","","",
    "","","",
    "","",""
    ]

}

function verificarVitoria(tabuleiro){
    
}

iniciarJogo();