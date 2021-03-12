
module.exports = (app) => {
    const auth = require('../controllers/auth.controller');
    const isAuthenticated = require('../middlewares/isAuthenticated');

    app.post('/auth/login', auth.Login);

    app.post('/auth/register', auth.Register);
    
    app.get('/auth/profile', isAuthenticated, auth.Profile);
}