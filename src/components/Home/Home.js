import React from 'react'
import Book from '../Book/Book'
import Banner from '../assets/images/books1.jpg'
import '../NavBar/NavBar'
import './Home.css'
import NavBar from '../NavBar/NavBar'

const Home = ({books}) => {
  const allBooks = books.fiction.map((book, idx) => <Book name={book.name} cover={book.cover} rating={book.rating} year={book.year} key={idx} id={book.id} />)

  return (
    <>
      <div className='banner'>
        <img alt="Banner with books" className='banner-image' src={Banner} />
        <h1 className='bookish'>BOOKISH</h1>
      </div>
      <NavBar />
      <div className='book-container'>
        {allBooks}
      </div>
    </>
  )
}

export default Home