const express = require("express");
const bookroutes = express.Router();
const bookcontroller = require("../controllers/bookcontroller");
const test = require("../middleware/test");

bookroutes
  .use(test)
  .route("/")
  .get(bookcontroller.index)
  .post(bookcontroller.store);

bookroutes
  .route("/:id")
  .get(bookcontroller.show)
  .patch(bookcontroller.update)
  .delete(bookcontroller.destroy);

module.exports = bookroutes;
