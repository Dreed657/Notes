const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SECRET } = require("../config");

exports.Verify = async (req, res) => {
  const token = req.headers.authorization?.replace("Bearer ", "");

  if (token) {
    jwt.verify(token, SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          status: false,
          message: err.message,
          expiredAt: err.expiredAt,
        });
      }

      return res.send({
        status: true,
        user: decoded
      })
    });
  } else {
    return res.status(401).send({ error: 'UNAUTHORIZED!' });
  }
};

exports.Login = async (req, res) => {
  const { username, password } = req.body;

  let user = await User.findOne({ Username: username });
  if (!user) {
    return res.status(500).send({
      message: "Invalid username.",
    });
  }

  let isMatch = await bcrypt.compare(password, user.Password);
  if (!isMatch) {
    return res.status(500).send({
      message: "Invalid password.",
    });
  }

  let token = jwt.sign(
    {
      _id: user._id,
      username: user.Username,
    }, SECRET,
    {
      expiresIn: 30
    }
  );

  return res.status(200)
    .send({
      token,
      user: {
        Email: user.Email,
        Username: user.Username,
      },
    });
};

exports.Register = async (req, res) => {
  const { email, username, password } = req.body;

  const user = new User();

  user.Email = email;
  user.Username = username;
  user.Password = user.generatePasswordHash(password);

  user
    .save()
    .then((data) => {
      return res.send(data);
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Some error occurred while trying to register.",
        err,
      });
    });
};

exports.Profile = (req, res) => {
  User.findById(req.user?._id)
    .then((user) => {
      if (!user) {
        return req.status(404).send({
          message: `User not found!`,
        });
      }
      return res.send({ User: {
        Id: user._id,
        Username: user.Username
      }});
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Error retrieving user!",
        err,
      });
    });
};
