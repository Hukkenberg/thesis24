import { useState } from 'react';

export default function CreateUser() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
    role: 'patient',
  });

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/admin/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userInfo),
      });
      if (res.ok) {
        alert('Tạo tài khoản thành công!');
        setUserInfo({ name: '', email: '', password: '', role: 'patient' });
      } else {
        alert('Có lỗi xảy ra!');
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className="create-user">
      <h1>Tạo tài khoản mới</h1>
      <form onSubmit={handleSubmit}>
        <label>Tên:</label>
        <input
          type="text"
          name="name"
          value={userInfo.name}
          onChange={handleChange}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
          required
        />
        <label>Mật khẩu:</label>
        <input
          type="password"
          name="password"
          value={userInfo.password}
          onChange={handleChange}
          required
        />
        <label>Vai trò:</label>
        <select name="role" value={userInfo.role} onChange={handleChange}>
          <option value="patient">Bệnh nhân</option>
          <option value="doctor">Bác sĩ</option>
          <option value="lab_staff">Nhân viên xét nghiệm</option>
        </select>
        <button type="submit">Tạo tài khoản</button>
      </form>
    </div>
  );
}