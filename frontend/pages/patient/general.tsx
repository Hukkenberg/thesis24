import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import axios from 'axios';
import styles from '../../styles/Profile.module.css';

const GeneralProfile = () => {
  const [patient, setPatient] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await axios.get('/api/patients/1');
        setPatient(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPatient();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h2>General Profile</h2>
        <p>Name: {patient?.name}</p>
        <p>Age: {patient?.age}</p>
      </div>
    </div>
  );
};

export default GeneralProfile;
