const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  if (req.url === "/admin") {
    res.end("This is admin page");
  } else {
    res.statusCode = 404;
    res.end("Page not found");
  }
});

server.listen(port, () => {
  console.log(`server is running at port: ${port}`);
});
