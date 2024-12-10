// frontend/pages/login.tsx
import { useState } from 'react';
import { postData } from '../utils/api';
import styles from '../styles/Profile.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const { token } = await postData('/api/auth/login', { username, password });
      alert('Login successful!');
      setError('');
    } catch (err) {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className={styles.authContainer}>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.row}>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className={styles.row}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
