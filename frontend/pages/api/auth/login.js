import jwt from "jsonwebtoken";

const SECRET_KEY = "your_secret_key"; // Replace with your secure key

export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // Mock user data
    const users = [
      { email: "admin@example.com", password: "admin123", role: "admin" },
      { email: "doctor@example.com", password: "doctor123", role: "doctor" },
      { email: "patient@example.com", password: "patient123", role: "patient" }
    ];

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      const token = jwt.sign({ email: user.email, role: user.role }, SECRET_KEY, {
        expiresIn: "1h"
      });
      res.status(200).json({ token, role: user.role });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}