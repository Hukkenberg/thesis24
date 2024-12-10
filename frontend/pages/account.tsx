// frontend/pages/account.tsx
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { fetchData, postData } from '../utils/api';
import styles from '../styles/Profile.module.css';

const AccountPage = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await fetchData('/api/account');
        setUser(userData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const handleUpdate = async (e: any) => {
    e.preventDefault();
    try {
      await postData('/api/account', user);
      alert('Account updated successfully!');
    } catch (err) {
      console.error(err);
      alert('Failed to update account.');
    }
  };

  if (loading) return <p>Loading account details...</p>;

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <form onSubmit={handleUpdate}>
          <h2>Account Details</h2>
          <div className={styles.row}>
            <label>Name:</label>
            <input
              type="text"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </div>
          <div className={styles.row}>
            <label>Email:</label>
            <input
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default AccountPage;
