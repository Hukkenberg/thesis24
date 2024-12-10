// frontend/pages/patient/[id].tsx
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { updatePatient } from '../../redux/patientSlice';
import Navbar from '../../components/Navbar';
import styles from '../../styles/Profile.module.css';
import axios from 'axios';

const PatientDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [patient, setPatient] = useState({ name: '', age: '', gender: '', diagnosis: '' });
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await axios.get(`/api/patients/${id}`);
        setPatient(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    if (id) fetchPatient();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updatePatient({ id, data: patient }));
  };

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <h2>Chi tiết bệnh nhân</h2>
          <div className={styles.row}>
            <label>Họ và tên:</label>
            <input
              type="text"
              value={patient.name}
              onChange={(e) => setPatient({ ...patient, name: e.target.value })}
            />
          </div>
          <div className={styles.row}>
            <label>Tuổi:</label>
            <input
              type="number"
              value={patient.age}
              onChange={(e) => setPatient({ ...patient, age: e.target.value })}
            />
          </div>
          <div className={styles.row}>
            <label>Giới tính:</label>
            <select
              value={patient.gender}
              onChange={(e) => setPatient({ ...patient, gender: e.target.value })}
            >
              <option value="male">Nam</option>
              <option value="female">Nữ</option>
              <option value="other">Khác</option>
            </select>
          </div>
          <div className={styles.row}>
            <label>Chẩn đoán:</label>
            <textarea
              value={patient.diagnosis}
              onChange={(e) => setPatient({ ...patient, diagnosis: e.target.value })}
            />
          </div>
          <button type="submit">Cập nhật</button>
        </form>
      </div>
    </div>
  );
};

export default PatientDetails;
