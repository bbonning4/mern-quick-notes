const Note = require('../../models/note');

module.exports = {
    index,
    addNote,
    deleteNote
};

async function index(req, res) {
    const user = req.user;
    if (user) {
        const notes = await Note.find({user: user._id});
        res.json(notes);
    }
}

async function addNote(req, res) {
    const user = req.user;
    const newNote = await Note.create({text: req.body.text, user: user._id});
    res.json(newNote);
}

async function deleteNote(req, res) {
    const id = req.params.noteId;
    try {
        await Note.deleteOne({ id: id })
        res.status(200).json({success: true, message: 'note deleted'})
    } catch (error) {
        res.status(500).json({success: false, message: 'failed to delete note'})
    }
}