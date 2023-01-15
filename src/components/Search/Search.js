import React, { useState } from 'react'
import './Search.css'
import NavBar from '../NavBar/NavBar'
import Modal from '../Modal/Modal'
import banner from '../assets/images/search_banner.jpg'
import Loading from '../assets/images/bookish_loading.png'

const Search = ({ awardedBooks, searchByYear, showModal, handleModalState, bookDetails, isLoading, clearSearch }) => {

  const [year, setYear] = useState('')

  let yearSelect = <select name="year-select" value={year} className="year-select" onChange={(e) => setYear(e.target.value)}>
    <option value='2022'>2022</option>
    <option value='2021'>2021</option>
    <option value='2020'>2020</option>
    <option value='2019'>2019</option>
    <option value='2018'>2018</option>
    <option value='2017'>2017</option>
    <option value='2016'>2016</option>
    <option value='2015'>2015</option>
    <option value='2013'>2013</option>
    <option value='2012'>2012</option>
    <option value='2011'>2011</option>
  </select>

  return (
    <div>
      <img src={banner} alt="search banner" className='search-banner' />
      <NavBar clearSearch={clearSearch} view='search'/>
      {!!isLoading &&
        <div className='loading-container'>
          <h1>LOADING!</h1>
          <img src={Loading} alt="Loading" className='loading-image' />
        </div>
      }
      <h1>SEARCH FOR STUFF HERE!</h1>
      <p>Show me the most awarded books from {yearSelect}</p>
      <button className='search-submit' onClick={() => searchByYear(year)}>Submit</button>
      <div className='search-container'>
        {showModal && <Modal handleModalState={handleModalState} bookDetails={bookDetails} />}
        {!!awardedBooks.length && awardedBooks}
      </div>
    </div>
  )
}

export default Search