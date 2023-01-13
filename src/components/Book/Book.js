import React, { useState } from 'react'
//import { Link } from 'react-router-dom'
import './Book.css'
import heart from '../assets/images/heart-regular.svg'
import fillHeart from '../assets/images/heart-solid.svg'

const Book = ({ book_id, name, cover, url, isFavorite, addToFavorites, genre  }) => {

  //const [isFavorite, setIsFavorite] = useState(false)

  const favorite = <img src={fillHeart}
    alt="favorite icon"
    className='heart'
    onClick={() => addToFavorites()}
  />

  const unFavorite = <img src={heart}
    alt="favorite icon"
    className='heart'
    onClick={() => {
      let book = <Book
      name={name}
      cover={cover}
      url={url}
      key={book_id}
      book_id={book_id}
      isFavorite='true'
      addToFavorites={addToFavorites}
    />
      addToFavorites(book_id, genre)
    }}
  />

  return (
    <div className='book'>
      <img alt={`Cover of ${name}`} src={`${cover}`} className="book-cover" />
      <div className='title'>
        {isFavorite ? unFavorite : favorite}
        <p className='name'>{name}</p>
      </div>
    </div>
  )
}

export default Book 