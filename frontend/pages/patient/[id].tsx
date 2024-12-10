import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import { updatePatient } from '../../redux/patientSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import styles from '../../styles/Profile.module.css';

const PatientDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [patient, setPatient] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await axios.get(`/api/patients/${id}`);
        setPatient(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchPatient();
  }, [id]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (id && patient) {
      dispatch(updatePatient({ id: String(id), data: patient }));
    }
  };

  if (loading) return <p>Loading patient details...</p>;

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <h2>Patient Details</h2>
          <div className={styles.row}>
            <label>Name:</label>
            <input
              type="text"
              value={patient.name || ''}
              onChange={(e) => setPatient({ ...patient, name: e.target.value })}
            />
          </div>
          <div className={styles.row}>
            <label>Age:</label>
            <input
              type="number"
              value={patient.age || ''}
              onChange={(e) => setPatient({ ...patient, age: e.target.value })}
            />
          </div>
          <button type="submit">Update Patient</button>
        </form>
      </div>
    </div>
  );
};

export default PatientDetails;
