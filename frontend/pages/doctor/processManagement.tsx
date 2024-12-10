// frontend/pages/doctor/processManagement.tsx
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { fetchData } from '../../utils/api';
import styles from '../../styles/ProcessManagement.module.css';

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
        <h2>Quản Lý Tiến Trình</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Trạng Thái</th>
              <th>Số Lượng</th>
              <th>Chi Tiết</th>
            </tr>
          </thead>
          <tbody>
            {processData.map((row: any) => (
              <tr key={row.status}>
                <td>{row.status}</td>
                <td>{row.count}</td>
                <td><button>Chi Tiết</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProcessManagement;
