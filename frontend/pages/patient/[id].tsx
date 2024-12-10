import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import axios from 'axios';
import styles from '../../styles/Profile.module.css';

const PatientDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [patient, setPatient] = useState<any>(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <p>Loading patient details...</p>;

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h2>Patient Details</h2>
        <p>Name: {patient?.name}</p>
        <p>Age: {patient?.age}</p>
      </div>
    </div>
  );
};

export default PatientDetails;
