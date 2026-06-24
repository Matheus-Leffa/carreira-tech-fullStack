function efetuarOperacao(){

    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operador = document.getElementById("operador").value;
    let resultado;

    switch(operador){
        
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if(num2 === 0){
                alert("Não é possível fazer divisão por 0");
                break;
            }

            resultado = num1 / num2;
            break;

        default:
            alert("Digite uma operação válida!");
            break;
    }

    document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
}