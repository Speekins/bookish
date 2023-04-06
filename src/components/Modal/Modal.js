import React from 'react'
import PropTypes from 'prop-types'
import NotesForm from '../NotesForm/NotesForm'
import './Modal.css'

const Modal = ({ handleModalState, modalDetails, submitNotes }) => {

  return (
    <div className='modal-container'>
      <div className='modal'>
        <span className='close-button-container'>
          <button className='close-modal' onClick={() => handleModalState()}>X</button>
        </span>
        <h1 className='modal-header'>{modalDetails.title}</h1>
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