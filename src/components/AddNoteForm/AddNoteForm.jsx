import { useState } from "react";
import * as notesAPI from "../../utilities/notes-api"

export default function AddNoteForm({ notes, setNotes }) {
    const [newNote, setNewNote] = useState({text: ""});

    function handleChange(evt) {
        setNewNote({ text: evt.target.value });
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        const note = await notesAPI.addNote(newNote);
        setNotes([...notes, note]);
        setNewNote({text: ""})
        // should probably handle errors
    }

    return (
        <>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <label>Note</label>&nbsp;
                <input type="text" name="text" value={newNote.text} onChange={handleChange} required />
                <button type="submit">Add Note</button>
            </form>
        </>
    )
}