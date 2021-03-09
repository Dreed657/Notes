module.exports = (app) => {
    const auth = require('../controllers/auth.controller');

    app.post('/auth/login', auth.Login);

    app.post('/auth/register', auth.Register);
    
    app.get('/auth/profile', auth.Profile);
}