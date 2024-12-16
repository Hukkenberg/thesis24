
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Home() {
  const [dashboard, setDashboard] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem('role'); // Mock role retrieval
    if (!role) router.push('/auth/login');

    const fetchDashboard = async () => {
      try {
        const response = await axios.get(
          process.env.NEXT_PUBLIC_API_BASE_URL + '/api/dashboard/' + role
        );
        setDashboard(response.data);
      } catch (error) {
        console.error('Error fetching dashboard:', error);
      }
    };

    fetchDashboard();
  }, [router]);

  if (!dashboard) return <p>Loading...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{dashboard.message}</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {dashboard.links.map((link, index) => (
          <li key={index} style={{ marginBottom: '1rem' }}>
            <a href={link.url} style={{ fontSize: '1.2rem', color: '#007bff' }}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
