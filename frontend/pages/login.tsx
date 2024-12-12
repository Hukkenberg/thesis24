// File: frontend/pages/login.tsx
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const validateInputs = () => {
    if (!email.includes('@') || email.trim() === '') {
      setError('Invalid email format');
      return false;
    }
    if (password.trim().length < 6) {
      setError('Password must be at least 6 characters');
      return false;
    }
    setError('');
    return true;
  };

  const handleLogin = async () => {
    if (!validateInputs()) return;

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.error || 'Login failed');
        return;
      }

      router.push('/');
    } catch (err) {
      setError('Network error: Unable to connect to server');
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-white shadow-md rounded">
      <h1 className="text-xl font-semibold mb-4">Login</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-2 border border-gray-300 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="password">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            className="w-full p-2 border border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={toggleShowPassword}
            className="absolute inset-y-0 right-2 flex items-center text-sm"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
      </div>
      <button
        onClick={handleLogin}
        className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Login
      </button>
    </div>
  );
}
