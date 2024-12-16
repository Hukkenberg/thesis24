
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem('role'); // Example: Get user role
    if (role === 'admin') {
      router.push('/dashboard/admin');
    } else if (role === 'doctor') {
      router.push('/dashboard/doctor');
    } else if (role === 'patient') {
      router.push('/dashboard/patient');
    } else if (role === 'lab') {
      router.push('/dashboard/lab');
    } else {
      router.push('/auth/login'); // Default: Login page
    }
  }, [router]);

  return <p>Redirecting...</p>;
}
