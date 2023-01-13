import React, { useEffect, useState, useCallback } from 'react'
//import { Link } from 'react-router-dom'
import './Book.css'
import heart from '../assets/images/heart-regular.svg'
import fillHeart from '../assets/images/heart-solid.svg'

const Book = ({ book_id, name, cover, url, addToFavorites, genre }) => {

  const [isFavorite, setIsFavorite] = useState()

  const toggleFavorite = useCallback(() => {
    setIsFavorite(!isFavorite)
  }, []) 

  useEffect(() => {
    setIsFavorite(false)
  }, [])

  const favorite = <img src={fillHeart}
    alt="favorite icon"
    className='heart'
    onClick={() => {
      addToFavorites()
      toggleFavorite()
    }}
  />

  const unFavorite = <img src={heart}
    alt="favorite icon"
    className='heart'
    onClick={() => {
      addToFavorites(book_id, genre)
      toggleFavorite()
    }}
  />

  return (
    <div className='book'>
      <img alt={`Cover of ${name}`} src={`${cover}`} className="book-cover" />
      <div className='title'>
        {!isFavorite ? unFavorite : favorite}
        <p className='name'>{name}</p>
      </div>
    </div>
  )
}

export default Book 