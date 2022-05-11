const buttons = document.querySelectorAll('.feature__link')
const lists = document.querySelectorAll('.feature-sub')

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach((buttonItem, index) => {
      if (buttonItem === button) {
        lists[index].classList.toggle('hidden')
        buttonItem.classList.toggle('feature__link_active')
      } else {
        lists[index].classList.add('hidden')
        buttonItem.classList.remove('feature__link_active')
      }
    })
  })
})
