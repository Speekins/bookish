import React, { useState, useEffect } from 'react'
import Book from '../Book/Book'
import Banner from '../assets/images/books1.jpg'
import '../NavBar/NavBar'
import './Home.css'
import NavBar from '../NavBar/NavBar'

const Home = ({ books }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [allBooks, setAllBooks] = useState({})

  useEffect(() => {
    let genres = ['horror', 'fiction', 'nonFiction', 'history', 'memoir', 'scienceFiction', 'romance', 'mystery']
    genres.forEach((genre, idx) => {
      let bookComponents = books[genre].map((book, idx) =>
        <Book
          name={book.name}
          cover={book.cover}
          rating={book.rating}
          year={book.year}
          key={idx}
          id={book.id}
        />)
      setAllBooks(allBooks => { return { ...allBooks, [genre]: bookComponents } })
    })

    setIsLoading(false)
  }, [])

  return (
    <>
      <div className='banner'>
        <img alt="Banner with books" className='banner-image' src={Banner} />
        <h1 className='bookish'>BOOKISH</h1>
      </div>
      <NavBar />
      {isLoading ? <p>Loading...</p>
        : <div className='book-container'>
          <h1>Fiction</h1>
          {allBooks.fiction}
          <h1>Non-Fiction</h1>
          {allBooks.nonFiction}
          <h1>Mystery</h1>
          {allBooks.mystery}
          <h1>Memoir</h1>
          {allBooks.memoir}
          <h1>Romance</h1>
          {allBooks.romance}
          <h1>History</h1>
          {allBooks.history}
          <h1>Horror</h1>
          {allBooks.horror}
          <h1>Science Fiction</h1>
          {allBooks.scienceFiction}
        </div>
      }
    </>
  )
}

export default Home