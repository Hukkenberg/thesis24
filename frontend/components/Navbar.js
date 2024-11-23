import { logout } from "../utils/auth";

export default function Navbar() {
  const role = localStorage.getItem("role");

  const handleDashboardRedirect = () => {
    if (role === "patient") window.location.href = "/dashboard/patient";
    else if (role === "doctor") window.location.href = "/dashboard/doctor";
    else if (role === "lab") window.location.href = "/dashboard/lab";
    else if (role === "admin") window.location.href = "/dashboard/admin";
  };

  return (
    <nav style={styles.nav}>
      <h1 style={styles.title}>Quản lý thông tin y tế</h1>
      <div style={styles.actions}>
        <button style={styles.button} onClick={handleDashboardRedirect}>
          Dashboard
        </button>
        <button style={styles.button} onClick={logout}>
          Đăng xuất
        </button>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
  },
  title: {
    fontSize: "1.5rem",
  },
  actions: {
    display: "flex",
    gap: "10px",
  },
  button: {
    backgroundColor: "white",
    color: "#4CAF50",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
