import { useState } from 'react';

interface Profile {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export default function PatientProfile(): JSX.Element {
  const [profile, setProfile] = useState<Profile>({
    name: 'Nguyễn Văn A',
    email: 'nguyenvana@example.com',
    phone: '0901234567',
    address: '123 Đường ABC, TP.HCM',
  });

  const handleUpdateProfile = (): void => {
    alert('Cập nhật thông tin cá nhân thành công');
  };

  return (
    <div>
      <h1>Hồ sơ cá nhân</h1>
      <p>Tên: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Điện thoại: {profile.phone}</p>
      <p>Địa chỉ: {profile.address}</p>
      <button onClick={handleUpdateProfile}>Cập nhật thông tin</button>
    </div>
  );
}

