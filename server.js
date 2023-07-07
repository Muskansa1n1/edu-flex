// Import required modules
const express = require('express');
const mysql = require('mysql');

// Create an Express app
const app = express();

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database',
});

// Connect to the MySQL database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database!');
});

// Define a route for handling form submissions
app.post('/register', (req, res) => {
  // Retrieve form data from the request body
  const { name, email, password } = req.body;

  // Insert the form data into the MySQL database
  const query = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
  connection.query(query, [name, email, password], (err, result) => {
    if (err) {
      console.error('Error inserting data into MySQL:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.status(200).json({ message: 'Registration successful' });
  });
});

// Start the server
const port = 3000; // Specify the desired port number
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
