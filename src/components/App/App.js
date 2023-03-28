import React, { useEffect, useReducer } from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Home/Home'
import MyLibrary from '../MyLibrary/MyLibrary'
import Book from '../Book/Book'
import Search from '../Search/Search'
import BadPath from '../Bad_Path/Bad_Path'
import { getBooks, getBookById, getAwardedBooks } from '../../apiCalls'

const initialState = {
  isLoading: true,
  showModal: false,
  books: {},
  bookDetails: null,
  awardedBooks: [],
  myLibrary: [],
  error: false,
  data: null
}

const reducer = (state, action) => {

  switch (action.type) {
    case "SUCCESS":
      return { ...state, isLoading: false, books: action.payload.books }
    case "FAVORITE":
      return { ...state, books: action.payload.books, myLibrary: [...state.myLibrary, action.payload.favorite] }
    case "UNFAVORITE":
      return { ...state, books: action.payload.books, myLibrary: action.payload.myLibrary }
    case "MODAL":
      let modalState = state.showModal ? false : true
      return { ...state, showModal: modalState }
    // if (modalState) {
    //   return { ...state, showModal: modalState, bookDetails: action.payload, isLoading: false }
    // } else {
    //   return { ...state, showModal: modalState, bookDetails: null, isLoading: false }
    // }
    case "SEARCH":
      return { ...state, isLoading: false, error: false, awardedBooks: action.payload }
    case "LOADING":
      let isLoading = action.payload
      return { ...state, isLoading: isLoading }
    case "CLEAR":
      return { ...state, books: { ...state.books }, myLibrary: [...state.myLibrary], awardedBooks: [] }
    case "ERROR":
      return { ...state, isLoading: false, error: true, bookDetails: null }
    default:
      return state
  }
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const getIt = async (genre) => {
    await getBooks(genre)
      .then((data) => {
        dispatch({ type: "SUCCESS", payload: { books: data.results.books, genre: "fiction" } })
      })
  }

  const checkForFavorite = (books) => {
    let myLibraryISBN = state.myLibrary.map(book => book.primary_isbn13)
    return books.map(book => {
      if (myLibraryISBN.includes(book.primary_isbn13)) {
        book.isFavorite = true
        return book
      } else {
        return book
      }
    })
  }

  const removeFromFavorites = (isbn) => {
    let books = [...state.books]
    let myLibrary = state.myLibrary.filter(book => book.primary_isbn13 !== isbn)
    books.map(book => {
      if (book.primary_isbn13 === isbn) {
        book.isFavorite = false
        return book
      } else { return book }
    })
    dispatch({ type: "UNFAVORITE", payload: { books: books, myLibrary: myLibrary } })
  }

  const addToFavorites = (isbn) => {
    let books = [...state.books]
    let favorite
    books.map(book => {
      if (book.primary_isbn13 === isbn) {
        book.isFavorite = true
        favorite = book
        return book
      } else { return book }
    })
    dispatch({ type: "FAVORITE", payload: { books: books, favorite: favorite } })
  }

  const handleModalState = (id) => {

    dispatch({ type: "LOADING", payload: true })
    getBookById("https://hapi-books.p.rapidapi.com/book", id)
      .then((book) => {
        if (book.status) {
          dispatch({ type: "ERROR" })
          dispatch({ type: "MODAL" })
        } else {
          dispatch({ type: "MODAL", payload: book })
        }
      })
  }

  const searchByYear = (year) => {
    dispatch({ type: "LOADING", payload: true })
    getAwardedBooks(year)
      .then((data) => {
        if (data.status) {
          dispatch({ type: "ERROR" })
        } else {
          let awardedBooks = data.results.books
          dispatch({ type: "SEARCH", payload: checkForFavorite(awardedBooks) })
        }
      })
  }

  const clearSearch = () => {
    dispatch({ type: "CLEAR" })
  }

  console.log(state.myLibrary)
  return (
    <Routes>
      <Route
        exact path='/'
        element={
          <Home
            books={state.books}
            showModal={state.showModal}
            bookDetails={state.bookDetails}
            isLoading={state.isLoading}
            handleModalState={handleModalState}
            clearSearch={clearSearch}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
            getIt={getIt}
          />}
      />
      <Route
        path='/my-library'
        element={
          <MyLibrary
            myLibrary={state.myLibrary}
            showModal={state.showModal}
            bookDetails={state.bookDetails}
            isLoading={state.isLoading}
            handleModalState={handleModalState}
            clearSearch={clearSearch}
          />
        }
      />
      <Route
        path="/search"
        element={
          <Search
            awardedBooks={state.awardedBooks}
            searchByYear={searchByYear}
            showModal={state.showModal}
            bookDetails={state.bookDetails}
            isLoading={state.isLoading}
            handleModalState={handleModalState}
            clearSearch={clearSearch}
            error={state.error}
          />
        }
      />
      <Route path="*" element={<BadPath />} />
    </Routes>
  )
}

export default App