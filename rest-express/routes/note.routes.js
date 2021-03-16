module.exports = (app) => {
    const notes = require('../controllers/notes.controller');
    const isAuthenticated = require('../middlewares/isAuthenticated');

    app.post('/notes', isAuthenticated, notes.create);

    app.get('/notes', isAuthenticated, notes.findAll);

    app.get('/notes/:noteId', isAuthenticated, notes.findOne);

    app.put('/notes/:noteId', isAuthenticated, notes.update);

    app.delete('/notes/:noteId', isAuthenticated, notes.delete);
}