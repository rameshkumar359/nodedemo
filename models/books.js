const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookschema = new Schema({
  title: {
    type: "string",
    required: true,
  },
  author: {
    type: "string",
    required: true,
  },
});

module.exports = mongoose.model("Book", bookschema, "book");
