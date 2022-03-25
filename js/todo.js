const todoForm = document.querySelector('#todo-form')
const todoInput = todoForm.querySelector('input')
const todoUl = document.querySelector('#todo-list')

let todos = []
const TODOS_KEY = 'todos'

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
}

function deleteTodo(event) {
  const li = event.target.parentElement
  li.remove()
  todos = todos.filter((todo) => todo.id !== parseInt(li.id))
  saveTodos()
}

function paintTodo(newTodo) {
  const li = document.createElement('li')
  li.id = newTodo.id
  const span = document.createElement('span')
  span.innerText = newTodo.text
  const button = document.createElement('button')
  button.innerText = '❌'
  button.addEventListener('click', deleteTodo)
  li.appendChild(span)
  li.appendChild(button)
  todoUl.appendChild(li)
}

function todoSubmit(event) {
  event.preventDefault()
  const newTodo = todoInput.value
  todoInput.value = ''
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  }
  todos.push(newTodoObj)
  paintTodo(newTodoObj)
  saveTodos()
}

todoForm.addEventListener('submit', todoSubmit)

const savedTodos = localStorage.getItem(TODOS_KEY)
if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos)
  todos = parsedTodos
  parsedTodos.forEach(paintTodo)
}
