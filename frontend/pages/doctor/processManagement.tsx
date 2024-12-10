// frontend/pages/doctor/processManagement.tsx
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { fetchData } from '../../utils/api';
import styles from '../../styles/Profile.module.css';

const ProcessManagement = () => {
  const [processData, setProcessData] = useState([]);

  useEffect(() => {
    const fetchProcessData = async () => {
      const data = await fetchData('/api/doctor/process');
      setProcessData(data);
    };
    fetchProcessData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h2>Process Management</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Status</th>
              <th>Count</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {processData.map((row: any) => (
              <tr key={row.status}>
                <td>{row.status}</td>
                <td>{row.count}</td>
                <td><button>Details</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProcessManagement;
