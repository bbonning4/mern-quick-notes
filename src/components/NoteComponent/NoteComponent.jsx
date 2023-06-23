import * as notesAPI from "../../utilities/notes-api"
import './NoteComponent.css'

export default function NoteComponent({ notes, setNotes }) {
    async function handleSubmit(evt, id) {
        evt.preventDefault();
        const res = await notesAPI.deleteNote(id)
        if (res.success) {
            const updatedNotes = notes.filter(note => note._id !== id);
            console.log(updatedNotes);
            setNotes(updatedNotes);
        }
    }
    return (
        <>
            {notes.map(note => (
                <div className="note-component" key={note._id}>
                    <form onSubmit={evt => handleSubmit(evt, note._id)}>
                        <div className="note-content">
                            <h2>{note.text}</h2>
                            <span className="note-date">{new Date(note.createdAt).toLocaleString()}</span>
                            <button type="submit">X</button>
                        </div>
                    </form>
                </div>
            ))}
        </> 
    )
}