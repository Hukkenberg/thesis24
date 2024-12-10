// frontend/pages/doctor/details.tsx
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import { fetchData, postData } from '../../utils/api';
import styles from '../../styles/Profile.module.css';

const DoctorDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [patient, setPatient] = useState<any>(null);
  const [diagnosis, setDiagnosis] = useState('');

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const patientData = await fetchData(`/api/doctor/patients/${id}`);
        setPatient(patientData);
      } catch (err) {
        console.error(err);
      }
    };
    if (id) fetchPatient();
  }, [id]);

  const handleUpdateDiagnosis = async () => {
    try {
      await postData(`/api/doctor/patients/${id}/diagnosis`, { diagnosis });
      alert('Diagnosis updated successfully!');
    } catch (err) {
      alert('Failed to update diagnosis.');
    }
  };

  if (!patient) return <p>Loading patient details...</p>;

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h2>Patient Details</h2>
        <p><strong>Name:</strong> {patient.name}</p>
        <p><strong>Age:</strong> {patient.age}</p>
        <textarea
          value={diagnosis}
          onChange={(e) => setDiagnosis(e.target.value)}
          placeholder="Update diagnosis"
        />
        <button onClick={handleUpdateDiagnosis}>Update Diagnosis</button>
      </div>
    </div>
  );
};

export default DoctorDetails;
