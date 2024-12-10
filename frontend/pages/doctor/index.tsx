import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../../components/Navbar';
import { fetchPatients } from '../../redux/patientSlice';
import PatientCard from '../../components/PatientCard';
import styles from '../../styles/Profile.module.css';

const DoctorDashboard = () => {
  const dispatch = useDispatch();
  const { data: patients, status } = useSelector((state: any) => state.patients);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPatients());
    }
  }, [dispatch, status]);

  if (status === 'loading') return <p>Loading patients...</p>;
  if (status === 'failed') return <p>Failed to load patients.</p>;

  return (
    <div>
      <Navbar />
      <div className={styles.dashboard}>
        <h1>Doctor Dashboard</h1>
        <div className={styles.grid}>
          {patients.map((patient: any) => (
            <PatientCard key={patient.id} patient={patient} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
