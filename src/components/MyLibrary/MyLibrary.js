import React from 'react'
import libraryBanner from '../assets/images/my-library-banner.jpg'
import './MyLibrary.css'
import NavBar from '../NavBar/NavBar'
import Modal from '../Modal/Modal'
import Loading from '../assets/images/bookish_loading.png'

const MyLibrary = ({ myLibrary, showModal, handleModalState, bookDetails, isLoading }) => {
  return (
    <div>
      <img src={libraryBanner} alt='My Library Banner' className='my-library-banner' />
      {!!isLoading &&
        <div className='loading-container'>
          <h1>LOADING!</h1>
          <img src={Loading} alt="Loading" className='loading-image' />
        </div>
      }
      {showModal && <Modal handleModalState={handleModalState} bookDetails={bookDetails} />}
      <NavBar />
      <h1 className='my-library-header'>My Library</h1>
      {myLibrary.length ? myLibrary : <h1>No books in your library yet!</h1>}
    </div>
  )
}

export default MyLibrary