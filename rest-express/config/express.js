const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const logger = require("../middlewares/logger");
const auth = require("../middlewares/auth");

module.exports = (app) => {
  app.use(express.urlencoded({ extended: true }));

  app.use(express.json());

  app.use(cors());
  app.use(cookieParser());

  app.use(logger);
  // app.use(auth());
};
