import Link from 'next/link';

export default function DoctorDashboard(): JSX.Element {
  return (
    <div className="dashboard">
      <h1>Quản lý bác sĩ</h1>
      <nav>
        <ul>
          <li><Link href="/doctor/patients">Quản lý bệnh nhân</Link></li>
          <li><Link href="/doctor/appointments">Quản lý lịch hẹn</Link></li>
          <li><Link href="/doctor/diagnosis">Xử lý chẩn đoán</Link></li>
        </ul>
      </nav>
    </div>
  );
}
