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
    Object.values(books).forEach((bookType, idx) => {
      let name = Object.keys(books)[idx]
      console.log(name)
      let formattedBooks = bookType.map((book, idx) =>
        <Book
          name={book.name}
          cover={book.cover}
          rating={book.rating}
          year={book.year}
          key={idx}
          id={book.id}
        />)
      setAllBooks(allBooks => [...allBooks, { [name]: formattedBooks }])
    })
    setIsLoading(false)
  }, [])
  console.log(allBooks)
  return (
    <>
      <div className='banner'>
        <img alt="Banner with books" className='banner-image' src={Banner} />
        <h1 className='bookish'>BOOKISH</h1>
      </div>
      <NavBar />
      <div className='book-container'>
        <h1>Fiction</h1>
        {isLoading ? <p>Loading...</p>
          : allBooks[0].mystery}
      </div>
    </>
  )
}

export default Home