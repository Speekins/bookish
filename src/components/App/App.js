import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Home/Home'
import { getBooks } from '../../apiCalls'
import { horror, fiction, nonFiction, history, memoir, scienceFiction, romance, mystery } from '../../production-data'

const App = () => {

  const [books, setBooks] = useState(null)


  useEffect(() => {
    // const newBooks = async () => {
    //   const yeah = await getBooks('https://hapi-books.p.rapidapi.com/week/mystery')
    //   setBooks(yeah.slice(0, 6))
    // }
    // newBooks()
    setBooks(horror)
  }, [])

  return (
    <Routes>
      <Route
        exact path='/'
        element={<Home books={books} />}
      />
    </Routes>
  )
}

export default App