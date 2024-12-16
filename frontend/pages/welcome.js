
import Link from 'next/link';

export default function Welcome() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Welcome to the Management System</h1>
            <p>Select your role to proceed:</p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                <li><Link href="/dashboard/admin">Admin Dashboard</Link></li>
                <li><Link href="/dashboard/doctor">Doctor Dashboard</Link></li>
                <li><Link href="/dashboard/lab">Lab Technician Dashboard</Link></li>
                <li><Link href="/dashboard/patient">Patient Dashboard</Link></li>
            </ul>
        </div>
    );
}
