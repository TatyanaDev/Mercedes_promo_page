const btns = document.querySelectorAll('.feature__link')
const lists = document.querySelectorAll('.feature-sub')

btns.forEach(btnItem => {
  btnItem.addEventListener('click', () => {
    btns.forEach((btn, index) => {
      if (btn === btnItem) {
        lists[index].classList.toggle('hidden')
        btn.classList.toggle('feature__link_active')
      } else {
        lists[index].classList.add('hidden')
        btn.classList.remove('feature__link_active')
      }
    })
  })
})

// btns.forEach((btnItem, index) => {
//   btnItem.addEventListener('click', () => {
//     btns.forEach(btnItem => {
//       btnItem.classList.remove('feature__link_active')
//     })

//     btnItem.classList.add('feature__link_active')

//     lists.forEach(listItem => {
//       listItem.classList.add('hidden')
//     })

//     lists[index].classList.remove('hidden')

//     btns[index].addEventListener('click', () => {
//       btns[index].classList.toggle('feature__link_active')
//       btns[index].nextElementSibling.classList.toggle('hidden')
//     })
//   })
// })
