import React from 'react';
import Link from 'next/link';

const DoctorDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Doctor Dashboard</h1>
      <ul>
        <li>
          <Link href="/doctor/patient-list">View Patient List</Link>
        </li>
        <li>
          <Link href="/doctor/appointments">Manage Appointments</Link>
        </li>
        <li>
          <Link href="/doctor/reports">View Reports</Link>
        </li>
      </ul>
    </div>
  );
};

export default DoctorDashboard;