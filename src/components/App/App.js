import React, { useState, useEffect, useReducer } from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Home/Home'
import MyLibrary from '../MyLibrary/MyLibrary'
import Book from '../Book/Book'
import { getBooks } from '../../apiCalls'
import { horror, fiction, nonFiction, history, memoir, scienceFiction, romance, mystery, singleBook } from '../../production-data'

const initialState = {
  isLoading: true,
  showModal: false,
  books: {},
  bookDetails: null,
  myLibrary: [],
  error: false,
  data: null
}

const reducer = (state, action) => {

  switch (action.type) {
    case "SUCCESS":
      return { ...state, isLoading: false, books: { ...state.books, [action.genre]: action.payload } }
    case "FAVORITE":
      let genre = action.payload.genre
      let id = action.payload.id
      let newBook = action.payload.newBook
      let genreList = [...state.books[genre]]
      let index = genreList.findIndex(book => book.props.book_id === id)
      genreList[index] = newBook
      return { ...state, isLoading: false, books: { ...state.books, [genre]: genreList }, myLibrary: [...state.myLibrary, newBook] }
    case "UNFAVORITE":
      let library = state.myLibrary.filter(book => book.props.book_id !== action.payload.id)
      let genreType = [...state.books[action.payload.genre]]
      let idx = genreType.findIndex(book => book.props.book_id === action.payload.id)
      genreType[idx] = action.payload.newBook
      return { ...state, isLoading: false, books: { ...state.books, [action.payload.genre]: genreType }, myLibrary: [...library] }
    case "MODAL":
      let modalState = state.showModal ? false : true
      if (modalState) {
        return { ...state, showModal: modalState, bookDetails: action.payload }
      } else {
        return { ...state, showModal: modalState, bookDetails: null }
      }
    case "BOOK_DETAIL":
      const book = action.payload.bookDetails ? action.payload.bookDetails : null
      console.log(book)
      return { ...state, bookDetails: book }
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
        genre={genre}
        liked={false}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
        handleModalState={handleModalState}
      />)
    return books
  }

  const removeFromFavorites = (id, genre, newBook) => {
    dispatch({ type: "UNFAVORITE", payload: { id: id, genre: genre, newBook: newBook } })
  }

  const addToFavorites = (id, genre, newBook) => {
    dispatch({ type: "FAVORITE", payload: { id: id, genre: genre, newBook: newBook } })
  }

  const handleModalState = (id) => {
    let bookDetails = singleBook
    dispatch({ type: "MODAL", payload: bookDetails })
  }

  return (
    <Routes>
      <Route
        exact path='/'
        element={!state.isLoading &&
          <Home
            books={state.books}
            showModal={state.showModal}
            bookDetails={state.bookDetails}
            handleModalState={handleModalState}
          />}
      />
      <Route
        path='my-library'
        element={<MyLibrary myLibrary={state.myLibrary} showModal={state.modalState} handleModalState={handleModalState} />}
      />
    </Routes>
  )
}

export default App