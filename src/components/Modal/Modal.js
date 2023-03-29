import React from 'react'
import PropTypes from 'prop-types'
import './Modal.css'

const Modal = ({ handleModalState, modalDetails }) => {

  console.log(modalDetails)
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