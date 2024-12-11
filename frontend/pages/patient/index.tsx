import Link from 'next/link';

export default function PatientDashboard(): JSX.Element {
  return (
    <div className="dashboard">
      <h1>Trang chủ bệnh nhân</h1>
      <nav>
        <ul>
          <li><Link href="/patient/appointments">Lịch hẹn</Link></li>
          <li><Link href="/patient/results">Kết quả xét nghiệm</Link></li>
          <li><Link href="/patient/profile">Hồ sơ cá nhân</Link></li>
        </ul>
      </nav>
    </div>
  );
}
