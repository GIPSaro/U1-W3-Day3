const form = document.getElementsByTagName("form")[0];

form.onsubmit = function (e) {
  e.preventDefault();

  const taskInput = document.getElementById("itemTextBox");
  const task = taskInput.value;

  const main = document.getElementsByTagName("main")[0];

  const listItem = document.createElement("p");
  listItem.className = "task";
  listItem.innerText = task;

  const button = document.createElement("button");
  button.innerText = "Remove";
  button.onclick = function (e) {
    const removeBtn = e.target;
    removeBtn.parentNode.remove();
  };

  listItem.appendChild(button);
  main.appendChild(listItem);

  taskInput.value = "";
};
