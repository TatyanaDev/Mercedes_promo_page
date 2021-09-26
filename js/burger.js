const burger = document.querySelector('.humburger-menu')
const menuElem = document.querySelector('.menu')
const menuList = document.querySelector('.menu-list')

menuList.addEventListener('click', event => {
  if (event) {
    menuElem.classList.remove('menu-active')
    burger.classList.remove('humburger-menu-active')
  }
})

const toggleMenu = () => {
  menuElem.classList.toggle('menu-active')
  burger.classList.toggle('humburger-menu-active')
}

burger.addEventListener('click', () => toggleMenu())
