const get = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '9d2d319c7amsh0029ddae235525fp1a6a97jsnf0bb69178641',
    'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
  }
}

const getBooks = (url) => {
  return fetch(url, get)
    .then(response => response.json())
    .catch(err => console.error(err))
}

export { getBooks }