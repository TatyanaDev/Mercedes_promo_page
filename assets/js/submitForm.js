const formTestDrive = document.querySelector('.form-test-drive')
const modalForm = document.querySelector('.modal__form')
const newForm = [modalForm, formTestDrive]

newForm.forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault()
    let data = {}

    for (let i = 0; i <= 1; i++) {
      if (!form.elements[i].value) {
        return
      }
    }

    for (let { name, value } of form.elements) {
      if (name) {
        data[name] = value
      }
    }

    form.reset()
    console.log(data)
  })
})
