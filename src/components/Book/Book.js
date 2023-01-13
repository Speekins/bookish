import React, { useEffect, useState, useCallback } from 'react'
//import { Link } from 'react-router-dom'
import './Book.css'
import heart from '../assets/images/heart-regular.svg'
import fillHeart from '../assets/images/heart-solid.svg'

const Book = ({ book_id, name, cover, url, addToFavorites, genre, liked }) => {

  const [isFavorite, setIsFavorite] = useState(liked)

  const handleChange = () => {
    isFavorite ? setIsFavorite(false) : setIsFavorite(true)
  }

  const newBook = <Book
  name={name}
  cover={cover}
  url={url}
  key={book_id}
  book_id={book_id}
  addToFavorites={addToFavorites}
  genre={genre}
  liked={true}
/>

  const favorite = <img src={fillHeart}
    alt="favorite icon"
    className='heart'
    onClick={() => {
      //removeFromFavorites(book_id, genre)
      handleChange()
    }}
  />

  const unFavorite = <img src={heart}
    alt="favorite icon"
    className='heart'
    onClick={() => {
      handleChange()
      addToFavorites(book_id, genre, newBook)
    }}
  />

  return (
    <div className='book'>
      <img alt={`Cover of ${name}`} src={`${cover}`} className="book-cover" />
      <div className='title'>
        {isFavorite === true ? favorite : unFavorite}
        <p className='name'>{name}</p>
      </div>
    </div>
  )
}

export default Book 