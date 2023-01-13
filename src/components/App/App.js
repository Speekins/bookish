import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Home/Home'
import { getBooks } from '../../apiCalls'

const App = () => {

  const [books, setBooks] = useState(null)


  useEffect(() => {
    const newBooks = async () => {
      const yeah = await getBooks('https://hapi-books.p.rapidapi.com/week/mystery')
      setBooks(yeah.slice(0, 6))
    }
    newBooks()
  }, [])

  console.log(books)
  return (
    <>
      {books && <Home books={books} />}
    </>
  )
}

export default App