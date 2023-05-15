// getUsers
async function getUsers(url) {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response}`)
  }

  return await response.json()
}


export { getUsers }
