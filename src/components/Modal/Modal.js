import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import NotesForm from '../NotesForm/NotesForm'
import star from '../assets/images/star-regular.svg'
import fillStar from '../assets/images/star-solid.svg'
import './Modal.css'
import { updateFavoriteBook } from '../../apiCalls'

const Modal = ({ handleClick, modalDetails, submitFeedback }) => {

  const [rating, setRating] = useState(modalDetails.userRating)
  const [starSet, setStarSet] = useState([])

  const handleUserChange = useCallback(async (ratingNum) => {
    await updateFavoriteBook(modalDetails._id, { 'userRating': ratingNum })
  }, [modalDetails])

  useEffect(() => {
    let starSet = []

    for (let i = 1; i < 6; i++) {
      starSet.push(
        <img src={(i > rating || !rating) ? star : fillStar} alt="star" className='star' id={i} key={i} onClick={(event) => {
          setRating(Number(event.target.id))
          handleUserChange(Number(event.target.id))
        }} />
      )
    }
    setStarSet(starSet)
  }, [rating, handleUserChange])

  return (
    <div className='modal-container'>
      <div className='modal'>
        <span className='close-button-container'>
          <button className='close-modal' onClick={() => handleClick()}>X</button>
        </span>
        <img className='modal-cover' alt="Cover" src={modalDetails.book_image} />
        <div className='modal-details-container'>
          <div className='modal-details'>
          <h1 className='modal-header'>{modalDetails.title}</h1>
            {starSet}
            <p><b>Author(s)</b>: {modalDetails.author}</p>
            <div className='modal-synopsis'>
              <p>{modalDetails.description}</p>
            </div>
            <NotesForm
              userNotes={modalDetails.userNotes}
              id={modalDetails._id}
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