import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './Search.css'
import NavBar from '../NavBar/NavBar'
import Modal from '../Modal/Modal'
import BookVariant from '../BookVariant/BookVariant'
import banner from '../assets/images/books2.jpg'
import Loading from '../assets/images/bookish_loading.png'

const Search = ({
  awardedBooks,
  searchByYear,
  showModal,
  handleModalState,
  bookDetails,
  isLoading,
  clearSearch,
  error,
  addToFavorites,
  removeFromFavorites }) => {

  const [date, setDate] = useState('')
  const [options, setOptions] = useState('')
  const [genreSelection, setGenreSelection] = useState('hardcover-fiction')
  const [booksToDisplay, setBooksToDisplay] = useState(null)

  useEffect(() => {
    if (awardedBooks.length) {
      let books = awardedBooks.find(book => book.list_name_encoded === genreSelection)
      let booksToDisplay = books.books.map((book, idx) =>
        <BookVariant
          title={book.title}
          cover={book.book_image}
          url={book.amazon_product_url}
          author={book.contributor}
          key={idx}
          isbn={book.primary_isbn13}
          rank={book.rank}
          genre={book.genre}
          genreSelection={genreSelection}
          weeks_on_list={book.weeks_on_list}
          description={book.description}
          isFavorite={book.isFavorite}
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
          handleModalState={handleModalState}
        />)
      let options = awardedBooks.map((genre, idx) => <option key={idx} value={genre.list_name_encoded}>{genre.list_name}</option>)
      setOptions(options)
      setBooksToDisplay(booksToDisplay)
    }
  }, [awardedBooks, genreSelection, addToFavorites, handleModalState, removeFromFavorites])

  const warning = <p className='no-books-warning'>Something went wrong here...</p>

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
      <select value={genreSelection} onChange={(event) => setGenreSelection(event.target.value)}>
        {options}
      </select>
      {null && <h1 className='year'>{date}</h1>}
      <div className='search-container'>
        {showModal && <Modal handleModalState={handleModalState} bookDetails={bookDetails} />}
        {!!booksToDisplay && booksToDisplay}
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