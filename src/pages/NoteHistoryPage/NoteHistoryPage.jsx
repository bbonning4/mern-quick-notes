import { useState, useEffect } from "react";
import * as notesAPI from '../../utilities/notes-api';

export default function OrderHistoryPage() {
  const [notes, setNotes] = useState([])
  useEffect(() => {
    async function getNotes() {
      const notes = await notesAPI.getAll();
      setNotes(notes);
    }
    getNotes()
  }, [])
  return (
    <>
      <h1>All Notes</h1><hr />
      { notes.length > 0 ?
        <div>
          {notes.map(note => (
            <h1>{note.text}</h1>
          ))}
        </div> 
      :
      <h1>No Notes Yet!</h1>
      }
    </>
  );
}