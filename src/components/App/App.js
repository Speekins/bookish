import React, { useEffect, useReducer } from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Home/Home'
import MyLibrary from '../MyLibrary/MyLibrary'
import Book from '../Book/Book'
import Search from '../Search/Search'
import BadPath from '../Bad_Path/Bad_Path'
import { getBooks, getBookById, getBooksByDate } from '../../apiCalls'

const initialState = {
  isLoading: true,
  showModal: null,
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
      return { ...state, showModal: action.payload }
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

  const addToFavorites = (isbn, genre) => {
    let books = [...state.books]
    let favorite
    books.map(book => {
      if (book.primary_isbn13 === isbn) {
        book.isFavorite = true
        book.genre = genre
        favorite = book
        return book
      } else { return book }
    })
    dispatch({ type: "FAVORITE", payload: { books: books, favorite: favorite } })
  }

  const handleModalState = (isbn = null) => {

    if (isbn) {
      let modal = state.myLibrary.find(book => book.primary_isbn13 === isbn)
      dispatch({ type: "MODAL", payload: modal })
    } else {
      dispatch({ type: "MODAL", payload: isbn })
    }
  }

  const searchByYear = (date) => {
    dispatch({ type: "LOADING", payload: true })
    getBooksByDate(date)
      .then((data) => {
        // if (data.status) {
        //   dispatch({ type: "ERROR" })
        // } else {
        console.log(data.results.lists)
        let books = data.results.lists
        dispatch({ type: "SEARCH", payload: books })
        // }
      })
  }

  const clearSearch = () => {
    dispatch({ type: "CLEAR" })
  }

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
            modalDetails={state.showModal}
            bookDetails={state.bookDetails}
            isLoading={state.isLoading}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
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
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
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