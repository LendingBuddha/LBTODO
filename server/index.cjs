// Import the http module
const http = require('http');

// Define the hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response header with an HTTP status and Content-Type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // Send a response
  res.end('Hello, World!\n');
});

// Make the server listen on the specified hostname and port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
