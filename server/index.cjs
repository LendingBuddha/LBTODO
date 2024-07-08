const http = require('http');
const url = require('url');
const cors = require('cors');
const express = require('express');

// Create an express app
const app = express();

app.use(cors());
app.use(express.json());

const hostname = '127.0.0.1';
const port = 3000;

const users = [{ username: "akshat", password: "password123" }];
const notes = [];

// Define routes
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  if (users.find(u => u.username === username)) {
    res.status(409).json({ message: 'User already exists' });
  } else {
    users.push({ username, password });
    res.status(201).json({ message: 'Signup successful', user: username });
  }
});

app.get('/home', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Home route' });
});

app.get('/notes', (req, res) => {
  res.status(200).json({ message: 'Get notes route', notes });
});

app.post('/notes', (req, res) => {
  notes.push(req.body);
  res.status(201).json({ message: 'Note created', note: req.body });
});

app.get('/users', (req, res) => {
  res.status(200).json({ message: 'Get users route', users });
});

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const server = http.createServer(app);

// Make the server listen on the specified hostname and port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
