import Navbar from '../../components/Navbar';
import { useState, useEffect } from 'react';
import { fetchData } from '../../utils/api';
import styles from '../../styles/Profile.module.css';

const DoctorPatients = () => {
  const [patients, setPatients] = useState<any[]>([]);

  useEffect(() => {
    const loadPatients = async () => {
      try {
        const data = await fetchData('/doctors/patients');
        setPatients(data);
      } catch (error) {
        console.error('Failed to load patients', error);
      }
    };

    loadPatients();
  }, []);

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h2>Patients</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.gender}</td>
                <td>
                  <button>View Details</button>
                  <button>Prescribe</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorPatients;
