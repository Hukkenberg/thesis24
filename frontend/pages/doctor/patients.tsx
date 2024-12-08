import { useEffect, useState } from 'react';
import { fetchData } from '../../utils/api';
import PatientCard from '../../components/PatientCard';
import styles from '../../styles/Dashboard.module.css';

const DoctorPatients = () => {
  const [patients, setPatients] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPatients = async () => {
      try {
        const data = await fetchData('/doctors/patients');
        setPatients(data);
      } catch (err) {
        setError('Failed to load patients. Please try again later.');
      }
    };

    loadPatients();
  }, []);

  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <div className={styles.dashboard}>
      <h1>Doctor's Patients</h1>
      {patients.length === 0 ? (
        <p>No patients assigned yet.</p>
      ) : (
        <div>
          {patients.map((patient) => (
            <PatientCard key={patient.id} patient={patient} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DoctorPatients;
