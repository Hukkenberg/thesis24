import React from 'react';
import Link from 'next/link';

const LabDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Lab Technician Dashboard</h1>
      <ul>
        <li>
          <Link href="/lab/patient-list">Manage Patient Tests</Link>
        </li>
        <li>
          <Link href="/lab/upload-results">Upload Test Results</Link>
        </li>
      </ul>
    </div>
  );
};

export default LabDashboard;