import { useEffect, useState } from "react";
import api from "../../utils/api";
import UserManager from "../../components/UserManager";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const { data } = await api.get("/admin/users");
    setUsers(data);
  };

  return (
    <div>
      <h1>Dashboard Nhân Viên Hành Chính</h1>
      <UserManager users={users} onRefresh={fetchUsers} />
    </div>
  );
}
