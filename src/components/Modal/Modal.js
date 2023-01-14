import React from 'react'
import './Modal.css'

const Modal = ({ handleModalState, bookDetails }) => {

  let authors = bookDetails.authors.join(', ')

  if (bookDetails) {
    return (
      <div className='modal-container'>
        <div className='modal'>
          <h1>{bookDetails.name} </h1>
          <p>({bookDetails.published_date})</p>
          <p>Author(s): {authors}</p>
          <p>Rating: {bookDetails.rating}/5</p>
          <p>Length: {bookDetails.pages} Pages</p>
          <img className='modal-cover' alt="Cover" src={bookDetails.cover}/>
          <p>{bookDetails.synopsis}</p>
          <button className='close-modal' onClick={handleModalState}>Close</button>
        </div>
      </div>
    )
  } else {
    return (
      <div className='modal-container'>
        <div className='modal'>
          <h1>Error...</h1>
          <button className='close-modal' onClick={handleModalState}>Close</button>
        </div>
      </div>
    )
  }
}

export default Modal