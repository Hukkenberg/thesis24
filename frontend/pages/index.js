
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
  const [role, setRole] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    if (!storedRole) {
      router.push('/auth/login');
    } else {
      setRole(storedRole);
    }
  }, [router]);

  const roleSections = {
    admin: [
      { title: 'Quản lý thông tin', link: '/patients' },
      { title: 'Công cụ', link: '/admin/tools' },
    ],
    doctor: [
      { title: 'Quản lý bệnh nhân', link: '/patients' },
      { title: 'Lịch hẹn', link: '/appointments' },
    ],
    lab: [
      { title: 'Quản lý kiểm trình', link: '/lab-results' },
      { title: 'Lịch trình xét nghiệm', link: '/appointments' },
    ],
    patient: [
      { title: 'Thông tin cá nhân', link: '/patients/manage' },
      { title: 'Lịch khám', link: '/appointments' },
    ],
  };

  const sections = roleSections[role] || [];

  return (
    <div>
      <h1>Hệ thống quản lý</h1>
      {sections.map((section, index) => (
        <div key={index}>
          <h3>{section.title}</h3>
          <a href={section.link}>Xem chi tiết</a>
        </div>
      ))}
    </div>
  );
};

export default Home;
