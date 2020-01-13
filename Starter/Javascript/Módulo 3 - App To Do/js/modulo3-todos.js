const listElement = document.querySelector('#listToDo');
const inputElement = document.querySelector('#inputTodo');
const buttonElement = document.querySelector('#btnAdicionar');
buttonElement.onclick = addTodo;


let todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
  listElement.innerHTML = '';
  for (const todo of todos) {
    const todoElement = document.createElement('li');
    const todoText = document.createTextNode(todo);
    const posicao = todos.indexOf(todo);
    const linkElement = '<a onClick="deleteTodo(' + posicao + ')" href="#"><i class="fas fa-trash" style="font-size: 25px; color:#f6abb6"></i></a>';
    todoElement.innerHTML = (todo);
    todoElement.innerHTML += (linkElement);
    todoElement.setAttribute('class', 'list-group-item d-flex justify-content-between align-items-center');
    listElement.appendChild(todoElement);

  }
}

function addTodo() {
  if (inputElement.value != '') {
    const todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
  }
}

function deleteTodo(posicao) {
  todos.splice(posicao, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('list_todos', JSON.stringify(todos));
}

renderTodos();