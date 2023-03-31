import React, { useState, useEffect } from 'react'
import { formatGenre } from '../../utils'
import PropTypes from 'prop-types'
import Banner from '../assets/images/books1.jpg'
import '../NavBar/NavBar'
import './Home.css'
import Book from '../Book/Book'
import NavBar from '../NavBar/NavBar'
import Modal from '../Modal/Modal'
import Loading from '../assets/images/bookish_loading.png'

const Home = ({ books, showModal, handleModalState, bookDetails, isLoading, clearSearch, getIt, addToFavorites, removeFromFavorites }) => {

  const [genreSelection, setGenreSelection] = useState('hardcover-fiction')
  const [displayGenre, setDisplayGenre] = useState('Fiction')

  useEffect(() => {
    let fetchData = async () => {
      await getIt(genreSelection)
      console.log(genreSelection)
      setDisplayGenre(formatGenre(genreSelection))
    }

    fetchData()
  }, [genreSelection])

  const warning = <p className='no-books-warning'>Something went wrong here...</p>

  if (books.length) {
    let booksToDisplay = books.map((book, idx) =>
      <Book
        title={book.title}
        cover={book.book_image}
        url={book.amazon_product_url}
        author={book.contributor}
        key={idx}
        isbn={book.primary_isbn13}
        rank={book.rank}
        genre={displayGenre}
        weeks_on_list={book.weeks_on_list}
        description={book.description}
        isFavorite={book.isFavorite}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
        handleModalState={handleModalState}
      />)

    const selection =
      <select onChange={(event) => setGenreSelection(event.target.value)}>
        <option value='hardcover-fiction'>Fiction</option>
        <option value='hardcover-nonfiction'>NonFiction</option>
        <option value='business-books'>Business</option>
        <option value='education'>Education</option>
        <option value='humor'>Humor</option>
        <option value='science'>Science</option>
        <option value='health'>Health</option>
        <option value='food-and-fitness'>Food & Fitness</option>
        <option value='celebrities'>Celebrities</option>
        <option value='culture'>Culture</option>
        <option value='advice-how-to-and-miscellaneous'>Adivce & How-To</option>
        <option value='picture-books'>Picture Books</option>
      </select>

    return (
      <div className='home'>
        <div className='banner'>
          <img alt="Banner with books" className='banner-image' src={Banner} />
          <div className='bookish overlay'></div>
          <h1 className='bookish'>BOOKISH</h1>
        </div>
        {!!isLoading &&
          <div className='loading-container'>
            <img src={Loading} alt="Loading" className='loading-image' />
          </div>
        }
        {showModal && <Modal handleModalState={handleModalState} bookDetails={bookDetails} />}
        <NavBar clearSearch={clearSearch} view='home' />
        {selection}
        <h1 className='genre-name'>{displayGenre}</h1>
        <div className='genre' id='fiction'>
          {!isLoading && books ? booksToDisplay : (!!isLoading ? <p>Loading...</p> : warning)}
        </div>
      </div>
    )
  }
}

// Home.propTypes = {
//   books: PropTypes.arrayOf(PropTypes.elementType),
//   showModal: PropTypes.bool.isRequired,
//   isLoading: PropTypes.bool.isRequired,
//   handleModalState: PropTypes.func.isRequired,
//   clearSearch: PropTypes.func.isRequired,
//   bookDetails: PropTypes.object,
// }

export default Home