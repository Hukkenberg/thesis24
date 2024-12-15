import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}$1`, { email, password });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('role', res.data.role);

      // Navigate based on user role
      switch (res.data.role) {
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
      }
    } catch (err) {
      console.error(err);
      alert('Login failed!');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}
