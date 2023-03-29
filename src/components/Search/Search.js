import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Search.css'
import NavBar from '../NavBar/NavBar'
import Modal from '../Modal/Modal'
import banner from '../assets/images/search_banner.jpg'
import Loading from '../assets/images/bookish_loading.png'

const Search = ({ awardedBooks, searchByYear, showModal, handleModalState, bookDetails, isLoading, clearSearch, error }) => {

  const [year, setYear] = useState('')

  const warning = <p className='no-books-warning'>Something went wrong here...</p>

  let yearSelect =
    <select name="year-select" value={year} className="year-select" onChange={(e) => setYear(e.target.value)}>
      <option value=''>Choose a year...</option>
      <option value='2022'>2022</option>
      <option value='2021'>2021</option>
      <option value='2020'>2020</option>
      <option value='2019'>2019</option>
      <option value='2018'>2018</option>
      <option value='2017'>2017</option>
      <option value='2016'>2016</option>
      <option value='2015'>2015</option>
      <option value='2014'>2014</option>
      <option value='2013'>2013</option>
      <option value='2012'>2012</option>
      <option value='2011'>2011</option>
    </select>

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
        <p className='search-message'>Show me the most awarded books from {yearSelect}</p>
        <button className='search-submit' onClick={() => searchByYear(year)}>Submit</button>
      </div>
      {!!awardedBooks.length && <h1 className='year'>{year}</h1>}
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