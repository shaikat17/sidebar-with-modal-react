import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Modal = () => {
  return (
    <div className={`modal-overlay`}>
    <div className="modal-container">
    <h3>Modal Content</h3></div>
    <button className="close-modal-btn">
    <FaTimes />
    </button>
    </div>
  )
}

export default Modal