import React, { useState, useEffect } from 'react'
import './NotesForm.css'

function NotesForm({ userNotes, submitNotes, isbn }) {

  const [isEditing, setIsEditing] = useState(false)
  const [notes, setNotes] = useState()

  useEffect(() => {
    setNotes(userNotes ? userNotes : '')
  }, [userNotes])

  const textForm = <div>
    < label htmlFor="my-notes" > My Notes</label>
    <textarea
      id="my-notes"
      name="my-notes"
      rows="4"
      cols="50"
      value={notes}
      onChange={(event) => setNotes(event.target.value)}>
    </textarea>
    <button onClick={() => {
      submitNotes(notes, isbn)
      setIsEditing(isEditing ? false : true)
    }}>Submit</button>
  </div>

  const userNoteDiv = <div>
    <h3>My Notes</h3>
    <div>
      <p>{userNotes}</p>
    </div>
    <button onClick={() => setIsEditing(isEditing ? false : true)}>Edit Thoughts</button>
  </div>

  return (
    <div>
      {isEditing ? textForm : userNoteDiv}
    </div>
  )
}

export default NotesForm