// File: frontend/pages/login.tsx
import { useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  // Logging input changes
  const handleEmailChange = (e) => {
    console.log('Email input changed:', e.target.value);
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    console.log('Password input changed');
    setPassword(e.target.value);
  };

  // Handle login logic with logging
  const handleLogin = async () => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    console.log('Login button clicked with:', { email, password });

    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      console.log('API request sent:', `${API_URL}/api/auth/login`);
      console.log('API response status:', response.status);

      if (!response.ok) {
        const errorResponse = await response.json();
        console.error('API error response:', errorResponse);
        setError(errorResponse.error || 'Login failed');
        return;
      }

      const data = await response.json();
      console.log('Login successful:', data);

      router.push('/');
    } catch (err) {
      console.error('Network error during login:', err.message);
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
          onChange={handleEmailChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full p-2 border border-gray-300 rounded"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>

      <button
        onClick={handleLogin}
        className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
