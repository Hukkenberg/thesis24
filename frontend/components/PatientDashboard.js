
import React from "react";
import Link from "next/link";
import styles from "../styles/PatientDashboard.module.css";

const PatientDashboard = () => {
  return (
    <div className={styles.dashboard}>
      <h1>Patient Dashboard</h1>
      <div className={styles.menu}>
        <Link href="/patients/update-info"><button>Update Information</button></Link>
        <Link href="/patients/progress"><button>View Progress</button></Link>
        <Link href="/patients/appointments"><button>Manage Appointments</button></Link>
      </div>
    </div>
  );
};

export default PatientDashboard;
