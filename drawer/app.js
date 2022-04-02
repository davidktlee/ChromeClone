const canvas = document.querySelector('#jsCanvas')
const ctx = canvas.getContext('2d')
const range = document.querySelector('#jsRange')
const colors = document.getElementsByClassName('jsColors')
const mode = document.getElementById('jsMode')

canvas.width = 700
canvas.height = 700

ctx.strokeStyle = '#2c2c2c'
ctx.lineWidth = 2.5

let painting = false
let filling = false

function startPainting() {
  painting = true
}

function stopPainting() {
  painting = false
}

function onMouseMove(event) {
  const x = event.offsetX
  const y = event.offsetY
  if (!painting) {
    ctx.beginPath()
    ctx.moveTo(x, y)
  } else {
    ctx.lineTo(x, y)
    ctx.stroke()
  }
}

function lineWidth(event) {
  ctx.lineWidth = event.target.value
}

function onMouseDown(event) {
  painting = true
}

function handleColorClick(event) {
  ctx.strokeStyle = event.target.style.backgroundColor
}

function handleModeClick() {
  if (filling === true) {
    filling = false
    mode.innerText = 'Fill'
    
  } else {
    filling = true
    mode.innerText = 'Paint'
  }
}

if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove)
  canvas.addEventListener('mousedown', startPainting)
  canvas.addEventListener('mouseup', stopPainting)
  canvas.addEventListener('mouseleave', stopPainting)
}

if (painting == true) {
}

range.addEventListener('mouseleave', lineWidth)
mode.addEventListener('click', handleModeClick)
Array.from(colors).forEach((color) => color.addEventListener('click', handleColorClick))
