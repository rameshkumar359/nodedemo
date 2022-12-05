const express = require("express");
const { ObjectId } = require("mongodb");
const route = express.Router();
const path = require("path");
const authrouter = require("./auth");
const book = require("./book");

///myevent.on("test-event", (data) => {
///  console.log(data);
///});
///
///app.get("/about", (req, res) => {
///  res.send("this is my about page");
///  myevent.emit("test-event", { name: "ramesh kumar" });
///});

route.get("/login", (req, res) => {
  res.send("this is my login page");
});

route.use("/book", book);
route.use("/auth", authrouter);

route.all("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/../page/nopage.html"));
});

module.exports = route;
