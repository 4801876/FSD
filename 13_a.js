const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

let users = [];

// Create - Add a new user with validation
app.post(
  '/users',
  [
    body('name').isString().withMessage('Name must be a string'),
    body('email').isEmail().withMessage('Email must be valid'),
    body('age').isInt({ min: 1 }).withMessage('Age must be a positive integer')
  ],
  (req, res) => {
    // Validate input data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // If validation passed, process the request
    const { name, email, age } = req.body;
    const user = { id: users.length + 1, name, email, age };
    users.push(user);
    res.status(201).json({ message: 'User created successfully', user });
  }
);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
