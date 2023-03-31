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
  genre,
  liked,
  addToFavorites,
  removeFromFavorites,
  handleModalState,
  rank,
  weeks_on_list,
  description }) => {

  const [isFavorite, setIsFavorite] = useState(liked)

  const handleChange = () => {
    isFavorite === true ? setIsFavorite(false) : setIsFavorite(true)
  }

  const likeBook = <Book
    title={title}
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
    title={title}
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
      <img alt={`Cover of ${title}`} src={`${cover}`} className="book-cover" onClick={() => handleModalState(book_id)} />
      <div className='book-info'>
        <div className='book-info-header'>
          <div className='title-author'>
            <p>{genre}</p>
            <h1 className='title'>{title}</h1>
            <p className='author'>{author}</p>
          </div>
          {isFavorite === true ? favorite : unFavorite}
        </div>
        <div className='book-info-details'>
          <p className='description'>{description}</p>
          <p className='rank'>This week's rank: #{rank}</p>
          <p className='weeks-on-list'>Weeks on this list: {weeks_on_list}</p>
          <a href={url} className='url'>More Info & Purchase Options</a>
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