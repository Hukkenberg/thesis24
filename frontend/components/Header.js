
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Header() {
  const [role, setRole] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRole(localStorage.getItem("role"));
    }
  }, []);

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.clear();
      router.push("/auth/login");
    }
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          {role === "doctor" && (
            <>
              <li>
                <a href="/dashboard/doctor">Doctor Dashboard</a>
              </li>
              <li>
                <a href="/patients">Patients</a>
              </li>
            </>
          )}
          {role === "patient" && (
            <li>
              <a href="/dashboard/patient">Patient Dashboard</a>
            </li>
          )}
          {role === "admin" && (
            <>
              <li>
                <a href="/dashboard/admin">Admin Dashboard</a>
              </li>
              <li>
                <a href="/admin/users">Manage Users</a>
              </li>
            </>
          )}
          {role === "lab" && (
            <li>
              <a href="/reports">Reports</a>
            </li>
          )}
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
