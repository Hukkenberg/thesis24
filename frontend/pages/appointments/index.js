import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}$1`, {
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
      <h1>Appointments</h1>
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
