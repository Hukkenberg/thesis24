import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        router.push('/');
      } else {
        setError(data.error || 'Login failed');
      }
    } catch {
      setError('An error occurred during login');
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Đăng nhập</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="block w-full px-3 py-2 mb-4 border rounded"
      />
      <div className="relative mb-4">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full px-3 py-2 border rounded"
        />
        <button
          type="button"
          onClick={toggleShowPassword}
          className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
        >
          {showPassword ? 'Ẩn' : 'Hiện'}
        </button>
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <button
        onClick={handleLogin}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Đăng nhập
      </button>
    </div>
  );
}
