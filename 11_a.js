const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodiesapp.use(express.json());

let movies = [];


app.post('/movies', (req, res) => {
  const movie = req.body;
  movies.push(movie);
  res.status(201).send(movie);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

/*
curl -X POST -H "Content-Type: application/json" -d '{"id":1,"title":"Inception","director":"Christopher Nolan","year":2010}' http://localhost:3000/movies
*/