import Navbar from '../../components/Navbar';
import { useEffect, useState } from 'react';
import { fetchData } from '../../utils/api';
import styles from '../../styles/Profile.module.css';
import { useRouter } from 'next/router';

const PatientDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [patient, setPatient] = useState<any>(null);

  useEffect(() => {
    const loadPatientDetails = async () => {
      if (!id) return;
      try {
        const data = await fetchData(`/doctors/patients/${id}`);
        setPatient(data);
      } catch (error) {
        console.error('Failed to load patient details', error);
      }
    };

    loadPatientDetails();
  }, [id]);

  if (!patient) return <p>Loading...</p>;

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h2>Patient Details</h2>
        <p><strong>Name:</strong> {patient.name}</p>
        <p><strong>Age:</strong> {patient.age}</p>
        <p><strong>Gender:</strong> {patient.gender}</p>
        <p><strong>Medical History:</strong> {patient.history}</p>
      </div>
    </div>
  );
};

export default PatientDetails;
