const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]')
const tabsContentElems = document.querySelectorAll('[data-tabs-field]')
const tabsContentHeaders = document.querySelectorAll('.design__title')
const descriptions = document.querySelector('.design__descr')

for (let btn of tabsHandlerElems) {
  btn.addEventListener('click', () => {
    tabsHandlerElems.forEach(item =>
      item.classList.remove('design-list__item_active')
    )
    btn.classList.add('design-list__item_active')

    tabsContentElems.forEach(content => {
      if (content.dataset.tabsField === btn.dataset.tabsHandler) {
        content.classList.remove('hidden')
      } else {
        content.classList.add('hidden')
      }
    })

    if (descriptions.classList.contains('hidden')) {
      tabsContentHeaders[1].classList.remove('hidden')
      tabsContentHeaders[0].classList.add('hidden')
    } else {
      tabsContentHeaders[0].classList.remove('hidden')
      tabsContentHeaders[1].classList.add('hidden')
    }
  })
}
