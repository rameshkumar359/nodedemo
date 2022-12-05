const { time } = require("console");
const http = require("http");
const Circle = require("./circle");
const fs = require("fs");
const port = 9000;

const server = http.createServer();
server.on("request", (req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { ContentType: "text/html" });
    fs.readFile("temp/test.html", "utf-8", (err, data) => {
      if (err) {
        console.log("error");
      }
      res.write(data);
      res.end();
    });
  }
  if (req.url === "/about") {
    res.writeHead(200, { ContentType: "text/html" });
    fs.readFile("page/about.html", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      }
      res.write(data);
      res.end();
    });
  }
  if (req.url === "/create-file") {
    res.writeHead(200, { contenttype: "text/html" });
    fs.writeFile(
      "temp/test.html",
      "<h1>hello world this my new project<h1/>",
      (err) => {
        if (err) console.log(err);
      }
    );
    res.write("WOW file is created");
    res.end();
  } else {
    res.writeHead(404, { contenttype: "application/json" });
    fs.readFile("page/nopage.html", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(port, () => {
  console.log(`running on port http://localhost:${port}`);
});
