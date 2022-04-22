const navMenu = document.querySelector('.nav-menu')
const navMenuItems = document.querySelector('.nav-menu__items')

let isHide = false

function appearItem() {
  if (isHide) {
    isHide = !isHide
    navMenuItems.classList.remove('hide')
  } else {
    isHide = !isHide
    navMenuItems.classList.add('hide')
  }
}

navMenu.addEventListener('click', appearItem)

new Swiper('.swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 80,
  slidesPerView: 3,
})
