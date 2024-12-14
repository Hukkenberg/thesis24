import React from 'react';
import Link from 'next/link';

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Admin Dashboard</h1>
      <ul>
        <li>
          <Link href="/admin/manage-accounts">Quản lý tài khoản</Link>
        </li>
        <li>
          <Link href="/admin/manage-doctors">Quản lý bác sĩ</Link>
        </li>
        <li>
          <Link href="/admin/manage-patients">Quản lý bệnh nhân</Link>
        </li>
        <li>
          <Link href="/admin/manage-prescriptions">Quản lý đơn thuốc</Link>
        </li>
        <li>
          <Link href="/admin/manage-tests">Quản lý xét nghiệm</Link>
        </li>
        <li>
          <Link href="/admin/manage-appointments">Quản lý lịch khám</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminDashboard;