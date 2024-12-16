import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function NavbarWithLogin() {
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_BASE_URL + '/auth/login',
        { email: email, password: password }
      );
      localStorage.setItem('token', response.data.token);
      router.push('/dashboard');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#007bff', color: '#fff' }}>
        <div>
          <a href="/" style={{ color: '#fff', textDecoration: 'none', marginRight: '1rem' }}>Home</a>
          <a href="/" style={{ color: '#fff', textDecoration: 'none' }}>Tools</a>
        </div>
        <div>
          <button
            onClick={() => setShowLogin(!showLogin)}
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            Account
          </button>
        </div>
      </nav>

      {/* Login Popup */}
      {showLogin && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: '#fff',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
          zIndex: 1000,
        }}>
          <h2 style={{ textAlign: 'center' }}>Login</h2>
          {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '1rem' }}>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
              />
            </div>
            <button type="submit" style={{ width: '100%', padding: '0.5rem', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}>
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
