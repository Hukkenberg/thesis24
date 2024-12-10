import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { fetchData } from '../../utils/api';
import styles from '../../styles/Profile.module.css';

const PatientProgress = () => {
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    const fetchProgress = async () => {
      const data = await fetchData('/api/patient/progress');
      setProgress(data);
    };
    fetchProgress();
  }, []);

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h2>Patient Progress</h2>
        <ul>
          {progress.map((entry: any) => (
            <li key={entry.id}>
              {entry.date}: {entry.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PatientProgress;
