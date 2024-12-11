import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Logout(): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem('token');
    router.push('/login');
  }, [router]);

  return <div>Đang đăng xuất...</div>;
}
