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

    vezDoX = true;

    limparArrayTabuleiro();

    celulas.forEach(celula =>{
        celula.textContent = "";
        celula.addEventListener('click', tratarClique, {once:true});
    })
}

function tratarClique(evento) {
    const indice = Array.from(celulas).indexOf(evento.target);

    const simbolo = vezDoX ? "X" : "O";

    tabuleiro[indice] = simbolo;
    evento.target.textContent = simbolo;

    console.log(tabuleiro);

    vezDoX = !vezDoX;

    verificarVitoria();
}

function limparArrayTabuleiro(){
    tabuleiro = [
    "","","",
    "","","",
    "","",""
    ]

}

function verificarVitoria(){

    for(let i = 0; i < combinacoesVitoria.length; i++){
        const combinacao = combinacoesVitoria[i];
        const a = combinacao[0];
        const b = combinacao[1];
        const c = combinacao[2];

        if(tabuleiro[a] != "" && tabuleiro[a] === tabuleiro[b] && tabuleiro[b] === tabuleiro[c]){
            alert(`Jogador ${tabuleiro[a]} venceu!`);
            iniciarJogo();
            break;
        }
        if (verificarEmpate()) {
        alert("Empate!");
        iniciarJogo();
        }
    }
}

function verificarEmpate(){

    for(let i = 0; i < tabuleiro.length; i++){
        if(tabuleiro[i] === ""){
            return false;
        }
    }

    return true;
}

iniciarJogo();