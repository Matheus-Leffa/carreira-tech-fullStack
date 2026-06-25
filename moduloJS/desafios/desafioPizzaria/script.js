
function pedirPizza(numPizza){

    const conteudo = document.getElementById('conteudo');

    switch (numPizza) {
        case '1':
            conteudo.innerHTML = "Preparando pizza de calabresa";
            break;
        
        case '2':
            conteudo.innerHTML = "Preparando pizza de quatro queijos";
            break;

        case '3':
            conteudo.innerHTML = "Preparando pizza de frango com catupiry";
            break;

        case '4':
            conteudo.innerHTML = "Preparando pizza de brigadeiro";
            break;
    
        default:
            conteudo.innerHTML = "Digite um valor válido!";
            break;
    }
}