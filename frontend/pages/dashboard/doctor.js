import { useEffect, useState } from 'react';
import axios from 'axios';

export default function DoctorDashboard() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}$1`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPatients(res.data);
      } catch (err) {
        console.error(err);
        alert('Failed to load patients');
      }
    };
    fetchPatients();
  }, []);

  return (
    <div>
      <h1>Doctor Dashboard</h1>
      <ul>
        {patients.map((patient, index) => (
          <li key={index}>{patient.name}</li>
        ))}
      </ul>
    </div>
  );
}
