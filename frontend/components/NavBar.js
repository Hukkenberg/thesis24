
import React from "react";
import Link from "next/link";
import styles from "../styles/NavBar.module.css";

const NavBar = ({ role }) => {
  const navItems = {
    patient: [
      { name: "Dashboard", path: "/" },
      { name: "My Appointments", path: "/appointments" },
      { name: "Lab Results", path: "/lab-tests" },
      { name: "Profile", path: "/profile" },
    ],
    doctor: [
      { name: "Dashboard", path: "/" },
      { name: "Patient List", path: "/patients" },
      { name: "Appointments", path: "/appointments" },
      { name: "Lab Requests", path: "/lab-requests" },
    ],
    lab_staff: [
      { name: "Dashboard", path: "/" },
      { name: "Lab Tests", path: "/lab-tests" },
      { name: "Pending Requests", path: "/pending-requests" },
    ],
    admin_staff: [
      { name: "Dashboard", path: "/" },
      { name: "Manage Patients", path: "/patients" },
      { name: "Manage Doctors", path: "/doctors" },
      { name: "Appointments", path: "/appointments" },
    ],
  };

  return (
    <nav className={styles.navbar}>
      <ul>
        {navItems[role]?.map((item) => (
          <li key={item.name}>
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
