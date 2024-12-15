
import Link from 'next/link';

export default function RootComponent() {
  return (
    <div>
      <h1>Appointments</h1>
      <nav>
        <Link href="/appointments">Appointments Dashboard</Link>
      </nav>
      <main>
        <h2>Welcome to Appointments Management</h2>
      </main>
    </div>
  );
}
