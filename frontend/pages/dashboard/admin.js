import { useState, useEffect } from 'react';
import Table from '../../components/Table';

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch('/api/admin/users');
        const data = await res.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }
    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    if (confirm('Bạn có chắc muốn xóa tài khoản này?')) {
      try {
        const res = await fetch(`/api/admin/users/${userId}`, {
          method: 'DELETE',
        });
        if (res.ok) {
          alert('Xóa tài khoản thành công!');
          setUsers((prev) => prev.filter((user) => user.id !== userId));
        } else {
          alert('Có lỗi xảy ra!');
        }
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  return (
    <div className="dashboard">
      <h1>Dashboard Nhân viên Hành chính</h1>
      <section>
        <h2>Danh sách người dùng</h2>
        <Table
          data={users}
          renderActions={(user) => (
            <button onClick={() => handleDelete(user.id)}>Xóa</button>
          )}
        />
      </section>
    </div>
  );
}