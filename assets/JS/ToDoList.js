const form = document.getElementsByTagName("form")[0]; //seleziono il primo elemento <form> trovato nel documento HTML e lo memorizzo nella variabile form

form.onsubmit = function (e) {
  //assegno una funzione all'evento submit del form. La funzione viene eseguita ogni volta che il form viene sottoposto
  e.preventDefault(); //prevengo il comportamento predefinito del form quando viene sottoposto, che è quello di ricaricare la pagina

  const taskInput = document.getElementById("itemTextBox"); //seleziono l'elemento dell'input del form con l'id "itemTextBox" e lo memorizzo nella variabile taskInput
  const task = taskInput.value;

  const main = document.getElementsByTagName("main")[0]; //seleziono il primo elemento <main> nel documento HTML e lo memorizzo nella variabile main

  const listItem = document.createElement("p");
  listItem.className = "task";
  listItem.innerText = task; // il testo del compito inserito viene impostato come testo dell'elemento <p>.

  const button = document.createElement("button"); //creo un nuovo bottone
  button.innerText = "Remove";
  button.onclick = function (e) {
    //al click del bottone verrà eliminato l'elemento task creato
    const removeBtn = e.target;
    removeBtn.parentNode.remove();
  };

  listItem.appendChild(button);
  main.appendChild(listItem);

  taskInput.value = "";
};
