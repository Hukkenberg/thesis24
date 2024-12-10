import { useEffect, useState } from 'react';
import { fetchData } from '../../utils/api';

const Patients = () => {
  const [patients, setPatients] = useState<any[]>([]);

  useEffect(() => {
    const fetchPatients = async () => {
      const data = await fetchData('/api/doctor/patients');
      setPatients(data);
    };
    fetchPatients();
  }, []);

  return (
    <div>
      <h1>Danh sách bệnh nhân</h1>
      <table>
        <thead>
          <tr>
            <th>Tên</th>
            <th>Tuổi</th>
            <th>Chẩn đoán</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.diagnosis}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Patients;
