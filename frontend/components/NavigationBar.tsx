import Link from 'next/link';

interface Props {
  role: 'patient' | 'doctor' | 'lab' | 'admin';
}

const roleLinks = {
  patient: [
    { href: '/patient/appointments', label: 'Lịch hẹn' },
    { href: '/patient/results', label: 'Kết quả xét nghiệm' },
    { href: '/patient/profile', label: 'Hồ sơ' },
  ],
  doctor: [
    { href: '/doctor/patients', label: 'Danh sách bệnh nhân' },
    { href: '/doctor/appointments', label: 'Lịch hẹn' },
  ],
  lab: [
    { href: '/lab/tests', label: 'Danh sách xét nghiệm' },
    { href: '/lab/results', label: 'Quản lý kết quả' },
  ],
  admin: [
    { href: '/admin/users', label: 'Quản lý người dùng' },
  ],
};

export default function NavigationBar({ role }: Props): JSX.Element {
  const links = roleLinks[role] || [];
  return (
    <nav>
      <ul>
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
        <li><Link href="/logout">Đăng xuất</Link></li>
      </ul>
    </nav>
  );
}
