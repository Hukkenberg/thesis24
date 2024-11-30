import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <h1>Hospital Management System</h1>
      <nav>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/doctor">Doctor Dashboard</Link>
          </li>
          <li>
            <Link href="/lab">Lab Dashboard</Link>
          </li>
          <li>
            <Link href="/patient">Patient Dashboard</Link>
          </li>
          <li>
            <Link href="/admin">Admin Dashboard</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
