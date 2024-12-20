import { useEffect, useState } from 'react';
import api from 'utils/api';

export default function Patients() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await api.get(`${process.env.NEXT_PUBLIC_API_URL}$1`, {
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
      <h1>Patient List</h1>
      <ul>
        {patients.map((patient, index) => (
          <li key={index}>{patient.name}</li>
        ))}
      </ul>
    </div>
  );
}
