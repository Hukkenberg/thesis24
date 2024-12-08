import Navbar from '../../components/Navbar';
import { useState } from 'react';
import { postData } from '../../utils/api';
import styles from '../../styles/Profile.module.css';

const Prescriptions = () => {
  const [patientId, setPatientId] = useState('');
  const [medication, setMedication] = useState('');
  const [dosage, setDosage] = useState('');
  const [notes, setNotes] = useState('');

  const handlePrescribe = async () => {
    try {
      await postData('/doctors/prescriptions', { patientId, medication, dosage, notes });
      alert('Prescription added successfully');
    } catch (error) {
      console.error('Failed to add prescription', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h2>Prescriptions</h2>
        <form>
          <div className={styles.row}>
            <label>Patient ID:</label>
            <input
              type="text"
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
              placeholder="Enter patient ID"
            />
          </div>
          <div className={styles.row}>
            <label>Medication:</label>
            <input
              type="text"
              value={medication}
              onChange={(e) => setMedication(e.target.value)}
              placeholder="Enter medication name"
            />
          </div>
          <div className={styles.row}>
            <label>Dosage:</label>
            <input
              type="text"
              value={dosage}
              onChange={(e) => setDosage(e.target.value)}
              placeholder="Enter dosage"
            />
          </div>
          <div className={styles.row}>
            <label>Notes:</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Enter notes"
            />
          </div>
          <button type="button" onClick={handlePrescribe}>Prescribe</button>
        </form>
      </div>
    </div>
  );
};

export default Prescriptions;
