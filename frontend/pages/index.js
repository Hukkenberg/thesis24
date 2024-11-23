import { useRouter } from "next/router";
import { isAuthenticated, logout } from "../utils/auth";

export default function Home() {
  const router = useRouter();

  const handleLoginRedirect = () => {
    router.push("/login");
  };

  const handleDashboardRedirect = () => {
    const role = localStorage.getItem("role");
    if (role === "patient") router.push("/dashboard/patient");
    else if (role === "doctor") router.push("/dashboard/doctor");
    else if (role === "lab") router.push("/dashboard/lab");
    else if (role === "admin") router.push("/dashboard/admin");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Hệ thống quản lý thông tin y tế</h1>
      <p style={styles.description}>
        Chào mừng bạn đến với hệ thống quản lý thông tin y tế dành cho bệnh nhân, bác sĩ, nhân viên xét nghiệm và nhân viên hành chính.
      </p>
      {isAuthenticated() ? (
        <div>
          <button style={styles.button} onClick={handleDashboardRedirect}>
            Vào Dashboard
          </button>
          <button style={styles.button} onClick={logout}>
            Đăng xuất
          </button>
        </div>
      ) : (
        <button style={styles.button} onClick={handleLoginRedirect}>
          Đăng nhập
        </button>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
    backgroundColor: "#f7f9fc",
    padding: "0 20px",
  },
  title: {
    fontSize: "2rem",
    color: "#333",
  },
  description: {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "20px",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "10px 20px",
    margin: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
};
