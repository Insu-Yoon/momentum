const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".todo ul");
let toDoArray = [];

function saveToDoArray() {
  localStorage.setItem("toDos", JSON.stringify(toDoArray));
}
function submitHandler(event) {
  event.preventDefault();
  const newTodo = {
    text: toDoInput.value,
    id: Date.now(),
  };
  toDoInput.value = "";
  toDoArray.push(newTodo);
  putNewTodo(newTodo);
  saveToDoArray();
}
function putNewTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "X";
  span.innerText = newTodo.text;
  li.append(span, button);
  toDoList.append(li);
  button.addEventListener("click", deleteTodo);
}
function deleteTodo(event) {
  const li = event.target.parentElement;
  toDoArray = toDoArray.filter((item) => item.id != li.id);
  saveToDoArray();
  li.remove();
}

function drawToDos() {
  if (JSON.parse(localStorage.getItem("toDos")) !== null) {
    toDoArray = JSON.parse(localStorage.getItem("toDos"));
    toDoArray.forEach(putNewTodo);
  }
}
drawToDos();
toDoForm.addEventListener("submit", submitHandler);
