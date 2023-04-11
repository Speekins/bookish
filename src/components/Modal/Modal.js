import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import NotesForm from '../NotesForm/NotesForm'
import star from '../assets/images/star-regular.svg'
import fillStar from '../assets/images/star-solid.svg'
import './Modal.css'

const Modal = ({ handleModalState, modalDetails, submitFeedback }) => {

  const [rating, setRating] = useState(modalDetails.userRating)
  const [starSet, setStarSet] = useState([])

  useEffect(() => {
    let set = document.getElementsByClassName('star')
    Array.from(set).map(el => {
      if (el.id <= rating) {
        el.src = fillStar
        return el
      } else {
        el.src = star
        return el
      }
    })
    submitFeedback(rating, modalDetails.primary_isbn13)
  }, [rating])

  useEffect(() => {
    let starSet = []

    for (let i = 1; i < 6; i++) {
      console.log(!rating)
        starSet.push(
          <img src={(i > rating || !rating) ? star : fillStar} alt="star" className='star' id={i} key={i} onClick={(event) => { setRating(Number(event.target.id)) }} />
        )
    }
    setStarSet(starSet)
  }, [])



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
//   } else {
//     return (
//       <div className='modal-container'>
//         <div className='modal'>
//           <span className='close-button-container'>
//             <button className='close-modal' onClick={handleModalState}>X</button>
//             <h1 className='no-books-warngin'>Something went wrong...</h1>
//           </span>
//         </div>
//       </div>
//     )
//   }
// }

// Modal.protoTypes = {
//   handleModalState: PropTypes.func.isRequired,
//   modalDetails: PropTypes.object
// }

export default Modal