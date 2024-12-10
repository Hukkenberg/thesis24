// frontend/pages/patient/general.tsx
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import styles from '../../styles/Profile.module.css';
import axios from 'axios';

const GeneralProfile = () => {
  const [patient, setPatient] = useState({ name: '', age: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await axios.get('/api/patients/1'); // Replace with dynamic patient ID
        setPatient(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPatient();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put('/api/patients/1', patient); // Replace with dynamic patient ID
      alert('Patient updated successfully');
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <h2>Hành chính</h2>
          <div className={styles.row}>
            <label>Họ và tên:</label>
            <input
              type="text"
              value={patient.name}
              onChange={(e) => setPatient({ ...patient, name: e.target.value })}
              placeholder="Nhập họ và tên"
            />
          </div>
          <div className={styles.row}>
            <label>Tuổi:</label>
            <input
              type="number"
              value={patient.age}
              onChange={(e) => setPatient({ ...patient, age: e.target.value })}
              placeholder="Nhập tuổi"
            />
          </div>
          <button type="submit">Cập nhật</button>
        </form>
      </div>
    </div>
  );
};

export default GeneralProfile;
