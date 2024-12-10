// frontend/pages/patient/treatment.tsx
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { fetchData } from '../../utils/api';
import styles from '../../styles/Treatment.module.css';

const PatientTreatment = () => {
  const [treatment, setTreatment] = useState([]);

  useEffect(() => {
    const fetchTreatment = async () => {
      const data = await fetchData('/api/patient/treatment');
      setTreatment(data);
    };
    fetchTreatment();
  }, []);

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h2>Patient Treatment</h2>
        <ul>
          {treatment.map((item: any) => (
            <li key={item.id}>
              {item.date}: {item.details}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PatientTreatment;
