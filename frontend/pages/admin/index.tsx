import Link from 'next/link';

export default function AdminDashboard(): JSX.Element {
  return (
    <div className="dashboard">
      <h1>Quản lý hệ thống</h1>
      <nav>
        <ul>
          <li><Link href="/admin/users">Quản lý người dùng</Link></li>
          <li><Link href="/admin/reports">Xem báo cáo</Link></li>
        </ul>
      </nav>
    </div>
  );
}
