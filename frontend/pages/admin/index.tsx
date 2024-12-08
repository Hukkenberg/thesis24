import { useEffect, useState } from 'react';
import { fetchData } from '../../utils/api';

const AdminDashboard = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchData('/admins/users');
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };

    loadUsers();
  }, []);

  return (
    <div className="container">
      <h1>Admin Dashboard</h1>
      {users.length === 0 ? (
        <p>No users available.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.username} - {user.role}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminDashboard;
