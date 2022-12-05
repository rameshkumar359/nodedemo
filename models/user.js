const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userschema = new Schema({
  name: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
  },
  password: {
    type: "string",
    required: true,
  },
});

module.exports = mongoose.model("user", userschema);
