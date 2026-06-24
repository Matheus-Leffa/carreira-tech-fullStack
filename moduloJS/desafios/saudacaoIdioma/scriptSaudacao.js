function saudar(){

    let idioma = document.getElementById("idioma");
    let valorIdioma = idioma.value;
    let saudacao;

    switch(valorIdioma){

        case "portugues":
            saudacao = "Olá, estrangeiro!";
            console.log(saudacao);
            break;

        case "ingles":
            saudacao = "Hello, stranger!";
            break;

        case "espanhol":
            saudacao = "Hola, extranjero!";
            break;

        default:
            break;
    }

    document.getElementById("saudacao").innerHTML = saudacao;
}