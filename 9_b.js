const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();
const port = 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.post(
  '/users',
  [
    body('name').isString().withMessage('Name must be a string'),
    body('email').isEmail().withMessage('Email must be valid'),
    body('age').isInt({ min: 1 }).withMessage('Age must be a positive integer')
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, age } = req.body;
    res.status(201).json({ message: 'User created successfully', user: { name, email, age } });
  }
);


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

/*
curl -X POST -H "Content-Type: application/json" -d '{"name":"Alice Smith","email":"alice.smith@example.com","age":30}' http://localhost:3000/users
*/