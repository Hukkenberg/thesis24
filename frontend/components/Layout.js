import Navbar from './Navbar';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>&copy; 2024 Hospital Management System</p>
      </footer>
    </div>
  );
};

export default Layout;
