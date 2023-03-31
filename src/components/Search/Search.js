import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Search.css'
import NavBar from '../NavBar/NavBar'
import Modal from '../Modal/Modal'
import banner from '../assets/images/books2.jpg'
import Loading from '../assets/images/bookish_loading.png'

const Search = ({ awardedBooks, searchByYear, showModal, handleModalState, bookDetails, isLoading, clearSearch, error }) => {

  const [date, setDate] = useState('')

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
        <input type="date" value='date' onChange={(event) => setDate(event.target.value)}></input>
        <button className='search-submit' onClick={() => searchByYear(date)}>Submit</button>
      </div>
      {!!awardedBooks.length && <h1 className='year'>{date}</h1>}
      <div className='search-container'>
        {showModal && <Modal handleModalState={handleModalState} bookDetails={bookDetails} />}
        {!!awardedBooks.length && awardedBooks}
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