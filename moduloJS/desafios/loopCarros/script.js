const carros = ["fusca", "argo", "brasilia", "monza"];

let i = 0;
let continuar;

do {
    console.log(carros[i]);

    continuar = prompt("Deseja continuar? (S/N)");

    i++;

} while (
    continuar.toUpperCase() === "S" &&
    i < carros.length
);

