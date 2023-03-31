import React from 'react'
import PropTypes, { bool } from "prop-types"
import libraryBanner from '../assets/images/my-library-banner.jpg'
import './MyLibrary.css'
import NavBar from '../NavBar/NavBar'
import Modal from '../Modal/Modal'
import Loading from '../assets/images/bookish_loading.png'

const MyLibrary = ({ myLibrary, showModal, handleModalState, bookDetails, isLoading, clearSearch }) => {
  return (
    <div className='my-library'>
      <img src={libraryBanner} alt='My Library Banner' className='my-library-banner' />
      {!!isLoading &&
        <div className='loading-container'>
          <img src={Loading} alt="Loading" className='loading-image' />
        </div>
      }
      {showModal && <Modal handleModalState={handleModalState} bookDetails={bookDetails} />}
      <NavBar clearSearch={clearSearch} view='my-library' />
      <h1 className='my-library-header'>My Library</h1>
      {!myLibrary.length && <p className='no-books-warning'>There are no books in your library yet. Add some!</p>}
      <div className='book-container'>
        {myLibrary}
      </div>
    </div>
  )
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