const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/notes'

// GET /
router.get('/', ensureLoggedIn, notesCtrl.index);

// POST /new
router.post('/new', ensureLoggedIn, notesCtrl.addNote)

// DELETE /:noteId
router.delete('/:noteId', ensureLoggedIn, notesCtrl.deleteNote);

module.exports = router;