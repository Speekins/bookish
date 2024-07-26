import React, { useEffect, useState } from 'react'
import PropTypes, { bool } from "prop-types"
import libraryBanner from '../assets/images/my-library-banner.jpg'
import BookVariant from '../BookVariant/BookVariant'
import NavBar from '../NavBar/NavBar'
import Modal from '../Modal/Modal'
import Loading from '../assets/images/bookish_loading.png'
import { getMyLibary } from '../../apiCalls'
import './MyLibrary.css'

const MyLibrary = ({
  myLibrary,
  modalDetails,
  handleModalState,
  isLoading,
  clearSearch,
  addToFavorites,
  removeFromFavorites,
  submitFeedback }) => {

  const [myBooks, setMyBooks] = useState([])

  useEffect(() => {
    async function getData() {
      const books = await getMyLibary()
      setMyBooks(books)
    }
    getData()
  }, [])

  if (myBooks) {
    let booksToDisplay = myBooks.map((book, idx) =>
      <BookVariant
        title={book.title}
        cover={book.book_image}
        url={book.amazon_product_url}
        author={book.contributor}
        key={idx}
        isbn={book.primary_isbn13}
        rank={book.rank}
        genre={book.genre}
        genreSelection={book.genreSelection || null}
        userRating={book.userRating}
        weeks_on_list={book.weeks_on_list}
        description={book.description}
        isFavorite={book.isFavorite}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
        handleModalState={handleModalState}
      />)

    return (
      <div className='my-library'>
        <img src={libraryBanner} alt='My Library Banner' className='my-library-banner' />
        {!!isLoading &&
          <div className='loading-container'>
            <img src={Loading} alt="Loading" className='loading-image' />
          </div>
        }
        {modalDetails && <Modal handleModalState={handleModalState} modalDetails={modalDetails} submitFeedback={submitFeedback} />}
        <NavBar clearSearch={clearSearch} view='my-library' />
        <h1 className='my-library-header'>My Library</h1>
        {!myLibrary.length && <p className='no-books-warning'>There are no books in your library yet. Add some!</p>}
        <div className='book-container'>
          {booksToDisplay}
        </div>
      </div>
    )
  }
}

// MyLibrary.propTypes = {
//   myLibrary: PropTypes.arrayOf(PropTypes.elementType).isRequired,
//   handleModalState: PropTypes.func.isRequired,
//   clearSearch: PropTypes.func.isRequired,
//   showModal: PropTypes.bool.isRequired,
//   isLoading: PropTypes.bool.isRequired,
//   bookDetails: PropTypes.object,
// }

export default MyLibrary