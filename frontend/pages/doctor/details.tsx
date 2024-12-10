import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { fetchData, postData } from '../../utils/api';

const DoctorDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [patient, setPatient] = useState<any>(null);
  const [diagnosis, setDiagnosis] = useState('');

  useEffect(() => {
    const fetchPatient = async () => {
      if (!id) return;
      try {
        const data = await fetchData(`/api/doctor/patients/${id}`);
        setPatient(data);
        setDiagnosis(data.diagnosis || '');
      } catch (error) {
        console.error('Failed to fetch patient details:', error);
      }
    };
    fetchPatient();
  }, [id]);

  const updateDiagnosis = async () => {
    try {
      await postData(`/api/doctor/patients/${id}/diagnosis`, { diagnosis });
      alert('Chẩn đoán đã được cập nhật!');
    } catch (error) {
      console.error('Failed to update diagnosis:', error);
    }
  };

  if (!patient) return <p>Đang tải...</p>;

  return (
    <div>
      <h1>Chi tiết bệnh nhân</h1>
      <p><strong>Tên:</strong> {patient.name}</p>
      <p><strong>Tuổi:</strong> {patient.age}</p>
      <p><strong>Giới tính:</strong> {patient.gender}</p>
      <textarea
        value={diagnosis}
        onChange={(e) => setDiagnosis(e.target.value)}
        placeholder="Nhập chẩn đoán"
      />
      <button onClick={updateDiagnosis}>Lưu chẩn đoán</button>
    </div>
  );
};

export default DoctorDetails;
