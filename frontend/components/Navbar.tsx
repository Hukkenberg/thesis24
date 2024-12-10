// frontend/components/Navbar.tsx
import Link from 'next/link';
import { useSelector } from 'react-redux';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const user = useSelector((state: any) => state.auth?.user);

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navItems}>
        <li><Link href="/">Home</Link></li>
        {user?.role === 'admin' && <li><Link href="/admin">Admin Dashboard</Link></li>}
        {user?.role === 'doctor' && <li><Link href="/doctor">Doctor Dashboard</Link></li>}
        {user && <li><Link href="/account">Account</Link></li>}
      </ul>
    </nav>
  );
};

export default Navbar;
