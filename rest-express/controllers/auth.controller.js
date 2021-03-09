const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { COOKIE_NAME, SECRET } = require("../config");

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
    },
    SECRET
  );

  return res.header("auth-token", token).status(200).send({
    token,
    user,
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
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Some error occurred while trying to register.",
        err,
      });
    });
};

exports.Profile = async (req, res) => {
  User.findOne({ Username: req.user.username })
    .then((user) => {
      if (!user) {
        req.status(404).send({
          message: `User not found with ${req.user._id}`,
        });
      }
      res.send(user);
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Error retrieving user with id " + req.user._id,
        err,
      });
    });
};
