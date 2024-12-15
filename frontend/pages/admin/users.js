import { useEffect, useState } from 'react';
import api from '../utils/api';

export default function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '', role: '' });
  const [resetEmail, setResetEmail] = useState('');

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

  const handleAddUser = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await api.post(`${process.env.NEXT_PUBLIC_API_URL}$1`, newUser, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('User added successfully!');
      setNewUser({ name: '', email: '', role: '' });
      // Reload users
      const res = await api.get(`${process.env.NEXT_PUBLIC_API_URL}$1`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(res.data);
    } catch (err) {
      console.error(err);
      alert('Failed to add user');
    }
  };

  const handleDeleteUser = async (userId) => {
    const token = localStorage.getItem('token');
    try {
      await api.delete(`/admin/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('User deleted successfully!');
      // Reload users
      const res = await api.get(`${process.env.NEXT_PUBLIC_API_URL}$1`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(res.data);
    } catch (err) {
      console.error(err);
      alert('Failed to delete user');
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await api.post(`${process.env.NEXT_PUBLIC_API_URL}$1`, { email: resetEmail }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Password reset link sent!');
      setResetEmail('');
    } catch (err) {
      console.error(err);
      alert('Failed to reset password');
    }
  };

  return (
    <div>
      <h1>Manage Users</h1>
      <form onSubmit={handleAddUser}>
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          required
        />
        <select
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          required
        >
          <option value="">Select Role</option>
          <option value="doctor">Doctor</option>
          <option value="patient">Patient</option>
          <option value="admin">Admin</option>
          <option value="lab">Lab Staff</option>
        </select>
        <button type="submit">Add User</button>
      </form>

      <h2>Reset Password</h2>
      <form onSubmit={handleResetPassword}>
        <input
          type="email"
          placeholder="User Email"
          value={resetEmail}
          onChange={(e) => setResetEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.role}
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
