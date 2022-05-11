const burger = document.querySelector('.humburger-menu')
const menuList = document.querySelector('.menu-list')
const menuElem = document.querySelector('.menu')

burger.addEventListener('click', () => {
  menuElem.classList.toggle('menu-active')
  burger.classList.toggle('humburger-menu-active')
})

menuList.addEventListener('click', event => {
  if (event) {
    menuElem.classList.remove('menu-active')
    burger.classList.remove('humburger-menu-active')
  }
})


