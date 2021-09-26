const form = document.querySelector('.form-test-drive')
const formModal = document.querySelector('.modal__form')
const newForm = [form, formModal]

newForm.forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault()

    for (let i = 0; i <= 1; i++) {
      if (!form.elements[i].value) {
        return
      }
    }

    let data = {}

    for (let { name, value } of form.elements) {
      if (name) {
        data[name] = value
      }
    }

    form.reset()
    console.log(data)
  })

  // fetch('https://jsonplaceholder.typicode.com/posts', {
  //   method: 'POST',
  //   body: JSON.stringify(data)
  // })
  //   .then(response => {
  //     if (response.status === 200 || response.status === 201) {
  //       return response.json()
  //     } else {
  //       throw new Error(response.status)
  //     }
  //   })
  //   .then(() => {
  //     alert('Данные успешно сохранены!'), form.reset()
  //   })
  //   .catch(error => {
  //     alert(`Произошла ошибка, статус ${error.message}`)
  //   })
})
