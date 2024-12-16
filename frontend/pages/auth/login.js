
import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        \`\${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/login\`,
        { email, password }
      );
      const { token, role } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('role', role); // Save user role
      router.push('/'); // Redirect to homepage
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h1>Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
