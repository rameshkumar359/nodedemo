const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { ObjectId } = require("mongodb");
const test = async (req, res, next) => {
  if (req.headers && req.headers.token) {
    const token = req.headers.token;
    try {
      const decode = await jwt.verify(token, "fake-jwt-secret");
      const user = await User.findOne({ _id: ObjectId(decode.user._id) });
      if (!user) {
        res.status(401).json({ data: "unauthorised" });
        return;
      }
      next();
    } catch (err) {
      res.status(401).json({ data: "unauthorised" });
    }
  }
};
module.exports = test;
