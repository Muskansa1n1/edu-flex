const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 8081;

//database configuration
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "users",
});

// Connect to the MySQL database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// Middleware
app.use(bodyParser.json());
app.use(cors());

app.post("/register", (req, res) => {
  const { name, email, password, contact } = req.body;
  const checkQuery = "SELECT * FROM user_data WHERE email = ?";
  const insertQuery =
    "INSERT INTO user_data (name, email, password, contact) VALUES (?, ?, ?, ?)";

  // Check if the user already exists in the database
  db.query(checkQuery, [email], (err, result) => {
    if (err) {
      console.error("Error checking user existence:", err);
      res.status(500).json({ message: "An error occurred" });
      return;
    }

    if (result.length > 0) {
      res.status(409).json({ message: "User already exists" });
    } else {
      // eslint-disable-next-line no-unused-vars
      db.query(insertQuery, [name, email, password, contact], (err, result) => {
        if (err) {
          console.error("Error inserting data into the database:", err);
          res.status(500).json({ message: "An error occurred" });
          return;
        }

        res.status(200).json({ message: "Registration successful" });
      });
    }
  });
});

app.post("/enroll", (req, res) => {
  const { name, email, course, phone, address, education } = req.body;
  const enrollQuery =
    "INSERT INTO enroll_user (user_id, name, email, course, phone, address, education) VALUES (?, ?, ?, ?, ?, ?, ?)";

  const getUserQuery = "SELECT id FROM user_data WHERE email = ?";
  db.query(getUserQuery, [email], (err, result) => {
    if (err) {
      console.error("Error retrieving user ID:", err);
      res.status(500).json({ message: "An error occurred" });
      return;
    }

    if (result.length === 0) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    const userId = result[0].id;

    db.query(
      enrollQuery,
      [userId, name, email, course, phone, address, education],
      // eslint-disable-next-line no-unused-vars
      (err, result) => {
        if (err) {
          console.error(
            "Error inserting enrollment data into the database:",
            err
          );
          res.status(500).json({ message: "An error occurred" });
          return;
        }

        res.status(200).json({ message: "Enrollment successful" });
      }
    );
  });
});

// Endpoint to handle login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const loginQuery = "SELECT * FROM user_data WHERE email = ? AND password = ?";

  db.query(loginQuery, [email, password], (err, result) => {
    if (err) {
      console.error("Error during login:", err);
      res.status(500).json({ message: "An error occurred" });
      return;
    }

    if (result.length === 0) {
      res.status(401).json({ message: "Invalid email or password" });
    } else {
      res.status(200).json({ message: "Login successful" });
    }
  });
});

// Endpoint to profile edit
app.put("/profile", (req, res) => {
  const { name, email, password, contact } = req.body;
  console.log(req.body);

  const query =
    "UPDATE user_data SET name = ?, password = ?, contact= ? WHERE email = ?";
  const values = [name, password, contact, email];

  db.query(query, values, (err) => {
    if (err) {
      console.error("Error updating user profile:", err);
      res.status(500).json({ message: "An error occurred" });
      return;
    }

    res.status(200).json({ message: "Profile updated successfully" });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
