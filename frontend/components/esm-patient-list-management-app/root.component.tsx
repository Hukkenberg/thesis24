
import Link from 'next/link';

export default function RootComponent() {
  return (
    <div>
      <h1>Patient Lists</h1>
      <nav>
        <Link href="/patients">Patient Dashboard</Link>
      </nav>
      <main>
        <h2>Welcome to Patient Management</h2>
      </main>
    </div>
  );
}
