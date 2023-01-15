import React, { useState, useEffect, useReducer } from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Home/Home'
import MyLibrary from '../MyLibrary/MyLibrary'
import Book from '../Book/Book'
import { getBooks, getBookById } from '../../apiCalls'
import { horror, fiction, nonFiction, history, memoir, scienceFiction, romance, mystery, singleBook } from '../../production-data'
const genres = { horror: horror, fiction: fiction, nonFiction: nonFiction, history: history, memoir, scienceFiction: scienceFiction, romance: romance, mystery: mystery }

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
      return { ...state, isLoading: false, books: { ...state.books, [action.payload.genre]: action.payload.books } }
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
        return { ...state, showModal: modalState, bookDetails: action.payload, isLoading: false }
      } else {
        return { ...state, showModal: modalState, bookDetails: null, isLoading: false }
      }
    case "LOADING":
      let isLoading = action.payload
      return { ...state, isLoading: isLoading }
    case "ERROR":
      return { ...state, isLoading: false, error: true }
    default:
      return state
  }
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    let genreNames = ['horror', 'fiction', 'nonFiction', 'history', 'memoir', 'scienceFiction', 'romance', 'mystery']
    let allBookData = {}
    let allBooks
    const get = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '9d2d319c7amsh0029ddae235525fp1a6a97jsnf0bb69178641',
        'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
      }
    }

    const getIt = async () => {
      for (let idx = 0; idx < genreNames.length; idx++) {
        let genre = genreNames[idx]
        await getBooks(genre)
          .then((data) => {
            let books = formatBooks(data.slice(0, 10), genre)
            dispatch({ type: "SUCCESS", payload: { books: books, genre: genre } })
          })
      }
    }

    getIt()
  }, [])

  const formatBooks = (booksByGenre, genre) => {
    console.log(booksByGenre)
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

    if (id) {
      dispatch({ type: "LOADING", payload: true })
      getBookById("https://hapi-books.p.rapidapi.com/book", id)
        .then((book) => dispatch({ type: "MODAL", payload: book }))
    } else {
      dispatch({ type: "MODAL", payload: null })
    }
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
          />}
      />
      <Route
        path='my-library'
        element={
          <MyLibrary
            myLibrary={state.myLibrary}
            showModal={state.showModal}
            bookDetails={state.bookDetails}
            isLoading={state.isLoading}
            handleModalState={handleModalState}
          />
        }
      />
    </Routes>
  )
}

export default App