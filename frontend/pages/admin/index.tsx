// frontend/pages/admin/index.tsx
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { fetchData, postData } from '../../utils/api';
import styles from '../../styles/Dashboard.module.css';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await fetchData('/api/admin/users');
        setUsers(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const updateRole = async (id: string, role: string) => {
    try {
      await postData('/api/admin/update-role', { userId: id, role });
      alert('Role updated successfully!');
    } catch (err) {
      alert('Failed to update role.');
    }
  };

  if (loading) return <p>Loading users...</p>;

  return (
    <div>
      <Navbar />
      <div className={styles.dashboard}>
        <h1>Admin Dashboard</h1>
        <ul>
          {users.map((user: any) => (
            <li key={user.id}>
              <p>{user.name} ({user.role})</p>
              <button onClick={() => updateRole(user.id, 'doctor')}>Make Doctor</button>
              <button onClick={() => updateRole(user.id, 'admin')}>Make Admin</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
