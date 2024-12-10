import { useEffect, useState } from 'react';
import { fetchData } from '../utils/api';

const AccountPage = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await fetchData('/api/account');
      setUser(data);
    };
    fetchUser();
  }, []);

  if (!user) return <p>Đang tải thông tin tài khoản...</p>;

  return (
    <div>
      <h1>Thông tin tài khoản</h1>
      <p><strong>Tên:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Vai trò:</strong> {user.role}</p>
    </div>
  );
};

export default AccountPage;
