const todoForm = document.querySelector('#todo-form')
const input = document.querySelector('input')
const inputBtn = document.querySelector('#input-button')
const ul = document.querySelector('#todo-list')

let todos = []

function saveTodos() {
  localStorage.setItem('todo_key', todos)
}

function onSubmit(event) {
  event.preventDefault()
  todos = input.value
  console.log(todos)
  saveTodos()
  paintTodo()
}

function paintTodo() {
  localStorage.getItem('todo_key', todos)
  let li = document.createElement('li')
  li.innerHTML = todos
  ul.appendChild(li)
}

todoForm.addEventListener('submit', onSubmit)
