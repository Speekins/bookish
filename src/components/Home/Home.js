import React, { useState, useEffect } from 'react'
import Book from '../Book/Book'
import Banner from '../assets/images/books1.jpg'
import '../NavBar/NavBar'
import './Home.css'
import NavBar from '../NavBar/NavBar'
import Modal from '../Modal/Modal'
import Loading from '../assets/images/bookish_loading.png'

const Home = ({ books, showModal, handleModalState, bookDetails, isLoading }) => {

  console.log(isLoading)

  return (
    <>
      <div className='banner'>
        <img alt="Banner with books" className='banner-image' src={Banner} />
        <h1 className='bookish'>BOOKISH</h1>
      </div>
      {!!isLoading &&
        <div className='loading-container'>
          <h1>LOADING!</h1>
          <img src={Loading} alt="Loading" className='loading-image'/>
        </div>
      }
      {showModal && <Modal handleModalState={handleModalState} bookDetails={bookDetails} />}
      <NavBar />
      <div className='book-container'>
        <h1>Fiction</h1>
        {books.fiction}
        <h1>Non-Fiction</h1>
        {books.nonFiction}
        <h1>Mystery</h1>
        {books.mystery}
        <h1>Memoir</h1>
        {books.memoir}
        <h1>Romance</h1>
        {books.romance}
        <h1>History</h1>
        {books.history}
        <h1>Horror</h1>
        {books.horror}
        <h1>Science Fiction</h1>
        {books.scienceFiction}
      </div>
    </>
  )
}

export default Home