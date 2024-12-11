import Link from 'next/link';

export default function LabDashboard(): JSX.Element {
  return (
    <div className="dashboard">
      <h1>Quản lý phòng xét nghiệm</h1>
      <nav>
        <ul>
          <li><Link href="/lab/tests">Danh sách xét nghiệm</Link></li>
          <li><Link href="/lab/results">Quản lý kết quả</Link></li>
        </ul>
      </nav>
    </div>
  );
}
