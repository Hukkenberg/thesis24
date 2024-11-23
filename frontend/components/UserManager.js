export default function UserManager({ users, onRefresh }) {
  const handleDelete = async (id) => {
    await api.delete(`/admin/users/${id}`);
    onRefresh();
  };

  return (
    <div>
      <h2>Quản lý Người Dùng</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.role})
            <button onClick={() => handleDelete(user.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
