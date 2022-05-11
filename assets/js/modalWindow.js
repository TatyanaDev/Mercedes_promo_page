const modalButtons = document.querySelectorAll('.more')
const modal = document.querySelector('.modal')

modalButtons.forEach(modalBtn =>
  modalBtn.addEventListener('click', () => modal.classList.remove('hidden'))
)

modal.addEventListener('click', ({ target }) => {
  if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
    modal.classList.add('hidden')
  }
})
