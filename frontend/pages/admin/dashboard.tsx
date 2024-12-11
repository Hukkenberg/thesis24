import { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const [stats, setStats] = useState({ appointments: 0, users: 0, tests: 0 });

  useEffect(() => {
    fetch('/api/admin/dashboard')
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div>Total Appointments: {stats.appointments}</div>
      <div>Total Users: {stats.users}</div>
      <div>Total Tests: {stats.tests}</div>
    </div>
  );
}
