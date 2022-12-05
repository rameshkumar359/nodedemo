const mongoose = require("mongoose");

async function connecdb() {
  await mongoose.connect("mongodb://localhost:27017/nodejs");
}

module.exports = connecdb;
