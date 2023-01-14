import React from 'react'
import './Modal.css'

const Modal = () => {


  return (
    <div className='modal-container'>
      <div className='modal'>
        <h1>This is the modal!</h1>
      </div>
      <button className='close-modal'>Close</button>
    </div>
  )
}

export default Modal