import React from 'react'
import { Link } from "react-router-dom"
import "./Bad_Path.css"

const BadPath = () => {

  return (
    <div className='bad-path-container'>
      <h1 className='no-books-warning'>Sorry, this page does not exist...</h1>
      <Link to="/">
        <button className='go-home'>Go Home</button>
      </Link>
    </div>
  )
}

export default BadPath