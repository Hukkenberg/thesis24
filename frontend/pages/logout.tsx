import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Logout(): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    const logout = async () => {
      try {
        await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' });
      } catch (err) {
        console.error('Error during logout:', err);
      } finally {
        router.push('/login');
      }
    };

    logout();
  }, [router]);

  return <div>Đang đăng xuất...</div>;
}
