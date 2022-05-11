const menuListLinks = document.querySelectorAll('.menu-list__link')

menuListLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault()

    document
      .getElementById(event.target.getAttribute('href').substr(1))
      .scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
  })
})
