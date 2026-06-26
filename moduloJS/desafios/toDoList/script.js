function adicionarTarefa(){
    const inputTarefa = document.getElementById("tarefa").value;

    const itemLista = document.createElement('li');

    itemLista.textContent = inputTarefa;

    const lista = document.getElementById("lista");

    lista.appendChild(itemLista);
}