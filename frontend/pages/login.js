import { useState } from "react";
import axios from "../utils/api";

export default function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/login", formData);

      if (typeof window !== "undefined") {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.role);

        const role = res.data.role;
        if (role === "admin") window.location.href = "/dashboard/admin";
        else if (role === "doctor") window.location.href = "/dashboard/doctor";
        else if (role === "lab") window.location.href = "/dashboard/lab";
        else if (role === "patient") window.location.href = "/dashboard/patient";
      }
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Sign in</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="USERNAME"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            style={styles.input}
          />
          <div style={styles.passwordContainer}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="PASSWORD"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              style={styles.input}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={styles.showPasswordButton}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <button type="submit" style={styles.submitButton}>
            Sign in
          </button>
          {error && <p style={styles.error}>{error}</p>}
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#d1e7ff", // Pastel blue
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "400px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    padding: "30px",
    textAlign: "center",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    width: "100%",
  },
  passwordContainer: {
    position: "relative",
    width: "100%",
  },
  showPasswordButton: {
    position: "absolute",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    background: "none",
    border: "none",
    color: "#0070f3",
    cursor: "pointer",
    fontSize: "14px",
  },
  submitButton: {
    padding: "10px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#0070f3",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
};
