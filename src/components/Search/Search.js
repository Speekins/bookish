import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './Search.css'
import NavBar from '../NavBar/NavBar'
import Modal from '../Modal/Modal'
import BookVariant from '../BookVariant/BookVariant'
import banner from '../assets/images/books2.jpg'
import Loading from '../assets/images/bookish_loading.png'

const Search = ({ awardedBooks, searchByYear, showModal, handleModalState, bookDetails, isLoading, clearSearch, error, addToFavorites, removeFromFavorites }) => {

  const [date, setDate] = useState('')
  const [genreSelection, setGenreSelection] = useState('hardcover-fiction')
  const [books, setBooks] = useState([])
  const [booksToDisplay, setBooksToDisplay] = useState([])

  useEffect(() => {
    if (awardedBooks) {
      let books = awardedBooks.find(book => book.list_name_encoded === genreSelection)
      setBooks(books)
    }
  }, [genreSelection, awardedBooks])

  const warning = <p className='no-books-warning'>Something went wrong here...</p>

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

  if (books.length) {
    let booksToDisplay = books.map((book, idx) =>
      <BookVariant
        title={book.title}
        cover={book.book_image}
        url={book.amazon_product_url}
        author={book.contributor}
        key={idx}
        isbn={book.primary_isbn13}
        rank={book.rank}
        genre={book.genre}
        weeks_on_list={book.weeks_on_list}
        description={book.description}
        isFavorite={book.isFavorite}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
        handleModalState={handleModalState}
      />)
    setBooksToDisplay(booksToDisplay)
  }

  return (
    <div>
      <img src={banner} alt="search banner" className='search-banner' />
      <NavBar clearSearch={clearSearch} view='search' />
      {!!isLoading &&
        <div className='loading-container'>
          <img src={Loading} alt="Loading" className='loading-image' />
        </div>
      }
      <div className='search-bar'>
        <input type="date" value={date} onChange={(event) => setDate(event.target.value)}></input>
        <button className='search-submit' onClick={() => searchByYear(date)}>Submit</button>
      </div>
      {!!books.length && <h1 className='year'>{date}</h1>}
      <div className='search-container'>
        {showModal && <Modal handleModalState={handleModalState} bookDetails={bookDetails} />}
        {!!books.length && booksToDisplay}
        {error && warning}
      </div>
    </div>
  )
}

// Search.propTypes = {
//   awardedBooks: PropTypes.arrayOf(PropTypes.elementType),
//   searchByYear: PropTypes.func.isRequired,
//   showModal: PropTypes.bool.isRequired,
//   handleModalState: PropTypes.func.isRequired,
//   bookDetails: PropTypes.object,
//   isLoading: PropTypes.bool.isRequired,
//   clearSearch: PropTypes.func.isRequired,
//   error: PropTypes.bool.isRequired
// }

export default Search