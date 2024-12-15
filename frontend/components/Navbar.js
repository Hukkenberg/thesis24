
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600">
          <Link href="/">HospitalCare</Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link href="/dashboard" className="hover:text-blue-500 transition">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/patients" className="hover:text-blue-500 transition">
              Patients
            </Link>
          </li>
          <li>
            <Link href="/appointments" className="hover:text-blue-500 transition">
              Appointments
            </Link>
          </li>
          <li>
            <Link href="/profile" className="hover:text-blue-500 transition">
              Profile
            </Link>
          </li>
        </ul>
        <div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
