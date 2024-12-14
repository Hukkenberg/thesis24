import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AdminDashboard() {
  const [patients, setPatients] = useState([]);
  const [report, setReport] = useState(null);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get('/api/admin/patients');
        setPatients(response.data.patients);
      } catch (error) {
        console.error('Error fetching patients', error);
      }
    };
    fetchPatients();
  }, []);

  const handleGenerateReport = async () => {
    try {
      const response = await axios.get('/api/admin/report');
      setReport(response.data.report);
    } catch (error) {
      alert('Error generating report');
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button onClick={handleGenerateReport}>Generate Report</button>
      {report && (
        <div>
          <h2>Report</h2>
          <p>Total Patients: {report.totalPatients}</p>
          <p>Total Appointments: {report.totalAppointments}</p>
        </div>
      )}
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>{patient.name}</li>
        ))}
      </ul>
    </div>
  );
}
