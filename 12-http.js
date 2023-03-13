// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write("Welcome to the homepage");
//     res.end();
//   } else if (req.url === "/about") {
//     res.write("Here is our short history");
//     res.end();
//   } else {
//     res.end(`
//   <h1>Oops!</h1>
//   <p>We can't seem to find the page you're looking for</p>
//   <a href='/'>Go back to home page</a>
//   `);
//   }
// });

// server.listen(8888);
const http = require("http");

let data = {}; // initialize empty object to store POST data

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    if (req.method === "GET") {
      res.write("Welcome to the homepage");
      res.end();
    } else if (req.method === "POST") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        data = JSON.parse(body); // parse POST data and store in object
        res.end("Data received and stored successfully");
      });
    }
  } else if (req.url === "/about") {
    if (req.method === "GET") {
      res.write("Here is our short history");
      res.end();
    } else if (req.method === "POST") {
      // Handle POST request
    }
  } else {
    res.end(`
      <h1>Oops!</h1>
      <p>We can't seem to find the page you're looking for</p>
      <a href='/'>Go back to home page</a>
    `);
  }
});

server.listen(8888);
