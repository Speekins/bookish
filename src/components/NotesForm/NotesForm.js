import React, { useState, useEffect } from 'react'
import './NotesForm.css'

function NotesForm({ userNotes, submitFeedback, isbn }) {

  const [isEditing, setIsEditing] = useState(false)
  const [notes, setNotes] = useState()

  useEffect(() => {
    setNotes(userNotes ? userNotes : '')
  }, [userNotes])

  const textForm = <textarea
    placeholder='Type your thoughts here...'
    id="my-notes"
    name="my-notes"
    rows="8"
    cols="50"
    value={notes}
    onChange={(event) => setNotes(event.target.value)}>
  </textarea>

  const editButton = <button className="edit-button" onClick={() => setIsEditing(isEditing ? false : true)}>Edit</button>

  const submitButton = <button className='submit-button' onClick={() => {
    submitFeedback(notes, isbn)
    setIsEditing(isEditing ? false : true)
  }}>Submit</button>

  return (
    <div className='my-notes-container'>
      <h3 className='my-notes-header'>My Notes</h3>
      <div className='text-form'>
        {isEditing ? textForm : <p>{userNotes}</p>}
      </div>
      {isEditing ? submitButton : editButton}
    </div>
  )
}

export default NotesForm