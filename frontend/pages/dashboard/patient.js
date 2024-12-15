import { useEffect, useState } from 'react';
import api from '../utils/api';

export default function PatientDashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await api.get(`${process.env.NEXT_PUBLIC_API_URL}$1`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setAppointments(res.data);
      } catch (err) {
        console.error(err);
        alert('Failed to load appointments');
      }
    };
    fetchAppointments();
  }, []);

  return (
    <div>
      <h1>Patient Dashboard</h1>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index}>
            {appointment.date} - {appointment.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
