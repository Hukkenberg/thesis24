import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const [role, setRole] = useState('');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('role');

    if (!token || !userRole) {
      router.push(`${process.env.NEXT_PUBLIC_API_URL}$1`);
      return;
    }

    setRole(userRole);

    // Redirect based on role if necessary
    switch (userRole) {
      case 'doctor':
        router.push(`${process.env.NEXT_PUBLIC_API_URL}$1`);
        break;
      case 'patient':
        router.push(`${process.env.NEXT_PUBLIC_API_URL}$1`);
        break;
      case 'admin':
        router.push(`${process.env.NEXT_PUBLIC_API_URL}$1`);
        break;
      case 'lab':
        router.push(`${process.env.NEXT_PUBLIC_API_URL}$1`);
        break;
      default:
        alert('Unknown role');
        router.push(`${process.env.NEXT_PUBLIC_API_URL}$1`);
    }
  }, [router]);

  return (
    <div>
      <h1>Loading Dashboard...</h1>
    </div>
  );
}
