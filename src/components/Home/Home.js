import React, { useState, useEffect } from 'react'
import Book from '../Book/Book'
import Banner from '../assets/images/books1.jpg'
import '../NavBar/NavBar'
import './Home.css'
import NavBar from '../NavBar/NavBar'
import Modal from '../Modal/Modal'
import Loading from '../assets/images/bookish_loading.png'

const Home = ({ books, showModal, handleModalState, bookDetails, isLoading, clearSearch }) => {

  return (
    <div className='home'>
      <div className='banner'>
        <img alt="Banner with books" className='banner-image' src={Banner} />
        <h1 className='bookish'>BOOKISH</h1>
      </div>
      {!!isLoading &&
        <div className='loading-container'>
          <h1>LOADING!</h1>
          <img src={Loading} alt="Loading" className='loading-image' />
        </div>
      }
      {showModal && <Modal handleModalState={handleModalState} bookDetails={bookDetails} />}
      <NavBar clearSearch={clearSearch} view='home'/>
      <h1 className='genre-name'>Fiction</h1>
      <div className='genre'>
        {books.fiction}
      </div>
      <h1 className='genre-name'>Non-Fiction</h1>
      <div className='genre'>
        {books.nonFiction}
      </div>
      <h1 className='genre-name'>Mystery</h1>
      <div className='genre'>
        {books.mystery}
      </div>
      <h1 className='genre-name'>Memoir</h1>
      <div className='genre'>
        {books.memoir}
      </div>
      <h1 className='genre-name'>Romance</h1>
      <div className='genre'>
        {books.romance}
      </div>
      <h1 className='genre-name'>History</h1>
      <div className='genre'>
        {books.history}
      </div>
      <h1 className='genre-name'>Horror</h1>
      <div className='genre'>
        {books.horror}
      </div>
      <h1 className='genre-name'>Science Fiction</h1>
      <div className='genre'>
        {books.scienceFiction}
      </div>
    </div>
  )
}

export default Home