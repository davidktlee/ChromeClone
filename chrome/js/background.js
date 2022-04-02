const images = ['img0.jpg', 'img1.jpg', 'img2.jpg']

const chooseImg = images[Math.floor(Math.random() * images.length)]
console.log(chooseImg)
const bgImage = document.createElement('img')
bgImage.src = `img/${chooseImg}`

document.body.appendChild(bgImage)
console.log(bgImage)
