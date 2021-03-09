const colors = require('colors');

module.exports = (req, res, next) => {
    console.log(colors.green(`[${req.method}] ${req.originalUrl}`));
    
    next();
}