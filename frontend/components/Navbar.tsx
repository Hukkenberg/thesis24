import Link from 'next/link';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/login">Login</Link></li>
      <li><Link href="/admin">Admin</Link></li>
      <li><Link href="/doctor/patients">Doctor</Link></li>
      <li><Link href="/patient/profile">Patient</Link></li>
      <li><Link href="/lab/results">Lab</Link></li>
    </ul>
  </nav>
);

export default Navbar;
