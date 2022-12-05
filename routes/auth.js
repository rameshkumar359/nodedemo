const express = require("express");
const authroutes = express.Router();
const authcontroller = require("../controllers/authcontroller");

authroutes.post("/signup", authcontroller.signup);
authroutes.post("/login", authcontroller.login);

module.exports = authroutes;
