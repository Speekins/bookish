import React from 'react'
import './Modal.css'

const Modal = ({handleModalState}) => {

  return (
    <div className='modal-container'>
      <div className='modal'>
        <h1>This is the modal!</h1>
        <button className='close-modal' onClick={handleModalState}>Close</button>
      </div> 
    </div>
  )
}

export default Modal