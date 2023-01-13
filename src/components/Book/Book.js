import React, { useState } from 'react'
//import { Link } from 'react-router-dom'
import './Book.css'
import heart from '../assets/images/heart-regular.svg'
import fillHeart from '../assets/images/heart-solid.svg'

const Book = ({ name, cover }) => {

  const [isFavorite, setIsFavorite] = useState(false)

  const favorite = <img src={fillHeart}
    alt="favorite icon"
    className='heart'
    onClick={() => setIsFavorite(false)}
  />

  const unFavorite = <img src={heart}
    alt="favorite icon"
    className='heart'
    onClick={() => setIsFavorite(true)}
  />

  return (
    <div className='book'>
      <img alt={`Cover of ${name}`} src={`${cover}`} className="book-cover" />
      <div className='title'>
        {!isFavorite && unFavorite}
        {isFavorite && favorite}
        <p className='name'>{name}</p>
      </div>
    </div>
  )
}

export default Book 