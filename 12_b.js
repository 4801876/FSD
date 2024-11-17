const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

let users = [];

// Create - Add a new user
app.post('/users', (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).send(user);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

/*
curl -X POST -H "Content-Type: application/json" -d '{"id":1,"name":"John Doe","email":"john.doe@example.com"}' http://localhost:3000/users
*/