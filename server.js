// web server using HTTP module
// we can type localhost:3000 in our browser as a URL

// import http from "http";

// // make server listen to port 3000
// const port = 3000;

// // creating a callback function based on request
// const requestHandler = (request, response) => {
//   console.log(request.url);
//   response.end("Hello Node.js Server!");
// };

// const server = http.createServer(requestHandler);

// // configure the server to listen to port 3000
// server.listen(port, (err) => {
//   if (err) {
//     return console.log("something bad happened", err);
//   }
//   console.log(`
// server is listening on ${port}`);
// });

// web server using HTTP module (only using the express module will make site dynamic)
// import express from "express";

// // create a express server
// const app = express();
// const port = 3000;

// // configure the default route and send a text as response
// app.get("/", function (request, response) {
//   response.send("Hello Node.js World!");
// });

// // configure the port that express is going to listen to
// app.listen(port, function () {
//   console.log(`
//     🚀 Fire app listening on port ${port}!`);
// });

/*
app.get("/products", function (req, res) {
  res.send("On this call we show a list of products");
});

app.post("/product/:id", function (req, res) {
  res.send("On this call we create a product");
});

app.put("/product/:id", function (req, res) {
  res.send("On this call we update a product");
});

app.delete("/product/:id", function (req, res) {
  res.send("On this call we delete a product");
});
*/

/* Example Usage to get something 
app.get("/", function (request, response){
    response.json({name: "Marta", age: "40" });
});
*/

/* Here is a sample code on using express with api connection */
/*
import express from "express";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(filename);

app.get("/", function (request, response) {
  response.sendFile(path.join(dirname, "index.html"));
});

app.listen(port, function () {
  console.log(`
🚀 Fire app listening on port ${port}!`);
});
*/
