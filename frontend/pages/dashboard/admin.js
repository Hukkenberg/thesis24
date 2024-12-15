import { useEffect, useState } from 'react';
import api from '../utils/api';

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await api.get(`${process.env.NEXT_PUBLIC_API_URL}$1`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(res.data);
      } catch (err) {
        console.error(err);
        alert('Failed to load users');
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
}
