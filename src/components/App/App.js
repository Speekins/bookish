import React, { useState, useEffect, useReducer } from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Home/Home'
import MyLibrary from '../MyLibrary/MyLibrary'
import { getBooks } from '../../apiCalls'
import { horror, fiction, nonFiction, history, memoir, scienceFiction, romance, mystery } from '../../production-data'

const initialState = {
  isLoading: true,
  books: {},
  myLibrary: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        isLoading: false,
        books: { ...state.books, [action.name]: action.payload },
        error: false
      }

    case "ERROR":
      return {
        isLoading: false,
        data: null,
        error: true
      }

    default:
      return state
  }
}

const App = () => {

  //const [books, setBooks] = useState(null)
  const [state, dispatch] = useReducer(reducer, initialState)


  useEffect(() => {
    // const newBooks = async () => {
    //   const yeah = await getBooks('https://hapi-books.p.rapidapi.com/week/mystery')
    //   setBooks(yeah.slice(0, 6))
    // }
    // newBooks()
    //setBooks(horror)
    dispatch({ type: "SUCCESS", payload: fiction, name: 'fiction' })
  }, [])
  console.log(state.books)
  return (
    <Routes>
      <Route
        exact path='/'
        element={!state.isLoading && <Home books={state.books} />}
      />
      <Route
        path='my-library'
        element={<MyLibrary />}
      />
    </Routes>
  )
}

export default App