import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Book.css'
import heart from '../assets/images/heart-regular.svg'
import fillHeart from '../assets/images/heart-solid.svg'

const Book = ({ book_id, name, cover, url, genre, liked, addToFavorites, removeFromFavorites, handleModalState }) => {

  const [isFavorite, setIsFavorite] = useState(liked)

  const handleChange = () => {
    isFavorite === true ? setIsFavorite(false) : setIsFavorite(true)
  }

  const likeBook = <Book
    name={name}
    cover={cover}
    url={url}
    key={book_id}
    book_id={book_id}
    addToFavorites={addToFavorites}
    removeFromFavorites={removeFromFavorites}
    handleModalState={handleModalState}
    genre={genre}
    liked={true}
  />

  const unlikeBook = <Book
    name={name}
    cover={cover}
    url={url}
    key={book_id}
    book_id={book_id}
    addToFavorites={addToFavorites}
    removeFromFavorites={removeFromFavorites}
    genre={genre}
    liked={false}
  />

  const favorite = <img src={fillHeart}
    alt="favorite icon"
    className='heart'
    onClick={() => {
      handleChange()
      removeFromFavorites(book_id, genre, unlikeBook)
    }}
  />

  const unFavorite = <img src={heart}
    alt="favorite icon"
    className='heart'
    onClick={() => {
      handleChange()
      addToFavorites(book_id, genre, likeBook)
    }}
  />

  return (
    <div className='book'>
      <img alt={`Cover of ${name}`} src={`${cover}`} className="book-cover" onClick={() => handleModalState(book_id)} />
      <div className='title'>
        {isFavorite === true ? favorite : unFavorite}
        <p className='name'>{name}</p>
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