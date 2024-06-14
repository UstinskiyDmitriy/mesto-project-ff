export function handleSubmit(request, evt) {
  request()
  .then(() => {
    evt.target.reset()
  })
  .catch((err) => {
    console.error(`Ошибка: ${err}`)
  })
}

