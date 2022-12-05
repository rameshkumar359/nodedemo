const express = require("express");
const EventEmitter = require("events");
const myevent = new EventEmitter();
const app = express();
const route = require("./routes/route");
const bodyParser = require("body-parser");
const connectdb = require("./database/db");
app.use(bodyParser.json());

const port = 3000;
app.use(route);
app.set("view engine", "pug");

connectdb();
app.listen(port, () => {
  console.log(`listening to http://localhost:${port}`);
});
