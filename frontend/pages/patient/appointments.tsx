import { useEffect, useState } from 'react';

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch('/api/patient/appointments')
      .then((res) => res.json())
      .then((data) => setAppointments(data.data));
  }, []);

  return (
    <div>
      <h1>Appointments</h1>
      <ul>
        {appointments.map((appt) => (
          <li key={appt.id}>{appt.date} with {appt.doctor} - {appt.status}</li>
        ))}
      </ul>
    </div>
  );
}
