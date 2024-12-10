// frontend/components/Navbar.tsx
import Link from 'next/link';
import { useSelector } from 'react-redux';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const user = useSelector((state: any) => state.auth.user);

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navItems}>
        <li><Link href="/">Trang Chủ</Link></li>
        {user?.role === 'admin' && <li><Link href="/admin">Quản Lý Thông Tin</Link></li>}
        {user?.role === 'doctor' && <li><Link href="/doctor">Quản Lý Tiến Trình</Link></li>}
        <li><Link href="/account">Tài Khoản</Link></li>
      </ul>
      <ul className={styles.navSubItems}>
        <li><Link href="/profile/general">Hành Chính</Link></li>
        <li><Link href="/profile/specialty">Chuyên Môn</Link></li>
        <li><Link href="/profile/lab">Cận Lâm Sàng</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
