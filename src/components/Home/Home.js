import React from 'react'
import Book from '../Book/Book'

const Home = ({ books }) => {

  const allBooks = books.map((book, idx) => <Book name={book.name} rating={book.rating} year={book.year} key={idx} id={book.id}/>)

  return (
    <>
      <div className='banner'>This is the banner</div>
      {allBooks}
    </>
  )
}

export default Home