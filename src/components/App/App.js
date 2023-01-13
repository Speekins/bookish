import React, { useState, useEffect, useReducer } from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Home/Home'
import MyLibrary from '../MyLibrary/MyLibrary'
import Book from '../Book/Book'
import { getBooks } from '../../apiCalls'
import { horror, fiction, nonFiction, history, memoir, scienceFiction, romance, mystery } from '../../production-data'

const initialState = {
  isLoading: true,
  books: {},
  myLibrary: [],
  error: false,
  data: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return { ...state, isLoading: false, books: { ...state.books, [action.genre]: action.payload } }
    case "FAVORITE":
      let list = state.books[action.genre]
      let index = list.findIndex(book => {
        return book.props.book_id === action.payload
      })
      let book = list[index]
      let newBook = { ...book }
      return {
        ...state,
        isLoading: false,
        books: { ...state.books },
        myLibrary: [...state.myLibrary, newBook]
      }
    case "ERROR":
      return { ...state, isLoading: false, error: true }
    default:
      return state
  }
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const genres = { horror: horror, fiction: fiction, nonFiction: nonFiction, history: history, memoir, scienceFiction: scienceFiction, romance: romance, mystery: mystery }
    Object.values(genres).forEach((booksByGenre, idx) => {
      let genre = Object.keys(genres)[idx]
      dispatch({ type: "SUCCESS", payload: formatBooks(booksByGenre, genre), genre: genre })
    })
  }, [])

  const formatBooks = (booksByGenre, genre) => {
    let books = booksByGenre.map(book =>
      <Book
        name={book.name}
        cover={book.cover}
        url={book.url}
        key={book.book_id}
        book_id={book.book_id}
        addToFavorites={addToFavorites}
        genre={genre}
      />)
    return books
  }

  const addToFavorites = (id, genre) => {
    dispatch({ type: "FAVORITE", payload: id, genre: genre })
  }

  return (
    <Routes>
      <Route
        exact path='/'
        element={!state.isLoading && <Home books={state.books} addToFavorites={addToFavorites} />}
      />
      <Route
        path='my-library'
        element={<MyLibrary myLibrary={state.myLibrary} />}
      />
    </Routes>
  )
}

export default App