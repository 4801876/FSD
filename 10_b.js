const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

let movies = [];

// Create - Add a new movie with validation
app.post(
  '/movies',
  [
    body('title').isString().withMessage('Title must be a string'),
    body('director').isString().withMessage('Director must be a string'),
    body('year').isInt({ min: 1888 }).withMessage('Year must be an integer and at least 1888')
  ],
  (req, res) => {
    // Validate input data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // If validation passed, process the request
    const movie = req.body;
    movies.push(movie);
    res.status(201).json({ message: 'Movie created successfully', movie });
  }
);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

/*
curl -X POST -H "Content-Type: application/json" -d '{"title":"Inception","director":"Christopher Nolan","year":2010}' http://localhost:3000/movies
*/