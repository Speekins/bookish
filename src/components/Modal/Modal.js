import React from 'react'
import './Modal.css'

const Modal = ({ handleModalState, bookDetails }) => {

  let authors = bookDetails.authors.join(', ')

  if (bookDetails) {
    return (
      <div className='modal-container'>
        <div className='modal'>
          <span className='close-button-container'>
            <button className='close-modal' onClick={handleModalState}>X</button>
          </span>
          <h1 className='modal-header'>{bookDetails.name}</h1>
          <div className='modal-details'>
            <div>
              <p><b>Author(s)</b>: {authors}</p>
              <p><b>Rating</b>: {bookDetails.rating}/5</p>
              <p><b>Length</b>: {bookDetails.pages} Pages</p>
              <p><b>Publish Date</b>: {bookDetails.published_date}</p>
            </div>
            <img className='modal-cover' alt="Cover" src={bookDetails.cover} />
          </div>
          <div className='modal-synopsis'>
            <p>{bookDetails.synopsis}</p>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className='modal-container'>
        <div className='modal'>
          <h1>Error...</h1>
          <button >Close</button>
        </div>
      </div>
    )
  }
}

export default Modal