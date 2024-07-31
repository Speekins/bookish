import React, { useEffect, useState } from 'react'
import PropTypes, { bool } from "prop-types"
import libraryBanner from '../assets/images/my-library-banner.jpg'
import BookVariant from '../BookVariant/BookVariant'
import NavBar from '../NavBar/NavBar'
import Modal from '../Modal/Modal'
import Loading from '../assets/images/bookish_loading.png'
import { getMyLibary, removeFavoriteBook } from '../../apiCalls'
import './MyLibrary.css'

const MyLibrary = ({
  //isLoading,
  clearSearch,
  addToFavorites,
  submitFeedback }) => {

  const [myBooks, setMyBooks] = useState([])
  const [modalDetails, setModalDetails] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function getData() {
      const books = await getMyLibary()
      setMyBooks(books)
    }
    getData()
    setIsLoading(false)
  }, [])

  const handleBookDelete = async (id) => {
    await removeFavoriteBook(id)
    const books = await getMyLibary()
    setMyBooks(books)
  }

  const handleClick = (id = null) => {
    if (!id) {
      setModalDetails(null)
    } else {
      const book = myBooks.find(book => id === book._id)
      setModalDetails(book)
    }
  }

  const handleModalState = () => {
    setModalDetails(null)
  }

  if (!!myBooks.length) {
    let booksToDisplay = myBooks.map((book, idx) =>
      <BookVariant
        title={book.title}
        id={book._id}
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
        handleBookDelete={handleBookDelete}
        handleClick={handleClick}
        handleModalState={handleModalState}
      />)

    return (
      <div className='my-library'>
        <img src={libraryBanner} alt='My Library Banner' className='my-library-banner' />
        {isLoading &&
          <div className='loading-container'>
            <img src={Loading} alt="Loading" className='loading-image' />
          </div>
        }
        {modalDetails && <Modal handleClick={handleClick} modalDetails={modalDetails} submitFeedback={submitFeedback} />}
        <NavBar clearSearch={clearSearch} view='my-library' />
        <h1 className='my-library-header'>My Library</h1>
        {!myBooks.length && isLoading && <p className='no-books-warning'>There are no books in your library yet. Add some!</p>}
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