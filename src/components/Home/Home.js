import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Banner from '../assets/images/books1.jpg'
import '../NavBar/NavBar'
import './Home.css'
import NavBar from '../NavBar/NavBar'
import Modal from '../Modal/Modal'
import Loading from '../assets/images/bookish_loading.png'

const Home = ({ books, showModal, handleModalState, bookDetails, isLoading, clearSearch, getGenre }) => {

  const [genre, setGenre] = useState(Object.keys(books)[0])
  const warning = <p className='no-books-warning'>Something went wrong here...</p>
  const currentGenre = Object.keys(books)[0]
  let genreNames = ['fiction', 'nonFiction', 'mystery', 'memoir', 'romance', 'history', 'horror', 'scienceFiction']
  let options = genreNames.map(genreName => {
    if (genreName !== currentGenre) {
      return <option value={genreName}>{genreName}</option>
    }
  })
    
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
      <select name="year-select" value={genre} className="year-select" onChange={(e) => setGenre(e.target.value)}>
        {options}
      </select>
      <button className='get-genre' onClick={() => getGenre(genre)}></button>
      <h1 className='genre-name'>{genre}</h1>
      <div className='genre' id={genre}>
        {!isLoading && books[genre] ? books[genre] : (!!isLoading ? <p>Loading...</p> : warning)}
      </div>
    </div>
  )
}

Home.propTypes = {
  //books: PropTypes.arrayOf(PropTypes.elementType),
  showModal: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleModalState: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
  bookDetails: PropTypes.object,
}

export default Home