const express = require('express');
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator'); // For input validation

const app = express();
const port = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post(
  '/submit',
  [
    body('username')
      .isString()
      .withMessage('Username must be a string')
      .isLength({ min: 3 })
      .withMessage('Username must be at least 3 characters long'),
    body('email').isEmail().withMessage('Invalid email format'),
    body('age')
      .isInt({ min: 18 })
      .withMessage('Age must be a number and at least 18'),
  ],
  (req, res) => {
   
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, age } = req.body;
    res.json({
      message: 'Data successfully submitted',
      data: { username, email, age },
    });
  }
);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
