const jwt = require("jsonwebtoken");
const colors = require("colors");
const { SECRET } = require("../config");

module.exports = function () {
  return (req, res, next) => {
    let token = req.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      token = req.cookies['auth-cookie'];
    }

    // console.log('Token: ', token ? colors.zebra( token ) : null );

    if (token) {
      jwt.verify(token, SECRET, (err, decoded) => {
        if (err) {
          return res.status(401).send({
            message: err.message,
            expiredAt: err.expiredAt,
          });
        }
        // console.log("User: ", decoded);

        req.user = decoded;
        next();
      });
    } else {
        next();
    }
  };
};
