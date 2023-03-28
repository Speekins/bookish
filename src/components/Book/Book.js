import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Book.css'
import heart from '../assets/images/heart-regular.svg'
import fillHeart from '../assets/images/heart-solid.svg'

const Book = ({
  book_id,
  title,
  author,
  cover,
  url,
  isbn,
  genre,
  isFavorite,
  addToFavorites,
  removeFromFavorites,
  handleModalState,
  rank,
  weeks_on_list,
  description }) => {

  const favorite = <img src={fillHeart}
    alt="favorite icon"
    className='heart'
    onClick={() => {
      removeFromFavorites(isbn)
    }}
  />

  const unFavorite = <img src={heart}
    alt="favorite icon"
    className='heart'
    onClick={() => {
      addToFavorites(isbn)
    }}
  />

  return (
    <div className='book'>
      <img alt={`Cover of ${title}`} src={`${cover}`} className="book-cover" onClick={() => handleModalState(book_id)} />
      <div className='book-info'>
        <div className='book-info-header'>
          <div className='title-author'>
            <p>{genre}</p>
            <h1 className='title'>{title}</h1>
            <p className='author'>{author}</p>
          </div>
          {isFavorite ? favorite : unFavorite}
        </div>
        <div className='book-info-details'>
          <p className='description'>{description}</p>
          <div className='rank-weeks-on-list-container'>
            <div className='rank-container'>
              <p style={{ textDecoration: 'underline', margin: '5px' }}>Rank</p>
              <p className='rank'>#{rank}</p>
            </div>
            <div className='weeks-on-list-container'>
              <p style={{ textDecoration: 'underline', margin: '5px' }}>Consecutive Weeks</p>
              <p className='weeks-on-list'>{weeks_on_list}</p>
            </div>
          </div>
          <a href={url} className='url' target="_blank" rel="noopener noreferrer">More Info & Purchase Options</a>
        </div>
      </div>
    </div>
  )
}

// Book.propTypes = {
//   book_id: PropTypes.number.isRequired,
//   name: PropTypes.string.isRequired,
//   cover: PropTypes.string.isRequired,
//   url: PropTypes.string.isRequired,
//   genre: PropTypes.string.isRequired,
//   liked: PropTypes.bool.isRequired,
//   addToFavorites: PropTypes.func.isRequired,
//   removeFromFavorites: PropTypes.func.isRequired,
//   handleModalState: PropTypes.func
// }

export default Book 