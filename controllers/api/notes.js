const Note = require('../../models/note');

module.exports = {
    index,
};

async function index(req, res) {
    console.log(user);
    if (user) {
        const notes = await Note.find({user: user._id});
        console.log(notes);
        res.json(notes);
    }
}
