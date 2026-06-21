function verificarAprovacao(){
    let nota = document.getElementById("nota").value;
    if(nota >= 7){
        document.getElementById("resultado").innerHTML = "Aluno aprovado!";
    }else{
        document.getElementById("resultado").innerHTML = "Aluno reprovado!";
    }
}