import { useState, useEffect } from "react";
import * as notesAPI from '../../utilities/notes-api';
import AddNoteForm from "../../components/AddNoteForm/AddNoteForm";
import NoteComponent from "../../components/NoteComponent/NoteComponent";

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
      <AddNoteForm notes={notes} setNotes={setNotes} />
      { notes.length > 0 ?
        <NoteComponent notes={notes} setNotes={setNotes} />
        :
        <h1>No Notes Yet!</h1>
      }
    </>
  );
}