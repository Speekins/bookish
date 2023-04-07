import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './BookVariant.css'
import heart from '../assets/images/heart-regular.svg'
import fillHeart from '../assets/images/heart-solid.svg'

export default function BookVariant({
  title,
  cover,
  isbn,
  genre,
  genreSelection,
  isFavorite,
  userRating,
  addToFavorites,
  removeFromFavorites,
  handleModalState,
}) {

  const favorite = <img src={fillHeart}
    alt="favorite icon"
    className='book-variant-heart'
    onClick={() => {
      removeFromFavorites(isbn, genreSelection)
    }}
  />

  const unFavorite = <img src={heart}
    alt="favorite icon"
    className='book-variant-heart'
    onClick={() => {
      addToFavorites(isbn, genre, genreSelection)
    }}
  />

  return (
    <div className='book-variant'>
      <div className='book-variant-cover-container'>
        <img alt={`Cover of ${title}`} src={`${cover}`} className="book-variant-cover" onClick={() => handleModalState(isbn)} />
        <div className='book-variant-cover-overlay'>
          {userRating ? <p>{userRating}⭐</p> : <p>No Rating Yet!</p>}
        </div>
      </div>
      <div className='book-variant-title'>
        {isFavorite ? favorite : unFavorite}
        <p className='name'>{title}</p>
      </div>
    </div>
  )
}

// BookVariant.propTypes = {
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