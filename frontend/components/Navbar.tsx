import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <ul className={styles.navItems}>
      <li><Link href="/">TRANG CHỦ</Link></li>
      <li><Link href="/admin">Quản lý thông tin</Link></li>
      <li><Link href="/profile">TÀI KHOẢN</Link></li>
    </ul>
    <ul className={styles.navSubItems}>
      <li><Link href="/profile/general">Hành chính</Link></li>
      <li><Link href="/profile/speciality">Chuyên môn</Link></li>
      <li><Link href="/profile/diagnostics">Cận lâm sàng</Link></li>
      <li><Link href="/profile/diagnosis">Chẩn đoán</Link></li>
      <li><Link href="/profile/treatment">Điều trị</Link></li>
      <li><Link href="/profile/progress">Tiến triển</Link></li>
    </ul>
  </nav>
);

export default Navbar;
