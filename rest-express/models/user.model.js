const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config");

const userSchema = new mongoose.Schema({
  id: mongoose.Types.ObjectId,
  Username: {
    type: String,
    required: true,
    unique: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
  },
});

userSchema.methods.generatePasswordHash = (password) => {
  var salt = bcrypt.genSaltSync(SALT_ROUNDS);
  var hash = bcrypt.hashSync(password, salt);
  return hash;
};

userSchema.methods.validatePassword = (password, hashedPassword) => {
  let res = bcrypt.compareSync(password, hashedPassword);
  return res;
};

// userSchema.pre("save", (next) => {
//   bcrypt
//     .genSalt(SALT_ROUNDS)
//     .then((salt) => {
//       return bcrypt.hashSync(this.Password, salt);
//     })
//     .then((hash) => {
//       this.Password = hash;
//       next();
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// });

module.exports = mongoose.model("User", userSchema);
