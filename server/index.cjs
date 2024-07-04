// Import the http module
const http = require('http');
const url = require('url');

// Define the hostname and port
const hostname = '127.0.0.1';
const port = 3000;

const users = [{ username: "akshat", password: "password123" }];
const notes = [];


const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const method = req.method.toUpperCase();
  
  res.setHeader('Content-Type', 'application/json');
  
  // Define routes
  if (parsedUrl.pathname === '/login' && method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const data = JSON.parse(body);
      
      const { username, password } = data;
      const user = users.find(u => u.username === username && u.password === password);
      if (user) {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: 'Login successful', user: username }));
      } else {
        res.statusCode = 401;
        res.end(JSON.stringify({ message: 'Invalid credentials' }));
      }
    });
  } else if (parsedUrl.pathname === '/signup' && method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const data = JSON.parse(body);
      const { username, password } = data;
      if (users.find(u => u.username === username)) {
        res.statusCode = 409; 
        res.end(JSON.stringify({ message: 'User already exists' }));
      } else {
        users.push({ username, password });
        res.statusCode = 201; 
        res.end(JSON.stringify({ message: 'Signup successful', user: username }));
      }
    });
  } else if (parsedUrl.pathname === '/home' && method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'Welcome to the Home route' }));
  } else if (parsedUrl.pathname === '/notes' && method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'Get notes route', notes }));
  } else if (parsedUrl.pathname === '/notes' && method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const data = JSON.parse(body);
      notes.push(data);
      res.statusCode = 201;
      res.end(JSON.stringify({ message: 'Note created', note: data }));
    });
  } else if (parsedUrl.pathname === '/users' && method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'Get users route', users }));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
});

// Make the server listen on the specified hostname and port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
