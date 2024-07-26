import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import NotesForm from '../NotesForm/NotesForm'
import star from '../assets/images/star-regular.svg'
import fillStar from '../assets/images/star-solid.svg'
import './Modal.css'

const Modal = ({ handleModalState, modalDetails, submitFeedback }) => {

  const [rating, setRating] = useState(modalDetails.userRating)
  const [starSet, setStarSet] = useState([])

  const handleClick = useCallback((ratingNum) => {
    submitFeedback(ratingNum, modalDetails.primary_isbn13)
  }, [modalDetails, submitFeedback])

  useEffect(() => {
    let starSet = []

    for (let i = 1; i < 6; i++) {
      starSet.push(
        <img src={(i > rating || !rating) ? star : fillStar} alt="star" className='star' id={i} key={i} onClick={(event) => {
          setRating(Number(event.target.id))
          handleClick(Number(event.target.id))
        }} />
      )
    }
    setStarSet(starSet)
  }, [rating, handleClick])

  return (
    <div className='modal-container'>
      <div className='modal'>
        <span className='close-button-container'>
          <button className='close-modal' onClick={() => handleModalState()}>X</button>
        </span>
        <h1 className='modal-header'>{modalDetails.title}</h1>
        <div className='modal-details-container'>
          <img className='modal-cover' alt="Cover" src={modalDetails.book_image} />
          <div className='modal-details'>
            {starSet}
            <p><b>Author(s)</b>: {modalDetails.author}</p>
            <div className='modal-synopsis'>
              <p>{modalDetails.description}</p>
            </div>
            <NotesForm
              userNotes={modalDetails.userNotes}
              submitFeedback={submitFeedback}
              isbn={modalDetails.primary_isbn13}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Modal.protoTypes = {
  handleModalState: PropTypes.func.isRequired,
  modalDetails: PropTypes.object
}

export default Modal