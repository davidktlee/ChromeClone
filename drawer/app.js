const canvas = document.querySelector('#jsCanvas')
const ctx = canvas.getContext('2d')
const input = document.querySelector('#jsRange')
const colors = document.getElementsByClassName('jsColors')

canvas.width = 700
canvas.height = 700

ctx.strokeStyle = '#2c2c2c'
ctx.lineWidth = 2.5

let painting = false

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
input.addEventListener('mouseleave', lineWidth)
function lineWidth(event) {
  ctx.lineWidth = event.target.value
}

function onMouseDown(event) {
  painting = true
}

if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove)
  canvas.addEventListener('mousedown', startPainting)
  canvas.addEventListener('mouseup', stopPainting)
  canvas.addEventListener('mouseleave', stopPainting)
}

if (painting == true) {
}

console.log(Array.from(colors))
