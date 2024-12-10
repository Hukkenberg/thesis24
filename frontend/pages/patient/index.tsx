// frontend/pages/patient/index.tsx
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPatients } from '../../redux/patientSlice';
import Navbar from '../../components/Navbar';
import PatientCard from '../../components/PatientCard';
import styles from '../../styles/Profile.module.css';

const PatientList = () => {
  const dispatch = useDispatch();
  const { data: patients, status, error } = useSelector((state) => state.patients);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPatients());
    }
  }, [dispatch, status]);

  if (status === 'loading') return <p>Loading patients...</p>;
  if (status === 'failed') return <p>{error}</p>;

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h2>Danh sách bệnh nhân</h2>
        <div className={styles.grid}>
          {patients.map((patient) => (
            <PatientCard key={patient.id} patient={patient} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientList;
