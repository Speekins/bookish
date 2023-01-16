const get = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '9d2d319c7amsh0029ddae235525fp1a6a97jsnf0bb69178641',
    'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
  }
}

const getBooks = (name) => {
  return fetch(`https://hapi-books.p.rapidapi.com/week/${name}/10`, get)
    .then(response => response.json())
    .catch(err => console.error(err))
}

const getBookById = (url, id) => {
  url = url + '/' + id
  return fetch(url, get)
    .then(response => {
      if (response.ok) {
        return response.json()

      }
      return response
    })
}

const getAwardedBooks = (year) => {
  return fetch(`https://hapi-books.p.rapidapi.com/top/${year}`, get)
    .then((response) => response.json())
    .catch(error => console.log(error))
}

export { getBooks, getBookById, getAwardedBooks }