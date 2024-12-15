
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Patient Management System</h1>
      <nav>
        <ul>
          <li><Link href='/patients'>Manage Patients</Link></li>
          <li><Link href='/appointments'>Manage Appointments</Link></li>
          <li><Link href='/tests'>Manage Tests</Link></li>
        </ul>
      </nav>
    </div>
  );
}
