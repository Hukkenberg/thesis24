import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <ul className="menu">
        <li><Link href="/dashboard/patient">Quản lý thông tin</Link></li>
        <li><Link href="/dashboard/doctor">Quản lý tiến trình</Link></li>
        <li><Link href="/tools">Công cụ</Link></li>
      </ul>
    </aside>
  );
}