const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// File to store enrollments
const DB_FILE = path.join(__dirname, "enrollments.json");

// If file not present → create it
if (!fs.existsSync(DB_FILE)) {
  fs.writeFileSync(DB_FILE, JSON.stringify([]));
}

// API to receive enroll form
app.post("/api/enroll", (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const entry = {
    name,
    email,
    phone,
    date: new Date().toISOString(),
  };

  const existing = JSON.parse(fs.readFileSync(DB_FILE));
  existing.push(entry);
  fs.writeFileSync(DB_FILE, JSON.stringify(existing, null, 2));

  return res.json({ message: "Enrollment submitted!", entry });
});

// Test route
app.get("/", (req, res) => {
  res.send("Backend running successfully!");
});

app.listen(5000, () => console.log("Backend running at http://localhost:5000"));
