import React, { useState, useEffect, useCallback } from 'react'
import './NotesForm.css'
import { updateFavoriteBook } from '../../apiCalls'

function NotesForm({ userNotes, id }) {

  const [isEditing, setIsEditing] = useState(false)
  const [notes, setNotes] = useState(userNotes)

  // useEffect(() => {
  //   setNotes(userNotes ? userNotes : '')
  // }, [userNotes])

  const handleUserChange = useCallback(async () => {
    await updateFavoriteBook(id, { 'userNotes': notes })
  }, [id, notes])

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
    console.log(notes)
    if (isEditing) { handleUserChange() }
    setIsEditing(isEditing ? false : true)
  }}>Submit</button>

  return (
    <div className='my-notes-container'>
      <h3 className='my-notes-header'>My Notes</h3>
      <div className='text-form'>
        {isEditing ? textForm : <p>{notes}</p>}
      </div>
      {isEditing ? submitButton : editButton}
    </div>
  )
}

export default NotesForm