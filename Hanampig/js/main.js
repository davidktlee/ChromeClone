const countOne = document.querySelector('.count-1')
const countTwo = document.querySelector('.count-2')
const countThree = document.querySelector('.count-3')
const targetNumOne = countOne.getAttribute('data-rate')
const targetNumTwo = countTwo.getAttribute('data-rate')
const targetNumThree = countThree.getAttribute('data-rate')

let num = 0
const timer = setInterval(() => {
  ++num
  countOne.innerText = num
  if (num === 9) {
    num = 0
  }
  const counter = setInterval(() => {
    countOne.innerText = targetNumOne
    clearInterval(timer)
  }, 1000)
}, 50)

let num2 = 0
const timer2 = setInterval(() => {
  ++num2
  countTwo.innerText = num2
  if (num2 === 9) {
    num2 = 0
  }
  const counter2 = setInterval(() => {
    countTwo.innerText = targetNumTwo
    clearInterval(timer2)
  }, 1250)
}, 50)

let num3 = 0
const timer3 = setInterval(() => {
  ++num3
  countThree.innerText = num3
  if (num3 === 9) {
    num3 = 0
  }
  const counter3 = setInterval(() => {
    countThree.innerText = targetNumThree
    clearInterval(timer3)
  }, 1500)
}, 50)
