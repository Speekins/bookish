import React from 'react'
//import { Link } from 'react-router-dom'

const Book = ({ name, rating, year }) => {
  return (
    <>
      <p>Name: {name}</p>
      <p>Rating: {rating}</p>
      <p>Year: {year}</p>
    </>
  )
}

export default Book