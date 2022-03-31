const canvas = document.querySelector('#jsCanvas')
const ctx = canvas.getContext('2d')

ctx.fillColor

let painting = false

function stopPainting() {
  painting = false
}

function onMouseMove(event) {
  const x = event.offsetX
  const y = event.offsetY
}

function onMouseDown(event) {
  painting = true
}

function onMouseUp(event) {}

if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove)
  canvas.addEventListener('mousedown', onMouseDown)
  canvas.addEventListener('mouseup', onMouseUp)
  canvas.addEventListener('mouseleave', stopPainting)
}

if (painting == true) {
}
