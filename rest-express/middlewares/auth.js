const jwt = require('jsonwebtoken');
const colors = require('colors');
const { COOKIE_NAME, SECRET } = require('../config');

module.exports = function() {
    return (req, res, next) => {
        let token = req.headers.authorization?.replace('Bearer ', '');
        
        console.log( token ? colors.zebra( token ) : null );

        if (token) {
            let verifiedUser = jwt.verify(token, SECRET);
            console.log('User: ', verifiedUser);

            res.user = verifiedUser;
        }

        next();
    }
}
