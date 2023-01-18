import React from 'react'
import PropTypes from 'prop-types'
import Banner from '../assets/images/books1.jpg'
import '../NavBar/NavBar'
import './Home.css'
import NavBar from '../NavBar/NavBar'
import Modal from '../Modal/Modal'
import Loading from '../assets/images/bookish_loading.png'

const Home = ({ books, showModal, handleModalState, bookDetails, isLoading, clearSearch }) => {

  const warning = <p className='no-books-warning'>Something went wrong here...</p>

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
      <h1 className='genre-name'>Fiction</h1>
      <div className='genre' id='fiction'>
        {!isLoading && books.fiction ? books.fiction : (!!isLoading ? <p>Loading...</p> : warning)}
      </div>
      <h1 className='genre-name'>Non-Fiction</h1>
      <div className='genre' id='non-fiction'>
        {!isLoading && books.nonFiction ? books.nonFiction : (!!isLoading ? <p>Loading...</p> : warning)}
      </div>
      <h1 className='genre-name'>Mystery</h1>
      <div className='genre' id='mystery'>
        {!isLoading && books.mystery ? books.mystery : (!!isLoading ? <p>Loading...</p> : warning)}
      </div>
      <h1 className='genre-name'>Memoir</h1>
      <div className='genre'>
        {!isLoading && books.memoir ? books.memoir : (!!isLoading ? <p>Loading...</p> : warning)}
      </div>
      <h1 className='genre-name'>Romance</h1>
      <div className='genre'>
        {!isLoading && books.romance ? books.romance : (!!isLoading ? <p>Loading...</p> : warning)}
      </div>
      <h1 className='genre-name'>History</h1>
      <div className='genre'>
        {!isLoading && books.history ? books.history : (!!isLoading ? <p>Loading...</p> : warning)}
      </div>
      <h1 className='genre-name'>Horror</h1>
      <div className='genre'>
        {!isLoading && books.horror ? books.horror : (!!isLoading ? <p>Loading...</p> : warning)}
      </div>
      <h1 className='genre-name'>Science Fiction</h1>
      <div className='genre'>
        {!isLoading && books.scienceFiction ? books.scienceFiction : (!!isLoading ? <p>Loading...</p> : warning)}
      </div>
    </div>
  )
}

Home.propTypes = {
  books: PropTypes.arrayOf(PropTypes.elementType),
  showModal: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleModalState: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
  bookDetails: PropTypes.object,
}

export default Home