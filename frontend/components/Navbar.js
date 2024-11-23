import { useEffect, useState } from "react";
import { logout } from "../utils/auth";

export default function Navbar() {
  const [role, setRole] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRole(localStorage.getItem("role"));
    }
  }, []);

  const handleDashboardRedirect = () => {
    if (role === "patient") {
      window.location.href = "/dashboard/patient";
    } else if (role === "doctor") {
      window.location.href = "/dashboard/doctor";
    } else if (role === "lab") {
      window.location.href = "/dashboard/lab";
    } else if (role === "admin") {
      window.location.href = "/dashboard/admin";
    }
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <h1>Hệ thống Y Tế</h1>
      </div>
      <div style={styles.links}>
        <button style={styles.button} onClick={handleDashboardRedirect}>
          Dashboard
        </button>
        <button style={styles.logoutButton} onClick={logout}>
          Đăng xuất
        </button>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "white",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  button: {
    backgroundColor: "white",
    color: "#007BFF",
    padding: "8px 15px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  },
  logoutButton: {
    backgroundColor: "#DC3545",
    color: "white",
    padding: "8px 15px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  },
};
