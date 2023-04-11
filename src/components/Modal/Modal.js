import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import NotesForm from '../NotesForm/NotesForm'
import star from '../assets/images/star-regular.svg'
import fillStar from '../assets/images/star-solid.svg'
import './Modal.css'

const Modal = ({ handleModalState, modalDetails, submitNotes }) => {

  const [rating, setRating] = useState(0)

  useEffect(() => {
    document.getElementsByClassName('star').map(el => {
      if (el.id <= rating) {
        el.src = fillStar
        return el
      } else {
        return el
      }
    })
  }, [rating])

  let starSet = <div className='star-set'>
    <img src={star} alt="star" className='star' id='1' onClick={(event) => setRating(Number(event.target.id))} />
    <img src={star} alt="star" className='star' id='2' onClick={(event) => setRating(Number(event.target.id))} />
    <img src={star} alt="star" className='star' id='3' onClick={(event) => setRating(Number(event.target.id))} />
    <img src={star} alt="star" className='star' id='4' onClick={(event) => setRating(Number(event.target.id))} />
    <img src={star} alt="star" className='star' id='5' onClick={(event) => setRating(Number(event.target.id))} />
  </div>

  return (
    <div className='modal-container'>
      <div className='modal'>
        <span className='close-button-container'>
          <button className='close-modal' onClick={() => handleModalState()}>X</button>
        </span>
        <h1 className='modal-header'>{modalDetails.title}</h1>
        {starSet}
        <div className='modal-details'>
          <img className='modal-cover' alt="Cover" src={modalDetails.book_image} />
          <div>
            <p><b>Author(s)</b>: {modalDetails.contributor}</p>
            <div className='modal-synopsis'>
              <p>{modalDetails.description}</p>
            </div>
            <NotesForm
              userNotes={modalDetails.userNotes}
              submitNotes={submitNotes}
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