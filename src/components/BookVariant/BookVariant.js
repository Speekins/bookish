import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './BookVariant.css'
import heart from '../assets/images/heart-regular.svg'
import fillHeart from '../assets/images/heart-solid.svg'

export default function BookVariant({
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
  description }) {

    const favorite = <img src={fillHeart}
      alt="favorite icon"
      className='book-variant-heart'
      onClick={() => {
        removeFromFavorites(isbn)
      }}
    />

    const unFavorite = <img src={heart}
      alt="favorite icon"
      className='book-variant-heart'
      onClick={() => {
        addToFavorites(isbn)
      }}
    />

    return (
      <div className='book-variant'>
        <img alt={`Cover of ${title}`} src={`${cover}`} className="book-variant-cover" onClick={() => handleModalState(book_id)} />
        <div className='book-variant-title'>
          {isFavorite === true ? favorite : unFavorite}
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