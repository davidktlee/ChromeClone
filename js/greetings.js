const loginForm = document.querySelector('#login-form')
const loginInput = loginForm.querySelector('input')
const loginButton = loginForm.querySelector('button')
const greeting = document.querySelector('#greeting')
const myStorage = window.localStorage

const HIDDEN_CLASSNAME = 'hidden'
const USERNAME_KEY = 'username'

function loginSubmit(event) {
  event.preventDefault()
  const username = loginInput.value
  myStorage.setItem(USERNAME_KEY, username)
  loginForm.classList.add(HIDDEN_CLASSNAME)
  paintGreetings(username)
}

function paintGreetings(username) {
  greeting.innerText = `hello ${username}`
  greeting.classList.remove(HIDDEN_CLASSNAME)
}

const savedUsername = myStorage.getItem(USERNAME_KEY)

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener('submit', loginSubmit)
} else {
  paintGreetings(savedUsername)
}
