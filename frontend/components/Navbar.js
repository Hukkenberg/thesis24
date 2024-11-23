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
    if (role === "patient") window.location.href = "/dashboard/patient";
    else if (role === "doctor") window.location.href = "/dashboard/doctor";
    else if (role === "lab") window.location.href = "/dashboard/lab";
    else if (role === "admin") window.location.href = "/dashboard/admin";
  };

  return (
    <nav>
      <div>
        <h1>Hệ Thống Y Tế</h1>
      </div>
      <div>
        <button onClick={handleDashboardRedirect}>Dashboard</button>
        <button onClick={logout}>Đăng Xuất</button>
      </div>
    </nav>
  );
}
