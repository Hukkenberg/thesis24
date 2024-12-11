import { useEffect, useState } from 'react';

export default function PatientDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch('/api/patient/appointments')
      .then((res) => res.json())
      .then((data) => setAppointments(data.data));

    fetch('/api/patient/notifications')
      .then((res) => res.json())
      .then((data) => setNotifications(data));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Upcoming Appointments</h2>
      <ul>
        {appointments.map((appt) => (
          <li key={appt.id}>{appt.date} with {appt.doctor}</li>
        ))}
      </ul>
      <h2>Notifications</h2>
      <ul>
        {notifications.map((note) => (
          <li key={note.id}>{note.message}</li>
        ))}
      </ul>
    </div>
  );
}
